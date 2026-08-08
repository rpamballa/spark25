import axios from 'axios';
import InPageNavigation, { activeTabRef } from "../components/inpage-navigation.component";
import { useEffect, useState } from 'react';
import Loader from '../components/loader.component';
import BlogPostCard from '../components/blog-post.component';
import MinimalBlogPost from '../components/nobanner-blog-post.component';
import NoDateMessage from '../components/nodata.component';
import LoadMoreDataBtn from '../components/load-more.component';
import { useSelector, useDispatch } from 'react-redux';



const BlogHomePage = () => {
  const [blogs, setBlogs] = useState({
    results: [],
    totalDocs: 0,
    page: 1
  });
  let [trendingBlogs, setTrendingBlogs] = useState(null);
  let [pageState, setPageState] = useState("All");
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  let categories = [
    "growth marketing",
    "paid media",
    "web design",
    "trends",
    "analytics",
    "programming",
    "finance",
    "web" 
  ];

  const fetchLatestBlogs = (params = { page: 1 }) => {
    axios.post(`${import.meta.env.VITE_API_URL}/latest-blogs`, params)
      .then(({ data }) => {
        setBlogs((prevBlogs) => ({
          ...prevBlogs,
          results: params.page === 1 ? data.blogs : [...prevBlogs.results, ...data.blogs],
          totalDocs: data.totalDocs,
          page: params.page,
        }));
      })
      .catch(err => {
        console.error("Error fetching latest blogs:", err);
      });
  };
  
  const fetchBlogsByCategory = (params = { tag: pageState, page: 1 }) => {
    axios.post(`${import.meta.env.VITE_API_URL}/search-blogs`, params)
      .then(({ data }) => {
        setBlogs((prevBlogs) => ({
          ...prevBlogs,
          results: params.page === 1 ? data.blogs : [...prevBlogs.results, ...data.blogs],
          totalDocs: data.totalDocs,
          page: params.page,
        }));
      })
      .catch(err => {
        console.error("Error fetching blogs by category:", err);
      });
  };
  

  const fetchTrendingBlogs = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/trending-blogs`)
      .then(({ data }) => {
        setTrendingBlogs(data.blogs); 
      })
      .catch(err => {
        console.error("Error fetching trending blogs:", err);
      });
  };

  useEffect(() => {
    if (activeTabRef?.current) {
      activeTabRef.current.click();
    }

    if (pageState === "All") {
      fetchLatestBlogs();
    } else {
      fetchBlogsByCategory();
    }

    if (!trendingBlogs) {
      fetchTrendingBlogs();
    }
  }, [pageState]);

  const loadBlogByCategory = (e) => {
    let category = e.target.innerText;
    setBlogs({ results: [], totalDocs: 0, page: 1 });

    if (pageState === category) {
      setPageState("All");
    } else {
      setPageState(category);
    }
  };

  return (
    <section className={`h-cover flex justify-center gap-10 ${theme == 'light' ? 'bg-white text-black' : 'bg-gradient-to-r from-[#030313] via-[#190638] to-[#2a0952] text-white'}   `}>
      {/* Latest */}
      <div className="w-full">
        <InPageNavigation routes={[pageState, "trending"]} defaultHidden={["trending"]}>
        <>
                            {blogs == null ? (
                                <Loader />
                            ) : (
                                blogs.results.length ? 
                                    blogs.results.map((blog, i) => {
                                        return (
                                            <div
                                                key={i}
                                            >
                                                <BlogPostCard
                                                    content={blog}
                                                    author={
                                                        blog.author.personal_info
                                                    }
                                                />
                                            </div>
                                        );
                                    })
                                : <NoDateMessage message="No blogs published" />
                            )}
                            <LoadMoreDataBtn state={blogs} fetchDataFun={( pageState == "All" ? fetchLatestBlogs : fetchBlogsByCategory )} />
                        </>

          {trendingBlogs == null ? (
            <Loader />
          ) : (
            trendingBlogs.length > 0 ? (
              trendingBlogs.map((blog, i) => (
                <div key={i}>
                  <MinimalBlogPost blog={blog} index={i} />
                </div>
              ))
            ) : (
              <NoDateMessage message="No trending blogs" />
            )
          )}
        </InPageNavigation>
      </div>

      {/* Filter or trending */}
      <div className="min-w-[40%] lg:min-w-[400px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-medium text-xl mb-8">Stories from all interests</h1>
            <div className="flex gap-3 flex-wrap">
              {categories.map((category, i) => (
               <button
               onClick={loadBlogByCategory}
               key={i}
               className={`p-3 rounded-full capitalize ${pageState === category ? "bg-black text-white" : "bg-[linear-gradient(to_right,_#6552cb,_#fd95ff)]"}`}
             >
               {category}
             </button>
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-medium text-xl mb-8">
              Trending <i className="fi fi-rr-arrow-trend-up"></i>
            </h1>
            {trendingBlogs == null ? (
              <Loader />
            ) : (
              trendingBlogs.length > 0 ? (
                trendingBlogs.map((blog, i) => (
                  <div key={i}>
                    <MinimalBlogPost blog={blog} index={i} />
                  </div>
                ))
              ) : (
                <NoDateMessage message="No trending blogs" />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHomePage;

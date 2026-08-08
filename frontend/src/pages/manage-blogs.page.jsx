import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { filterPaginationData } from "../common/filter-pagination-data";
import { Toaster } from "react-hot-toast";
import InPageNavigation from "../components/inpage-navigation.component";
import Loader from "../components/loader.component";
import NoDataMessage from "../components/nodata.component";
import { ManageDraftBlogPost, ManagePublishedBlogCard } from "../components/manage-blogcard.component";
import LoadMoreDataBtn from "../components/load-more.component";
import { useSearchParams } from "react-router-dom";

const ManageBlogs = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [drafts, setDrafts] = useState(null);
    const [query, setQuery] = useState("");
    const [loadingBlogs, setLoadingBlogs] = useState(true);
    const [loadingDrafts, setLoadingDrafts] = useState(true);

    let activeTab = useSearchParams()[0].get("tab");

    let { userAuth: { accessToken } } = useContext(UserContext);

    const getBlogs = ({ page, draft, deletedDocCount = 0 }) => {
        axios.post(
            `${import.meta.env.VITE_API_URL}/user-written-blogs`,
            {
                page, draft, query, deletedDocCount 
            },
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        )
        .then(async ({ data }) => {


            if (!data || !data.blogs) {
                if (draft) {
                    setDrafts({ results: [] });
                    setLoadingDrafts(false);
                } else {
                    setBlogs({ results: [] });
                    setLoadingBlogs(false);
                }
                return;
            }

            let formatedData = await filterPaginationData({
                state: draft ? drafts : blogs,
                data: data.blogs, 
                page,
                user: accessToken,
                countRoute: "/user-written-blogs-count",
                data_to_send: { draft, query }
            });

            if (!formatedData) {
                formatedData = { results: [] }; 
            }

            if (draft) {
                setDrafts(formatedData);
                setLoadingDrafts(false);
            } else {
                setBlogs(formatedData);
                setLoadingBlogs(false);
            }

        })
        .catch(err => {
            console.error("Error fetching blogs:", err);
            if (draft) {
                setLoadingDrafts(false);
            } else {
                setLoadingBlogs(false);
            }
        }) 
    };

    useEffect(() => {
        if (accessToken) {
            if (blogs == null) {
                setLoadingBlogs(true);
                getBlogs({ page: 1, draft: false });
            }
            if (drafts == null) {
                setLoadingDrafts(true);
                getBlogs({ page: 1, draft: true });
            }
        }
    }, [accessToken, query]);

    const handleSearch = (e) => {
        let searchQuery = e.target.value;

        if (e.keyCode === 13 && searchQuery.length) {
            setLoadingBlogs(true);
            setLoadingDrafts(true);
            setQuery(searchQuery);
        }
    };

    const handleChange = (e) => {
        let searchQuery = e.target.value;

        if (!searchQuery.length) {
            setQuery("");
            setLoadingBlogs(true);
            setLoadingDrafts(true);
        }
    };
    
    return (
        <>
            <h1 className="max-md:hidden">Manage Blogs</h1>

            <Toaster />

            <div className="relative max-md:mt-5 md:mt-8 mb-10">
                <input 
                    type="search"
                    className="w-full bg-grey p-4 pl-12 pr-6 rounded-full placeholder:text-dark-grey"
                    placeholder="Search Blogs"
                    onChange={handleChange}
                    onKeyDown={handleSearch}
                />

                <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
            </div>

            <InPageNavigation routes={["Published Blogs", "Drafts"]} defaultActiveIndex={activeTab !== 'draft' ? 0 : 1}>
                { // Published Blogs
                    loadingBlogs ? (
                        <Loader />
                    ) : blogs && blogs.results && blogs.results.length ? (
                        <>
                            {blogs.results.map((blog, i) => (
                                <div key={i} transition={{ delay: i * 0.04 }}>
                                    <ManagePublishedBlogCard blog={{ ...blog, index: i, setStateFunc: setBlogs }} />
                                </div>
                            ))}

                            <LoadMoreDataBtn
                                state={blogs}
                                fetchDataFun={getBlogs}
                                additionalParam={{ draft: false, deletedDocCount: blogs.deletedDocCount }}
                            />
                        </>
                    ) : (
                        <NoDataMessage message="No published blogs" />
                    )
                }

                { // Draft Blogs
                    loadingDrafts ? (
                        <Loader />
                    ) : drafts && drafts.results && drafts.results.length ? (
                        <>
                            {drafts.results.map((blog, i) => (
                                <div key={i} transition={{ delay: i * 0.04 }}>
                                    <ManageDraftBlogPost blog={{ ...blog, index: i, setStateFunc: setDrafts }} />
                                </div>
                            ))}

                            <LoadMoreDataBtn
                                state={drafts}
                                fetchDataFun={getBlogs}
                                additionalParam={{ draft: true, deletedDocCount: drafts.deletedDocCount }}
                            />
                        </>
                    ) : (
                        <NoDataMessage message="No draft blogs" />
                    )
                }
            </InPageNavigation>
        </>
    );
}

export default ManageBlogs;

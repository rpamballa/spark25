import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/latest-blogs`
        );
        setBlogs(response.data.blogs.slice(2, 5));
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    //md:pb-44 with newsletter section
    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:pb-24 pb-20">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div className="flex flex-col">
            <div className="rounded-3xl md:w-92 contain 2xl:h-[310px]">
              <img className="rounded-3xl " src={blog.banner} />
            </div>
            <p className={`${theme == 'light' ? 'text-black' : 'text-white'} text-2xl md:text-3xl mt-4 mb-2`}>{blog.title}</p>
            <p className="text-gray-400 mb-3 md:text-2xl">
              {blog.des.split(" ").slice(0, 5).join(" ")}
              {blog.des.split(" ").length > 5 ? "..." : ""}
            </p>
            <Link to={`/blog/${blog.blog_id}`} className={`${theme == 'light' ? 'text-black' : 'text-white'} md:text-xl`}>Read More &rarr;</Link>
          </div>
        ))
      ) : (
        <div className="text-white text-center">No blogs available.</div>
      )}
    </div>
  );
};

export default BlogSection;

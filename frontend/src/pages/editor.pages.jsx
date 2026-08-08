import { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import BlogEditor from "../components/blog-editor.component";
import PublishForm from "../components/publish-form.component";

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  des: "",
  author: { personl_info: {} },
};

export const EditorContext = createContext({});

const Editor = () => {
  const [blog, setBlog] = useState(blogStructure);
  const [editorState, setEditorState] = useState("editor");
  const [textEditor, setTextEditor] = useState({ isReady: false });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  let {
    userAuth: { accessToken, isAdmin },
  } = useContext(UserContext);

  const { blog_id } = useParams(); // Get blog_id from the URL

  useEffect(() => {
    // Fetch the blog data only if there is a blog_id in the URL (i.e., we're editing an existing blog)
    if (blog_id) {
      const fetchBlog = async () => {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/get-blog`,
            { blog_id, draft: true, mode: "edit" },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setBlog(response.data.blog); // Update the blog state with fetched data
          setLoading(false);
        } catch (err) {
          setError("Failed to load blog data.");
          setLoading(false);
        }
      };
      fetchBlog();
    } else {
      setLoading(false); // No blog_id, we are creating a new blog
    }
  }, [blog_id, accessToken]);

  if (!isAdmin) return <Navigate to="/blog" />;
  if (accessToken === null) return <Navigate to="/signin" />;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <EditorContext.Provider
      value={{ blog, setBlog, editorState, setEditorState, textEditor, setTextEditor }}
    >
      {editorState === "editor" ? <BlogEditor /> : <PublishForm />}
    </EditorContext.Provider>
  );
};

export default Editor;

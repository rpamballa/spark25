import { Link, useNavigate, useParams } from "react-router-dom";
import blogBanner from "../imgs/blogBanner.png";
import { uploadImage } from "../common/aws";
import { useContext, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { EditorContext } from "../pages/editor.pages";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./tools.component";
import axios from "axios";
import { UserContext } from "../App";
import logo from "../imgs/Vector.svg";

const BlogEditor = () => {

  const {
    blog,
    blog: { title, banner, content, tags, des },
    setBlog,
    setTextEditor,
    setEditorState,
  } = useContext(EditorContext);

  const {
    userAuth: { accessToken },
  } = useContext(UserContext);

  const { blog_id } = useParams();
  const navigate = useNavigate();

  const editorRef = useRef(null);
  const [isEditorReady, setIsEditorReady] = useState(false);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "textEditor",
        data: content && Array.isArray(content) ? content[0] : content,
        tools: tools,
        placeholder: "Let's write an awesome story",
        onReady: () => {
          editorRef.current = editor;
          setIsEditorReady(true);
        },
      });

      setTextEditor(editor);

      return () => {
        if (editorRef.current) {
          try {
            editorRef.current.destroy();
            editorRef.current = null;
          } catch (e) {
            console.error("Error destroying editor", e);
          }
        }
      };
    }
  }, [content, setTextEditor]);

  // Function to handle banner image upload
  const handleBannerUpload = (e) => {
    let img = e.target.files[0];

    if (img) {
      let loadingToast = toast.loading("Uploading...");

      uploadImage(img)
        .then((url) => {
          if (url) {
            toast.dismiss(loadingToast);
            toast.success("Uploaded 👍");
            setBlog({ ...blog, banner: url });
          }
        })
        .catch((err) => {
          toast.dismiss(loadingToast);
          return toast.error(err);
        });
    }
  };

  // Function to handle title change
  const handleTitleChange = (e) => {
    let input = e.target;

    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";

    setBlog({ ...blog, title: input.value });
  };

  // Function to handle errors in image loading (fallback to default banner)
  const handleError = (e) => {
    let img = e.target;
    img.src = blogBanner;
  };

  // Function to handle publishing the blog
  const handlePublishEvent = () => {
    if (!banner.length) {
      return toast.error("Upload a blog banner to publish it");
    }

    if (!title.length) {
      return toast.error("Write a blog title to publish it");
    }

    if (editorRef.current && isEditorReady) {
      editorRef.current
        .save()
        .then((data) => {
          if (data.blocks.length) {
            setBlog({ ...blog, content: data });
            setEditorState("publish");
          } else {
            return toast.error("Write something in your blog to publish it");
          }
        })
        .catch((err) => {
          console.error("Error saving the content:", err);
          toast.error("Failed to save the content. Please try again.");
        });
    } else {
      toast.error("Editor is not ready. Please try again later.");
    }
  };

  // Function to handle saving the blog as a draft
  const handleSaveDraft = (e) => {
    if (e.target.className.includes("disable")) {
      return;
    }

    if (!title.length) {
      return toast.error("Write a blog title before saving it as a draft");
    }

    let loadingToast = toast.loading("Saving Draft....");

    e.target.classList.add("disable");

    if (editorRef.current && isEditorReady) {
      editorRef.current
        .save()
        .then((content) => {
          let blogObj = {
            title,
            banner,
            des,
            content,
            tags,
            draft: true,
          };

          axios
            .post(`${import.meta.env.VITE_API_URL}`, { ...blogObj, id: blog_id }, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then(() => {
              e.target.classList.remove("disable");

              toast.dismiss(loadingToast);
              toast.success("Saved 👍");

              setTimeout(() => {
                navigate("/dashboard/blogs?tab=draft");
              }, 500);
            })
            .catch(({ response }) => {
              e.target.classList.remove("disable");
              toast.dismiss(loadingToast);

              return toast.error(response.data.error);
            });
        })
        .catch((err) => {
          e.target.classList.remove("disable");
          toast.dismiss(loadingToast);
          console.error("Error saving the content:", err);
          toast.error("Failed to save the content. Please try again.");
        });
    } else {
      toast.error("Editor is not ready. Please try again later.");
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/blog" className="flex-none w-10">
          <img src={logo} alt="Logo" />
        </Link>
        <p className="max-md:hidden text-black line-clamp-1 w-full">
          {title.length ? title : "New Blog"}
        </p>

        <div className="flex gap-4 ml-auto">
          <button className="btn-dark py-2" onClick={handlePublishEvent}>
            Publish
          </button>
          <button className="btn-light py-2" onClick={handleSaveDraft}>
            Save Draft
          </button>
        </div>
      </nav>
      <Toaster />

      <section>
        <div className="mx-auto max-w-[900px] w-full">
          <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-grey">
            <label htmlFor="uploadBanner">
              <img
                src={banner || blogBanner}
                alt="Blog Banner"
                className="z-20"
                onError={handleError}
              />
              <input
                id="uploadBanner"
                type="file"
                accept=".png, .jpg, .jpeg"
                hidden
                onChange={handleBannerUpload}
              />
            </label>
          </div>

          <textarea
            defaultValue={title}
            placeholder="Blog Title"
            className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40 bg-white"
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                e.preventDefault();
              }
            }}
            onChange={handleTitleChange}
          ></textarea>

          <hr className="w-full opacity-10 my-5" />

          <div id="textEditor" className="font-gelasio"></div>
        </div>
      </section>
    </>
  );
};

export default BlogEditor;

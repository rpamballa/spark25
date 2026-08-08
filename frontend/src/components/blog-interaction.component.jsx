import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../pages/blog.page";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import {
  XIcon,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share";
import {
  TwitterShareButton,
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from "react-share";

const BlogInteraction = () => {
  let {
    blog,
    blog: {
      _id,
      title,
      content,
      blog_id,
      activity,
      activity: { total_likes, total_comments },
      author: {
        personal_info: { username: author_username },
      },
    },
    setBlog,
    islikedByUser,
    setLikedByUser,
    setCommentsWrapper,
  } = useContext(BlogContext);

  let {
    userAuth: { username, accessToken },
  } = useContext(UserContext);

  const [readTime, setReadTime] = useState(null);

  useEffect(() => {
    if (content && content[0]?.blocks) {
      setReadTime(calculateReadTime(content[0].blocks));
    }

    if (accessToken) {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/isliked-by-user`,
          { _id },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(({ data: { result } }) => {
          setLikedByUser(Boolean(result));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [content, accessToken]);

  const handleLike = () => {
    if (accessToken) {
      // Like the blog
      setLikedByUser((preVal) => !preVal);

      !islikedByUser ? total_likes++ : total_likes--;

      setBlog({ ...blog, activity: { ...activity, total_likes } });

      axios
        .post(
          `${import.meta.env.VITE_API_URL}/like-blog`,
          { _id, islikedByUser },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Not logged in
      toast.error("please login to like this blog");
    }
  };

  const calculateReadTime = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) {
      return 0;
    }

    let wordCount = 0;

    blocks.forEach((block) => {
      if (block?.data?.text) {
        wordCount += block.data.text.split(" ").length;
      } else if (block?.data?.items && Array.isArray(block.data.items)) {
        wordCount += block.data.items.join(" ").split(" ").length;
      }
    });

    return Math.ceil(wordCount / 200);
  };

  return (
    <>
      <Toaster />
      <hr className="border-grey my-2" />

      <div className="flex gap-6 md:justify-between py-2 items-center justify-center">
        {/* <div className="flex gap-3 items-center">
          <button
            onClick={handleLike}
            className={
              "w-10 h-10 rounded-full flex items-center justify-center " +
              (islikedByUser ? "bg-red/20 text-red" : "bg-grey/80")
            }
          >
            <i
              className={
                "fi " + (islikedByUser ? "fi-sr-heart" : "fi-rr-heart")
              }
            ></i>
          </button>
          <p className="text-xl text-dark-grey">{total_likes}</p>

          <button
            onClick={() => setCommentsWrapper((preVal) => !preVal)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-grey/80"
          >
            <i className="fi fi-rr-comment-dots"></i>
          </button>
          <p className="text-xl text-dark-grey">{total_comments}</p>
        </div> */}

        <div className="flex gap-6 items-center">
          {username == author_username ? (
            <Link
              to={`/editor/${blog_id}`}
              className="underline hover:text-purple"
            >
              Edit
            </Link>
          ) : (
            ""
          )}
          {readTime && (
            <p className="text-lg text-dark-grey">{readTime} min read</p>
          )}

          <TwitterShareButton
            url={`https://twitter.com/intent/tweet?text=Read ${title}&url=${location.href}`}
          >
            <XIcon size={32} round={true} />
          </TwitterShareButton>
          <FacebookShareButton
            url={`https://www.facebook.com/sharer/sharer.php?u=${location.href}`}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton
            url={`https://www.linkedin.com/shareArticle?mini=true&url=${location.href}`}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <EmailShareButton
            url={`mailto:?subject=Read ${title}&body=${location.href}`}
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      </div>

      <hr className="border-grey my-2" />
    </>
  );
};

export default BlogInteraction;

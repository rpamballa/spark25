import { Link } from 'react-router-dom';
import { getDay } from '../common/date';
import { useState, useEffect } from 'react';

const BlogPostCard = ({ content, author }) => {
  let { publishedAt, tags, title, des, banner, activity: { total_likes }, blog_id: id, content: blogContent } = content;
  let { fullname, username, profile_img } = author;

  const [readTime, setReadTime] = useState(null);

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

  useEffect(() => {
    if (blogContent?.blocks) {
      setReadTime(calculateReadTime(blogContent.blocks));
    }
  }, [blogContent]);

  return (
    <Link to={`/blog/${id}`} className='flex gap-8 items-center border-b border-grey pb-5 mb-4'>
      <div className='w-full'>
        <div className='flex gap-2 items-center mb-7'>
          <img src={profile_img} className='w-6 h-6 rounded-full' />
          <p className='line-clamp-1'>{fullname} @{username}</p>
          <p>{getDay(publishedAt)}</p>
        </div>

        <h1 className='blog-title'>{title}</h1>

        <p className='my-3 text-xl font-gelasio leading-7 max-sm:hidden md:max-[1100px]:hidden line-clamp-2'>{des}</p>

        <div className='flex gap-4 mt-7'>
          <span className='btn-light text-white bg-[linear-gradient(to_right,_#6552cb,_#fd95ff)] py-1 px-4'>{tags[0]}</span>
          {/* <span className='ml-3 flex items-center gap-2 text-dark-grey'>
            <i className='fi fi-rr-heart text-xl'></i>
            {total_likes}
          </span> */}
        
          {readTime && (
            <p className="text-lg text-dark-grey">{readTime} min read</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogPostCard;

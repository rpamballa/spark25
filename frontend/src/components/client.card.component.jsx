import React from "react";
import { Blockquote } from "flowbite-react";
import { useSelector, useDispatch } from 'react-redux';

export default function ClientCard({ image, name, position, testimonial }) {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto p-6  flex flex-col lg:items-start overflow-y-auto">
      <Blockquote>
        <svg
          className="mt-4 h-8 w-8 mb-6 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
          style={{ transform: 'scaleX(-1)' }}
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <p className={`py-2 px-8 md:text-2xl tracking-wide mx-auto ${theme == 'light' ? "text-black " : "text-white "}`}>{testimonial}</p>
        <div className="flex flex-row-reverse">
          <svg
            className="mt-6 h-8 w-8 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </Blockquote>
      <div className="flex ml-auto mt-10">
        <div className="flex flex-col">
          <p className={`text-sm font-semibold ${theme == 'light' ? "text-black " : "text-white "}`}>{name}</p>
          <p className={`text-sm ${theme == 'light' ? "text-black " : "text-white "}`}>{position}</p>
        </div>
      </div>
    </div>
  );
}

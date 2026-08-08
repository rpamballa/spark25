import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange, currentPage, isRightArrow, isLeftArrow }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className='flex items-center'>
      {isRightArrow ? (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className='w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center md:ml-6 hover:-translate-y-1 ease-linear duration-200 '
        >
          <span className='text-black text-3xl'>{'>'}</span>
        </button>
      ) : isLeftArrow ? (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className='w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center md:mr-6 hover:-translate-y-1 ease-linear duration-200'
        >
          <span className='text-black text-3xl'>{'<'}</span>
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;

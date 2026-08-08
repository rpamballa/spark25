import React, { useState, useEffect } from "react";
import ClientCard from "./client.card.component.jsx";
import Pagination from "./pagination.component.jsx";

const testimonialsData = [
  {
    name: "Michael Mast",
    position: "Vice-President & Product Marketing Executive",
    testimonial:
      "Lesya is a talented, driven marketer who will impress with both her ability to think strategically and for executing effectively. She’s a dynamic leader who is skilled at seeing the market opportunity and building a multi-channel strategy designed to drive new pipeline, increase pipeline velocity, and drive win rate.",
  },
  {
    name: "Sergio Sa Filho",
    position: "Senior Manager at Accenture",
    testimonial:
      "Lesya's talent and skills enable key decisions while managing a large-scale marketing process in one of the biggest products on the market (Google Assistant). Her ability to identify, prioritize, manage and lead marketing campaigns is only possible with her top notch professional skills and self-organization.",
  },
  {
    name: "Drew Kitchen",
    position: "VP, Precision at Spark Foundry",
    testimonial:
      "Lesya is a true leader, Her ability to manage her team effectively had a great deal of impact on the success of our campaigns. I depended on Lesya countless times as a major partner of Mediavest, and look forward to working with her in the future.",
  },
  {
    name: "Olena Maltseva",
    position: "Senior Marketing Program Manager, Web at Databricks",
    testimonial:
      "Lesya is a true data-driven marketer who cares about a customer’s needs first - everything she delivers is well thought out and detail-oriented. I’m impressed with the patience and persistence with which Lesya overcomes obstacles and the flexibility she applies to any challenges - from her ongoing initiatives to urgent strategic decisions.",
  },
  {
    name: "Rachel Quigley",
    position: "SVP Partnerships at AdTheorent",
    testimonial:
      "Lesya…consistently [brought] new and innovative ideas to the table and always made herself available to answer any questions we had about tools and the platform… She is professional, dedicated, intelligent and a solid communicator. Was an absolute pleasure working with Lesya.",
  },
  {
    name: "Edward Finegold",
    position: "Tech Advisor & Market Analyst",
    testimonial:
      "Very few people have the ability to improvise that Lesya possesses. It's a rare skill and very difficult to teach. If you're building or improving an organization and need to stretch your resources, people like Lesya are necessary to succeed.",
  },
  // Add more clients as needed
];

export default function Clients() {
  const itemsPerPage = 1;
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    let newPage = page;

    if (page > testimonialsData.length) {
      newPage = 1;
    } else if (page < 1) {
      newPage = testimonialsData.length;
    }

    setCurrentPage(newPage);

    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(testimonialsData.slice(startIndex, endIndex));
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto">
      {/* Desktop Pagination - Top */}
      <div className="hidden md:flex flex-row items-center w-full md:px-20 space-x-6">
        <Pagination
          totalItems={testimonialsData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={() => handlePageChange(currentPage - 1)}
          currentPage={currentPage}
          isLeftArrow
        />

        <div className="flex px-2">
          {currentItems.map((testimonial, index) => (
            <ClientCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>

        <Pagination
          totalItems={testimonialsData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={() => handlePageChange(currentPage + 1)}
          currentPage={currentPage}
          isRightArrow
        />
      </div>

      {/* Mobile Content and Pagination - Bottom */}
      <div className="flex flex-col md:hidden w-full px-4 space-y-6 items-center">
        <div className="flex px-2">
          {currentItems.map((testimonial, index) => (
            <ClientCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
        <div className="flex justify-center gap-16 mt-6">
          <Pagination
            totalItems={testimonialsData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={() => handlePageChange(currentPage - 1)}
            currentPage={currentPage}
            isLeftArrow
          />

          <Pagination
            totalItems={testimonialsData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={() => handlePageChange(currentPage + 1)}
            currentPage={currentPage}
            isRightArrow
          />
        </div>
      </div>
    </div>
  );
}

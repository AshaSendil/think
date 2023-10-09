import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation

const Sliders = ({ items }: any) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const imagesPerPage = 4;
  const router = useRouter(); // Initialize useRouter

  const nextImages = () => {
    setCurrentStartIndex((prevStartIndex) =>
      prevStartIndex + imagesPerPage < items.length
        ? prevStartIndex + imagesPerPage
        : 0
    );
  };

  const prevImages = () => {
    setCurrentStartIndex((prevStartIndex) =>
      prevStartIndex - imagesPerPage >= 0
        ? prevStartIndex - imagesPerPage
        : Math.floor((items.length - 1) / imagesPerPage) * imagesPerPage
    );
  };

  const handleImageClick = (href: string) => {
    // Use the router to navigate to the specified href
    router.push(href);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white rounded-full text-gray-600 shadow-md"
        onClick={prevImages}
      >
        &#10094;
      </button>
      <div className="slider-item flex gap-2">
        {items.slice(currentStartIndex, currentStartIndex + imagesPerPage).map((item: any, index: any) => (
          <a key={index} href={item.href} onClick={(e) => { e.preventDefault(); handleImageClick(item.href); }}>
            <img
              src={item.image}
              alt={item.title}
              className="w-1/4 h-auto rounded-lg cursor-pointer"
            />
          </a>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white rounded-full text-gray-600 shadow-md"
        onClick={nextImages}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Sliders;

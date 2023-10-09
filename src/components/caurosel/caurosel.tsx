import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = ({ images, autoPlayInterval = 3000 }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center relative">
        <div
          className="w-full h-full flex"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {images?.map((image:any, index:any) => (
            <div
              key={index}
              className={`w-full h-full ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain object-center"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg"
          style={{
            zIndex: 1,
          }}
        >
          {/* Add your search bar component here */}
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none"
          />
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-l flex items-center"
      >
        <FiChevronLeft className="text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-r flex items-center"
      >
        <FiChevronRight className="text-xl" />
      </button>
    </div>
  );
};

export default Carousel;

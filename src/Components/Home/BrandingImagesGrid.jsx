import React from 'react';

const BrandingImagesGrid = ({ images }) => {
  return (
    <div className="flex flex-wrap mx-4 my-4 justify-center items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4 flex justify-center"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-52 h-auto rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandingImagesGrid;

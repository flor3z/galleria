import React from 'react';
import MyModal from './Overlay';
import { useState } from 'react';

const ImageList = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex mx-6 my-8">
      <div className="columns-1 md:columns-3 lg:columns-6 md:transition-all md:ease-in-out gap-x-8  space-y-8">
        {images &&
          images.map((image) => {
            return (
              <img
                className="pointer rounded shadow-xl hover:scale-105 transition-all "
                onClick={() => {
                  setIsOpen(true);
                  setSelectedImg(image);
                }}
                // onClick={() => onClickFullImage(image.urls.full)}
                key={image.id}
                alt={image.alt_description}
                src={image.urls.regular}
              />
            );
          })}
      </div>

      {/* store image somewhere - useState URL - then pass to mymodal and use img URL */}
      <MyModal isOpen={isOpen} closeModal={closeModal} image={selectedImg} />
    </div>
  );
};

export default ImageList;

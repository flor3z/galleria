import React from 'react';
import MyModal from './Overlay';
import { useState } from 'react';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

const ImageList = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex mx-6 my-8">
      <div className="columns-1 md:columns-3 lg:columns-5 md:transition-all md:ease-in-out gap-x-8  space-y-8">
        {images &&
          images.map((image) => {
            return (
              <div
                key={image.id}
                className="relative text-white md:text-transparent md:hover:text-white"
              >
                <img
                  className="pointer rounded shadow-xl md:hover:scale-110  transition-all hover:contrast-75"
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedImg(image);
                  }}
                  alt={image.alt_description}
                  src={image.urls.regular}
                />
                <p className="absolute bottom-4 left-2 h-2 w-auto font-normal text-md ">
                  {image.user.name}
                </p>
                <a
                  rel="noreferrer"
                  href={image.urls.full}
                  target="_blank"
                  download={image.alt_description}
                  className="absolute bottom-4 right-2 h-3 w-auto font-normal text-2xl  hover:text-orange-400 hover:animate-bounce animate-ease-in-out"
                >
                  <BsFillArrowDownSquareFill />
                </a>
              </div>
            );
          })}
      </div>

      {/* {Modals live along side components as its own portal, display it when required} */}
      <MyModal isOpen={isOpen} closeModal={closeModal} image={selectedImg} />
    </div>
  );
};

export default ImageList;

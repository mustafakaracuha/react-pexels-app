import React, { useState } from "react";
import Masonry from "react-masonry-css";

import { useStore } from "../../store/store";
import ShowImage from "./showImage";

function masonryGrid() {
  const { images } = useStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const breakpointColumnsObj = {
    default: 6,
    1100: 5,
    700: 2,
    500: 2,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
        <ShowImage
        key={image.id}
        image={image}
        setSelectedImage={setSelectedImage}
        />
        ))}
      </Masonry>
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Büyük Resim"
            className="max-h-screen max-w-full p-10 rounded-[60px] transform transition-transform duration-300"
          />
        </div>
      )}
    </>
  );
}

export default masonryGrid;

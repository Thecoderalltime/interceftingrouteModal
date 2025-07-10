import React from "react";
import PhotoList from "./PhotoList";

const PhotoCart = ({ photo }) => {
  return (
    <div className="container my-4 lg:my-8">
      <div className="img-grid">
        {photo.map((photo) => (
          <PhotoList key={photo?.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoCart;

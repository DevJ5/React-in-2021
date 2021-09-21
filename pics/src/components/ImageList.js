import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  const content = props.images.map((image) => (
    <ImageCard key={image.id} image={image}></ImageCard>
  ));

  return (
    <div>
      <ul className="image-list">{content}</ul>
    </div>
  );
};

export default ImageList;

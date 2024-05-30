import React, { useState } from 'react';
import propTypes from 'prop-types';

import './carousel.css';

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="carousel">
      <img src={images[index].source} alt={images[index].alt} />
      <ul>
        {images.map(({ source, alt }, imageIndex) => (
          <li key={source}>
            <button type="button" onClick={() => { setIndex(imageIndex); }}>
              <img src={source} alt={alt} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
Carousel.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      source: propTypes.string,
      alt: propTypes.string,
    }),
  ).isRequired,
};

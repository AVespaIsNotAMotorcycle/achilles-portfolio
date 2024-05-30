import React, { useRef } from 'react';
import propTypes from 'prop-types';

import CloseIcon from '@mui/icons-material/Close';

import './image.css';

export default function Image({ source, alt }) {
  const dialogRef = useRef(null);

  const open = () => { dialogRef.current.showModal(); };
  const close = (e) => { e.preventDefault(); dialogRef.current.close(); };

  return (
    <div className="image">
      <button type="button" onClick={open}>
        <img src={source} alt={alt} />
      </button>
      <dialog ref={dialogRef}>
        <img src={source} alt={alt} />
        <form onSubmit={close}>
          <button type="submit" className="icon">
            <span>Close</span>
            <CloseIcon />
          </button>
        </form>
      </dialog>
    </div>
  );
}
Image.propTypes = {
  source: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

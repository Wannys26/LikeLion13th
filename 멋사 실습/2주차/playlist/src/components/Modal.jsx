// components/Modal.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ image, onClose }) => {
  // 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'auto';
  }, []);

  // 외부 클릭 감지
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-black text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <img src={image} alt="Album" className="max-w-[80vw] max-h-[80vh] rounded-md" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import css from './Modal.module.css';

function Modal({ modalImage, alt, onClose }) {
  const handleEscKeyPress = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = useCallback(
    e => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyPress);
  }, [handleEscKeyPress]);

  useEffect(() => {
    return () => {
      document.addEventListener('keydown', handleEscKeyPress);
    };
  }, [handleEscKeyPress]);

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={modalImage} alt={alt} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalImage: PropTypes.string,
  alt: PropTypes.string,
};

export default Modal;

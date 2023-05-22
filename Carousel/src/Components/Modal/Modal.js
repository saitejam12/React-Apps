import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';
import './Modal.scss';
const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true);
      //   modalRef.current.focus();
    } else setModalOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (modalOpen) {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [modalOpen]);

  if (!modalOpen) return null;

  return (
    <Portal>
      <FocusLock disabled={!modalOpen} persistentFocus={false} autoFocus={false}>
        <div className='modal-overlay' role='dialog' aria-modal='true' tabIndex={-1} ref={modalRef}>
          <div
            className='modal'
            role='document'
            aria-labelledby='This is the modal'
            aria-describedby='describing the modal'>
            <div className='modal-content' tabIndex={-1}>
              {children}
            </div>
            <button className='modal-close' onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      </FocusLock>
    </Portal>
  );
};

export default Modal;

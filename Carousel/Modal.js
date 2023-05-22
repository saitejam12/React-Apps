import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import classNames from 'classnames';
import { childrenByType } from 'react-children-by-type';
import './Modal.scss';

const ModalHeader = ({ children }) => <div className='Modal-header'>{children}</div>;
const ModalBody = ({ children }) => <div className='Modal-body'>{children}</div>;
const ModalFooter = ({ children }) => <div className='Modal-footer'>{children}</div>;

const Modal = ({ children, isOpen, onClose }) => {
  const [tabbableElements, setTabbableElements] = useState([]);
  const modalRef = React.createRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      setTabbableElements(focusableElements);
      focusableElements[0].focus();
    }
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === tabbableElements[0]) {
          event.preventDefault();
          tabbableElements[tabbableElements.length - 1].focus();
        }
      } else {
        if (document.activeElement === tabbableElements[tabbableElements.length - 1]) {
          event.preventDefault();
          tabbableElements[0].focus();
        }
      }
    }
  };

  const { header, body, footer } = childrenByType(children, [ModalHeader, ModalBody, ModalFooter]);

  return (
    <Portal isOpened={isOpen}>
      <div
        className={classNames('Modal-overlay', { 'is-open': isOpen })}
        onClick={onClose}
        role='button'
        aria-label='Close'
        tabIndex='0'>
        <div
          className={classNames('Modal', { 'is-open': isOpen })}
          ref={modalRef}
          role='dialog'
          aria-modal='true'
          onKeyDown={handleKeyDown}>
          <button className='Modal-closeButton' onClick={onClose}>
            &times;
          </button>
          {header && header}
          {body && <div className='Modal-content'>{body}</div>}
          {footer && footer}
        </div>
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal, ModalHeader, ModalBody, ModalFooter };

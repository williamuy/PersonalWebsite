import React, { ReactNode } from 'react';

/**
 * Props for the Modal component.
 * 
 * @property {boolean} isOpen - Whether the modal is currently open.
 * @property {() => void} onClose - Function to close the modal.
 * @property {ReactNode} children - The content of the modal.
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

/**
 * A reusable modal component.
 * 
 * @param {ModalProps} props - The props for the modal.
 * @returns {JSX.Element | null} The Modal component, or null if the modal is not open.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  /**
   * Props for the Button component.
   * 
   * @property {string} color - The color of the button.
   * @property {() => void} onClick - Function to handle click events on the button.
   */
  interface ButtonProps {
    color: string;
    onClick?: () => void; // Add this line
    // Other props...
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

// Export the Modal component as the default export
export default Modal;
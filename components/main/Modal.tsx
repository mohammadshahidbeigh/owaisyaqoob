import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6">
      <div className="bg-white text-black rounded-lg p-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-8 text-blue-500  hover:text-blue-700 text-5xl font-bold"
        >
          &times;
        </button>
        <div className="max-h-[80vh] overflow-y-scroll no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

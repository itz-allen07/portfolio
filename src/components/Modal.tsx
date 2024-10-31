import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export default function Modal({ isOpen, onClose, imageUrl }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-gold hover:text-gold/80 transition-colors"
        >
          <X size={24} />
        </button>
        <img 
          src={imageUrl} 
          alt="Gallery" 
          className="max-w-full max-h-full w-auto h-auto object-contain rounded shadow-2xl" 
        />
      </div>
    </div>
  );
}
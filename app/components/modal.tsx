import { ReactNode } from 'react';
import { GrClose } from "react-icons/gr";

type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  children: ReactNode,
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="modal-overlay  fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="modal-content mx-auto bg-white p-4 shadow-lg z-10 container">
        <GrClose className="float-right cursor-pointer" onClick={onClose}/>
        {children}
      </div>
    </div>
  );
};

export default Modal;

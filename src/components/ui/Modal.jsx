import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/slices/modalSlice";
import closeIcon from "../../assets/icons/close.png";
import { useRef } from "react";
import useOnClickOutside from "../../helpers/hooks/DetectClickOutside";
const Modal = ({ children }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  useOnClickOutside(ref, () => dispatch(toggleModal()));
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div ref={ref} className="relative p-4  bg-orange1 rounded-xl">
        <div
          className="absolute top-[-15px] right-[-5px] bg-orange2 sm:right-[-15px] rounded-full w-10 h-10 cursor-pointer flex justify-center items-center"
          onClick={() => dispatch(toggleModal())}
        >
          <img className="w-8" src={closeIcon} alt="close-icon" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/slices/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="relative p-4 max-w-[400px] w-80 mx-4 bg-[#fae2d2] rounded-xl h-80 ">
        <div
          className="absolute top-[-10px] bg-white right-[-10px] rounded-full w-10 h-10 cursor-pointer"
          onClick={() => dispatch(toggleModal())}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default Modal;

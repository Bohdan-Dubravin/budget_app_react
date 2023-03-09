import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ControlPanel from "../../components/ControlPanel";
import Modal from "../../components/Modal";
import { toggleModal } from "../../redux/slices/modalSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="px-[20px] py-[60px] bg-[#FBF5F4] min-h-screen flex">
      <button onClick={() => dispatch(toggleModal())}>
        add new transaction
      </button>
      <button onClick={() => dispatch(toggleModal())}>add new category</button>
      <ControlPanel />
      <Outlet />
      <Modal />
    </div>
  );
};

export default Main;

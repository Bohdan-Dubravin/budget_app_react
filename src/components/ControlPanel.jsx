import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/home.svg";
import CreateCategory from "./CreateCategory";
import MainBtn from "./ui/MainBtn";
import Modal from "./ui/Modal";
import AddTransaction from "./AddTransaction";
import { toggleModal } from "../redux/slices/modalSlice";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const [useModal, setUseModal] = useState("");
  const openNewTransaction = () => {
    dispatch(toggleModal());
    setUseModal("transaction");
  };

  const openNewCategory = () => {
    dispatch(toggleModal());
    setUseModal("category");
  };

  return (
    <div className="w-[230px]">
      <ul>
        <li>
          <NavLink
            to="/dash/home"
            className={({ isActive }) =>
              [
                " w-full h-[60px] rounded-md cursor-pointer text-[#879EB1] flex justify-start items-center",
                isActive ? "bg-[#FED0B3] !text-[#191919]" : null,
              ].join(" ")
            }
          >
            <img className="mx-[20px]" src={HomeIcon} alt="home icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dash/statistic"
            className={({ isActive }) =>
              [
                "w-full h-[60px] rounded-md cursor-pointer text-[#879EB1] flex justify-start items-center",
                isActive ? "bg-[#FED0B3] !text-[#191919]" : null,
              ].join(" ")
            }
          >
            Statistic
          </NavLink>
        </li>
        <li>
          <div className="mt-12 mb-2">
            <MainBtn callback={openNewTransaction} title={"Add Transaction"} />
          </div>
          <div className="">
            <MainBtn callback={openNewCategory} title={"Create category"} />
          </div>
        </li>
      </ul>
      <Modal>
        {useModal === "category" ? (
          <CreateCategory />
        ) : useModal === "transaction" ? (
          <AddTransaction />
        ) : null}
      </Modal>
    </div>
  );
};

export default ControlPanel;

import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/home.svg";

const ControlPanel = () => {
  return (
    <div className="w-[230px]">
      <ul>
        <li>
          <NavLink
            to="/home"
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
            to="/statistic"
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
      </ul>
    </div>
  );
};

export default ControlPanel;

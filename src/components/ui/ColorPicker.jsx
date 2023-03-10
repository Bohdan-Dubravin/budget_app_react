import { useRef, useState } from "react";
import colorImg from "../../assets/icons/colors1.svg";
import useOnClickOutside from "../../helpers/hooks/DetectClickOutside";

const colors = [
  "#CB4335",
  "#884EA0",
  "#2471A3",
  "#2E86C1",
  "#138D75",
  "#28B463",
  "#707B7C",
  "#F4D03F",
  "#D35400",
  "#34495E",
  "#9bccff",
  "#ff6f69",
];

const ColorPicker = ({ callback }) => {
  const ref = useRef();
  const [openColors, setOpenColors] = useState(false);
  const putColor = (color) => {
    callback(color);
    setOpenColors(false);
  };
  useOnClickOutside(ref, () => setOpenColors(false));

  return (
    <div className="relative my-4 ">
      <h3
        onClick={() => setOpenColors(!openColors)}
        className="flex p-2  rounded cursor-pointer text-white bg-black1 w-[90px]"
      >
        <img className="w-6 mr-2" src={colorImg} alt="colors-img" />
        Color
      </h3>
      {openColors && (
        <div
          ref={ref}
          className="absolute top-12 bg-white p-2 rounded-lg  w-[240%]"
        >
          <ul className="grid grid-cols-4 gap-2 ">
            {colors.map((color) => {
              return (
                <li
                  onClick={() => putColor(color)}
                  key={color}
                  style={{ backgroundColor: color }}
                  className={"cursor-pointer rounded-full h-10 w-10 "}
                ></li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;

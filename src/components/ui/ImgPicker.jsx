import { useRef, useState } from "react";
import shop from "../../assets/icons/shop.png";
import house from "../../assets/icons/house.png";
import useOnClickOutside from "../../helpers/hooks/DetectClickOutside";

const images = [shop, house];

const ImgPicker = ({ callback, bgcolor = "black" }) => {
  const ref = useRef();
  const [openColors, setOpenColors] = useState(false);
  const putImage = (color) => {
    callback(color);
    setOpenColors(false);
  };

  useOnClickOutside(ref, () => setOpenColors(false));

  return (
    <div className="relative my-4">
      <h3
        onClick={() => setOpenColors(!openColors)}
        className="flex p-2 w-fit rounded cursor-pointer text-white bg-black1 w-[90px]"
      >
        <img className="w-6 mr-2" src={shop} alt="colors-img" />
        Icon
      </h3>
      {openColors && (
        <div
          ref={ref}
          className="absolute top-12 bg-white p-2 rounded-lg w-[240%]"
        >
          <ul className="grid grid-cols-4 gap-2 w-fit">
            {images.map((image, i) => {
              return (
                <li
                  onClick={() => putImage(image)}
                  key={i}
                  style={{ backgroundColor: bgcolor }}
                  className={
                    "cursor-pointer rounded-full h-10 w-10 flex items-center justify-center"
                  }
                >
                  <img
                    className="w-[28px] object-center -translate-y-[2px]"
                    src={image}
                    alt="category-img"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImgPicker;

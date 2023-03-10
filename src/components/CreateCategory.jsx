import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ColorPicker from "./ui/ColorPicker";
import ImgPicker from "./ui/ImgPicker";
import shop from "../assets/icons/shop.png";

const schema = yup.object().shape({
  name: yup.string().required(),
});

const CreateCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categoryImage, setCategoryImage] = useState({
    categoryColor: "black",
    categoryImg: shop,
    name: "",
  });
  const setColor = (color) => {
    setCategoryImage((prev) => {
      return { ...prev, categoryColor: color };
    });
  };

  const setImg = (img) => {
    setCategoryImage((prev) => {
      return { ...prev, categoryImg: img };
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const nameValue = watch("name");

  async function submitCategory(data) {
    await dispatch(loginUser(data));
    console.log(data);
    reset();
    navigate("/home");
  }

  return (
    <div className="relative pb-14 w-[275px] sm:w-[600px]">
      <h2 className="text-2xl text-center text-gray-800 font-bold mb-6">
        New category
      </h2>
      <div className="sm:flex items-center justify-between bg-white rounded-xl p-4">
        <div className="sm:w-[210px] md:w-[265px]">
          <h3 className="text-orange3 text-center font-bold">Appearance</h3>
          <div className="flex  justify-between">
            <ColorPicker callback={setColor} />
            <ImgPicker
              callback={setImg}
              bgcolor={categoryImage.categoryColor}
            />
          </div>
        </div>
        <form className="" onSubmit={handleSubmit(submitCategory)}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className={`block font-bold text-sm mb-2 ${
                errors.email ? "text-red-500" : "text-orange3"
              }`}
            >
              Category Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Example (Car)"
              className={`block text-gray-800 w-full bg-transparent outline-none border-b-2 py-2 px-4 rounded-t  placeholder-gray-400 focus:bg-orange1 ${
                errors.email ? " border-red-500" : " border-orange3"
              }`}
              {...register("name")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                A valid email is required.
              </p>
            )}
          </div>
          <button className="bg-orange3 hover:bg-[#f69f2d] transition-colors duration-500 text-white rounded-lg text-lg uppercase shadow py-2 px-5 absolute w-fit right-1/2 translate-x-1/2 bottom-0">
            Create category
          </button>
        </form>
      </div>

      <div className="mt-10 mx-auto w-[265px] rounded-lg bg-white p-4">
        <h3 className="mb-2 text-gray-800 font-bold text-center text-lg">
          Your new category
        </h3>
        <div className="flex items-center ">
          <div
            style={{ backgroundColor: categoryImage.categoryColor }}
            className="w-16 h-16 rounded-full flex items-center justify-center "
          >
            {categoryImage.categoryImg && (
              <img
                className="w-[42px] object-center -translate-y-[2px]  block"
                src={categoryImage.categoryImg}
                alt="category-img"
              />
            )}
          </div>
          <p className="text-lg text-gray-800 ml-4">{nameValue}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;

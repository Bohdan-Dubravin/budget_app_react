import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  async function submitLogin(data) {
    await dispatch(registerUser(data));
    console.log(data);
    reset();
    navigate("/home");
  }

  // console.log(watch("email"));

  // console.log(errors);
  return (
    <div className="flex items-center justify-center bg-orange1 min-h-screen w-full">
      <form
        className="bg-white p-6 rounded-2xl w-[320px]"
        onSubmit={handleSubmit(submitLogin)}
      >
        <h2>Register</h2>
        <div className="mb-8">
          <label
            htmlFor="email"
            className={`block font-bold text-sm mb-2 ${
              errors.email ? "text-red-500" : "text-orange3"
            }`}
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="hey@chrisoncode.io"
            className={`block text-gray-800 w-full bg-transparent outline-none border-b-2 py-2 px-4 rounded-t  placeholder-gray-400 focus:bg-orange1 ${
              errors.email ? " border-red-500" : " border-orange3"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              A valid email is required.
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className={`block font-bold text-sm mb-2 ${
              errors.password ? "text-red-500" : "text-orange3"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className={`block text-gray-800 w-full bg-transparent outline-none border-b-2 py-2 px-4 rounded-t  placeholder-gray-400 focus:bg-orange1 ${
              errors.email ? " border-red-500" : " border-orange3"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              Your password is required.
            </p>
          )}
        </div>

        <button className="block bg-orange3 text-white rounded-lg shadow py-2 px-5 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

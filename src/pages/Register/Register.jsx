import { Input } from "@nextui-org/input";
import { useState } from "react";
import { icons } from "../../utils/icons";
import { Link } from "react-router-dom";
const { FaRegEye, FaRegEyeSlash } = icons;

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="h-screen flex items-center justify-center">
        <form className="w-[300px] xl:w-[400px] rounded-md shadow-[0px_3px_10px_rgb(0,0,0,0.2)] p-4 xl:p-6">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <p className="pt-2 text-sm text-center">
            Hey, Enter your details to get sign in to your account
          </p>
          <div className="pt-4">
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div className="pt-4">
            <Input
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
              endContent={
                <button
                  className="forcus:outline none"
                  type="button"
                  onClick={() => setIsVisible((prev) => !prev)}
                >
                  {isVisible ? (
                    <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>

          <div className="pt-4 ">
            <button
              type="submit"
              className="text-xl font-bold bg-primary-color w-full text-white h-10 rounded-md"
            >
              Sign up
            </button>
          </div>
          <div className="pt-4 text-sm italic">
            <Link to="/login" className="underline">
              Have you account.Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

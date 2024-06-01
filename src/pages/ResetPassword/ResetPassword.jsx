import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPasswordApi } from "../../services/api/userApi";
import toast from "react-hot-toast";
import { icons } from "../../utils/icons";
const { FaRegEye, FaRegEyeSlash } = icons;

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await resetPasswordApi({ password }, token);
    if (response.status === "success") {
      toast.success(response.message);
      navigate("/login");
    }
    if (response.status === "error") {
      toast.error(response.message);
    }
  };
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="h-screen flex items-center justify-center">
        <form action="" className="w-[300px]" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center">Reset Password</h1>
          <p className="pt-2 text-sm text-center">Enter your new password</p>
          <div className="pt-4">
            <Input
              type={isVisible ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              endContent={
                <span
                  className="forcus:outline none cursor-pointer"
                  onClick={() => setIsVisible((prev) => !prev)}
                >
                  {isVisible ? (
                    <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none cursor-pointer" />
                  ) : (
                    <FaRegEye className="text-2xl text-default-400 pointer-events-none cursor-pointer" />
                  )}
                </span>
              }
            />
          </div>
          <div className="pt-4 ">
            <button
              type="submit"
              className="text-xl font-bold bg-primary-color w-full text-white h-10 rounded-md"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

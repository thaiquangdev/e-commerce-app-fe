import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPasswordApi } from "../../services/api/userApi";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await forgotPasswordApi({ email });
    if (response.status === "success") {
      toast.success(response.message);
    }
    if (response.status === "error") {
      toast.error(response.message);
    }
  };
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="h-screen flex items-center justify-center">
        <form action="" className="w-[300px]" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
          <p className="pt-2 text-sm text-center">Hey, Enter your email</p>
          <div className="pt-4">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pt-4 ">
            <button
              type="submit"
              className="text-xl font-bold bg-primary-color w-full text-white h-10 rounded-md"
            >
              Send mail
            </button>
          </div>
          <div className="mt-4">
            <Link to="/login" className="underline tex-sm">
              Return login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

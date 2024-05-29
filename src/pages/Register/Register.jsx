import { Input } from "@nextui-org/input";
import { useState } from "react";
import { icons } from "../../utils/icons";
import { Link, useNavigate } from "react-router-dom";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { apiRegister } from "../../services/api/authApi";
const { FaRegEye, FaRegEyeSlash } = icons;
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await apiRegister({ username, email, mobile, password });
    if (response.status === "success") {
      toast.success(`${response.message}.Please login`);
      navigate("/login");
    }
    if (response.status === "error") {
      toast.error(response.message);
    }
  };
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="h-screen flex items-center justify-center">
        <form
          className="w-[300px] xl:w-[400px] rounded-md shadow-[0px_3px_10px_rgb(0,0,0,0.2)] p-4 xl:p-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <p className="pt-2 text-sm text-center">
            Hey, Enter your details to get sign in to your account
          </p>
          <div className="pt-4">
            <Input
              type="text"
              label="Username"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <Input
              type="text"
              label="Mobile"
              placeholder="Enter your mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <Input
              type={isVisible ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              endContent={
                <button
                  className="forcus:outline none"
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

export default withAuthRedirect(Register);

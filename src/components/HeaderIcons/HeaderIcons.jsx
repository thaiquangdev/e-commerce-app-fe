import { useEffect, useState } from "react";
import { icons } from "../../utils/icons";
import { Link, useNavigate } from "react-router-dom";
import CardModel from "../CardModel";
import { apiLogout } from "../../services/api/authApi";
import toast from "react-hot-toast";

const { FaRegHeart, FaRegUser, MdOutlineShoppingCart } = icons;

const HeaderIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  const handleProfile = () => {
    if (!isLoggedIn) {
      navigate("/login");
      setIsProfileOpen(false);
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    const response = await apiLogout();
    localStorage.removeItem("token");
    toast.success(response.message);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <FaRegUser size={22} className="cursor-pointer" onClick={handleProfile} />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0px_3px_10px_rgb(0,0,0,0.2)]">
          <Link to="/">profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            logout
          </div>
        </div>
      )}
      <FaRegHeart size={22} className="cursor-pointer" />
      <div className="relative cursor-pointer">
        <MdOutlineShoppingCart
          size={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-primary-color text-white text-sm  flex items-center justify-center">
          2
        </div>
      </div>
      {isCartOpen && <CardModel />}
    </div>
  );
};

export default HeaderIcons;

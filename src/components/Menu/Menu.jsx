import { useState } from "react";
import { icons } from "../../utils/icons";
import { Link } from "react-router-dom";
const { IoMenu } = icons;

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IoMenu
        size={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 z-10">
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Cart(1)</Link>
          <Link to="/">Wishlist(1)</Link>
          <Link to="/">Logout</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

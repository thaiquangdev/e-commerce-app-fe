import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar";
import HeaderIcons from "../HeaderIcons";

const Header = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link to="/">
          <div className="tracking-wide text-2xl">Excutive</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger screen */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link to="/">
            <div className="tracking-wide text-2xl">Excutive</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link to="/">Home</Link>
            <Link>Shop</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <HeaderIcons />
        </div>
      </div>
    </div>
  );
};

export default Header;

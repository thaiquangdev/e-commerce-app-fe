import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/icons";

const { IoMdSearch } = icons;

const SearchBar = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    if (name) {
      navigate(`/products?title=${name}`);
    }
  };
  return (
    <form
      className="flex items-center justify-between bg-gray-100 p-2 rounded-md gap-4 flex-1"
      onSubmit={handleSearch}
    >
      <input
        name="name"
        type="text"
        placeholder="search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <IoMdSearch size={16} />
      </button>
    </form>
  );
};

export default SearchBar;

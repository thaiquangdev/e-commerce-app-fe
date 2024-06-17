import { useState } from "react";
import { icons } from "../../utils/icons";
import { getProductsApi } from "../../services/api/productApi";
import { Link } from "react-router-dom";

const { IoMdSearch } = icons;

const SearchBar = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await getProductsApi({ search: searchTerm });
    if (response.status === "success") {
      setData(response.products);
    }
  };
  return (
    <>
      <form
        className="flex items-center justify-between bg-gray-100 p-2 rounded-md gap-4 flex-1 relative"
        onSubmit={handleSearch}
      >
        <input
          name="name"
          type="text"
          placeholder="search"
          className="flex-1 bg-transparent outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button className="cursor-pointer">
          <IoMdSearch size={16} />
        </button>
        {data && (
          <div className="absolute top-10 bg-white z-10 my-4">
            {data?.map((item, index) => {
              return (
                <Link className="flex items-center" key={index}>
                  <img src={item?.thumb} alt="" width={50} />
                  <p className="text-md leading-10">{item?.title}</p>
                </Link>
              );
            })}
          </div>
        )}
      </form>
    </>
  );
};

export default SearchBar;

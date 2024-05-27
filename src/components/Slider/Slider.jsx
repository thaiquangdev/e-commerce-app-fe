import { useEffect, useState } from "react";
import { icons } from "../../utils/icons";

const { FaArrowCircleLeft, FaArrowCircleRight } = icons;

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const updateItemsPerPage = () => {
    if (window.innerWidth < 768) {
      setItemsPerPage(4);
    } else if (window.innerWidth < 560) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(6);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);
  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const visibleItems = items?.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <div className="flex items-center ">
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="cursor-pointer"
      >
        <FaArrowCircleLeft size={24} />
      </button>
      <div className="w-full flex items-center gap-3 transition-transform ease-in duration-500 ">
        {visibleItems?.map((item, index) => (
          <div key={index} className={`w-1/${itemsPerPage} md:w-1/6`}>
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        disabled={currentIndex >= items?.length - itemsPerPage}
        className="cursor-pointer"
      >
        <FaArrowCircleRight size={24} />
      </button>
    </div>
  );
};

export default Slider;

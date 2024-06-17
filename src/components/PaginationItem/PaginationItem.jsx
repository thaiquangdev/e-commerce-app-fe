import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";

const PaginationItem = ({ page, content }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate({
      pathname: location.pathname,
      search: new URLSearchParams({ page: content }).toString(),
    });
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "p-2 w-[32px] h-[32px] flex items-center justify-center rounded-md",
        page === String(content) ? "bg-primary-color text-white" : "bg-gray-200"
      )}
    >
      {content}
    </button>
  );
};

export default PaginationItem;

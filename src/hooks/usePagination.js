import React, { useMemo } from "react";
import { renderRangeNumber } from "../utils/helpers";
import { icons } from "../utils/icons";

const { HiDotsHorizontal } = icons;
const usePagination = ({
  total = 0,
  currentPage = 1,
  limit = 1,
  sibling = 0,
}) => {
  const paginationArray = useMemo(() => {
    const pageSize = +limit;
    const pageNumber = Math.ceil(total / pageSize);
    const totalPaginationItem = 5 + sibling * 2;

    if (pageNumber <= totalPaginationItem) {
      return renderRangeNumber(1, pageNumber);
    }

    const isShowDotsLeft = currentPage - sibling > 3;
    const isShowDotsRight = currentPage + sibling < pageNumber - 2;

    if (isShowDotsLeft && !isShowDotsRight) {
      const rightStart = pageNumber - 2 - sibling * 2;
      const rightArray = renderRangeNumber(rightStart, pageNumber);
      return [1, React.createElement(HiDotsHorizontal), ...rightArray];
    }

    if (!isShowDotsLeft && isShowDotsRight) {
      const leftArray = renderRangeNumber(1, 3 + sibling * 2);
      return [...leftArray, React.createElement(HiDotsHorizontal), pageNumber];
    }

    const siblingLeft = Math.max(1, currentPage - sibling);
    const siblingRight = Math.min(pageNumber, currentPage + sibling);

    if (isShowDotsLeft && isShowDotsRight) {
      const middleArray = renderRangeNumber(siblingLeft, siblingRight);
      return [
        1,
        React.createElement(HiDotsHorizontal),
        ...middleArray,
        React.createElement(HiDotsHorizontal),
        pageNumber,
      ];
    }
  }, [total, currentPage, limit, sibling]);

  return paginationArray;
};

export { usePagination };

import { useMemo } from "react";
import { renderRangeNumber } from "../utils/helpers";
import { icons } from "../utils/icons";

const { HiDotsHorizontal } = icons;

const usePagination = ({
  total = 0,
  currentPage = 1,
  limit = 1,
  sibling = 0,
}) => {
  const paginationRange = useMemo(() => {
    const pagesize = limit;
    const pageNumber = Math.ceil(total / pagesize);
    const totalPaginationItem = 5 + sibling * 2;
    if (pageNumber <= totalPaginationItem) {
      renderRangeNumber(1, pageNumber);
    }
    const isShowDotsLeft = currentPage - sibling > 3;
    const isShowDotsRight = currentPage - sibling < pageNumber - 2;
    if (isShowDotsLeft && !isShowDotsRight) {
      const rightStart = pageNumber - 2 - sibling * 2;
      const rightArray = renderRangeNumber(rightStart, pageNumber);
      return [1, HiDotsHorizontal, ...rightArray];
    }
    if (!isShowDotsLeft && isShowDotsRight) {
      const leftArray = renderRangeNumber(1, 3 + sibling * 2);
      return [...leftArray, HiDotsHorizontal, pageNumber];
    }
    const siblingLeft = Math.max(1, currentPage - sibling);
    const siblingRight = Math.min(pageNumber, currentPage + sibling);
    if (isShowDotsLeft && isShowDotsRight) {
      const midleArray = renderRangeNumber(siblingLeft, siblingRight);
      return [HiDotsHorizontal, ...midleArray, HiDotsHorizontal, pageNumber];
    }
  }, [total, currentPage, sibling, limit]);
};
export { usePagination };

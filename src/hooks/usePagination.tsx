import { useContext } from "react";
import { usePaginationOutput } from "../types/output";
import { TableData } from "../types/reducerTypes";
import { ContextType } from "../types/contextTypes";
import { Context } from "../state/Ctx";
import { Actions } from "../state/reducer";

const usePagination = (
  content: TableData[],
  itemsPerPage: number
): usePaginationOutput => {
  const totalItems = content.length;
  const { state, dispatch } = useContext<ContextType | undefined>(Context)!;
  const currentPage = state.pagination.currentPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch({ type: Actions.CHANGE_PAGE, payload: currentPage + 1 });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch({ type: Actions.CHANGE_PAGE, payload: currentPage - 1 });
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch({ type: Actions.CHANGE_PAGE, payload: page });
    }
  };

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return content.slice(startIndex, endIndex);
  };

  const startRow = (currentPage - 1) * itemsPerPage + 1;
  const endRow = Math.min(currentPage * itemsPerPage, content.length);
  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getPageItems,
    startRow,
    endRow,
  };
};

export default usePagination;

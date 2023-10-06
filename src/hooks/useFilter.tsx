import { useCallback, useContext, useEffect } from "react";
import { ContextType } from "../types/contextTypes";
import { debounce } from "lodash";
import { Context } from "../state/Ctx";
import useContentToDisplay from "./useContentToDisplay";
import { Actions } from "../state/reducer";
import { TableData } from "../types/reducerTypes";

const useFilter = (): {
  filterByTitle: () => void;
  filterByStatus: (input: string) => void;
  reset: () => void;
} => {
  const { state, dispatch } = useContext<ContextType | undefined>(Context)!;
  const { content } = useContentToDisplay();
  const debouncedFilterByTitle = useCallback(
    debounce((input: string) => {
      dispatch({ type: Actions.LOADING_TRUE });
      const filteredData = content.filter((item) =>
        item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      );
      dispatch({ type: Actions.FILTER_SUCCESS, payload: filteredData });
    }, 200),
    [content, dispatch]
  );
  const filterByTitle = () => {
    debouncedFilterByTitle(state.input);
  };
  const filterByStatus = (input: string) => {
    dispatch({ type: Actions.LOADING_TRUE });
    const filteredData = state.tableData.filter(
      (item: TableData) => item.status === input
    );
    dispatch({ type: Actions.FILTER_SUCCESS, payload: filteredData });
    dispatch({ type: Actions.CLEAR_INPUT });
  };
  const reset = () => {
    dispatch({ type: Actions.RESET });
  };
  useEffect(
    () => () => debouncedFilterByTitle.cancel(),
    [debouncedFilterByTitle]
  );

  return {
    filterByTitle,
    filterByStatus,
    reset,
  };
};

export default useFilter;

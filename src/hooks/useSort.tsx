import { useContext } from "react";
import useContentToDisplay from "./useContentToDisplay";
import { Context } from "../state/Ctx";
import { ContextType } from "../types/contextTypes";
import _ from "lodash";
import { Actions } from "../state/reducer";
import { TableData } from "../types/reducerTypes";
import { sortingOrder } from "../types/reducerTypes";

const useSort = () => {
  const { state, dispatch } = useContext<ContextType | undefined>(Context)!;
  const { sort } = state;
  const { content } = useContentToDisplay();
  let sortedData: TableData[];
  const sortASC = (sortBy: string) => {
    dispatch({ type: Actions.LOADING_TRUE });
    sortBy === "replies"
      ? (sortedData = _.orderBy(
          content,
          (item: TableData) => {
            item.replies.name;
          },
          ["asc"]
        ))
      : (sortedData = _.orderBy(content, [sortBy], ["asc"]));
    dispatch({
      type: Actions.SORTING_SUCCEED,
      payload: { sortedData, ChangeSortTypeTo: sortingOrder.ASC },
    });
  };
  const sortDESC = (sortBy: string) => {
    dispatch({ type: Actions.LOADING_TRUE });
    sortBy === "replies"
      ? (sortedData = _.orderBy(
          content,
          (item: TableData) => {
            item.replies.name;
          },
          ["desc"]
        ))
      : (sortedData = _.orderBy(content, [sortBy], ["desc"]));
    dispatch({
      type: Actions.SORTING_SUCCEED,
      payload: { sortedData, ChangeSortTypeTo: sortingOrder.DESC },
    });
  };
  const reset = () => {
    dispatch({ type: Actions.RESET_SORT });
  };
  const sorting = (sortBy: string) => {
    switch (sort.sortType) {
      case sortingOrder.ASC:
        return sortASC(sortBy);
      case sortingOrder.DESC:
        return sortDESC(sortBy);
      case sortingOrder.DEFAULT:
        return reset();
    }
  };
  return { sorting };
};

export default useSort;

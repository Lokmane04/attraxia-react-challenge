import { Action, State } from "../types/reducerTypes";
export const initialState: State = {
  tableData: [],
  modifiedData: [],
  DropDownMenuNumbers: {
    all: 0,
    resolved: 0,
    open: 0,
    feedback: 0,
  },
  status: {
    loading: true,
    error: false,
  },
  input: "",
  sort: {
    isSorted: false,
    sortType: "DEFAULT",
  },
  filter: {
    isFiltred: false,
    filtredData: [],
    TicketsNotFound: false,
  },
  pagination: {
    itemsPerPage: 7,
    currentPage: 1,
  },
};
export const Actions = {
  FETCHING_SUCCESS: "FETCHING_SUCCESS",
  FILTER_SUCCESS: "FILTER_SUCCESS",
  LOADING_TRUE: "LOADING_TRUE",
  CHANGE_DROPDOWN: "CHANGE_DROPDOWN",
  SORTING_SUCCEED: "SORTING_SUCCEED",
  FETCHING_ERROR: "FETCHING_ERROR",
  CLEAR_INPUT: "CLEAR_INPUT",
  CHANGE_INPUT: "CHANGE_INPUT",
  CHANGE_PAGE: "CHANGE_PAGE",
  RESET_SORT: "RESET_SORT",
  RESET: "RESET",
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Actions.FETCHING_SUCCESS:
      return {
        ...state,
        tableData: action.payload.tableData,
        modifiedData: [],
        DropDownMenuNumbers: action.payload.DropDownMenuNumbers,
        status: {
          loading: false,
          error: false,
        },
      };
    case Actions.FILTER_SUCCESS:
      return {
        ...state,
        modifiedData: action.payload,
        status: {
          error: false,
          loading: false,
        },
        filter: {
          isFiltred: true,
          filtredData: action.payload,
          TicketsNotFound:
            state.modifiedData.length === 0 && state.input !== ""
              ? true
              : false,
        },
      };
    case Actions.SORTING_SUCCEED:
      return {
        ...state,
        status: {
          loading: false,
          error: false,
        },
        modifiedData: action.payload.sortedData,
        sort: {
          isSorted: true,
          sortType: action.payload.ChangeSortTypeTo,
        },
      };
    case Actions.LOADING_TRUE:
      return {
        ...state,
        status: { loading: true, error: false },
      };
    case Actions.FETCHING_ERROR:
      return {
        ...state,
        status: { loading: false, error: true },
      };
    case Actions.CLEAR_INPUT:
      return {
        ...state,
        input: "",
      };
    case Actions.CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case Actions.CHANGE_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    case Actions.RESET_SORT:
      return {
        ...state,
        status: {
          loading: false,
          error: false,
        },
        modifiedData: state.filter.isFiltred ? state.filter.filtredData : [],
        sort: {
          sortType: "DEFAULT",
          isSorted: false,
        },
      };
    case Actions.RESET:
      return {
        ...state,
        modifiedData: [],
        sort: {
          sortType: "DEFAULT",
          isSorted: false,
        },
        filter: {
          isFiltred: false,
          filtredData: [],
          TicketsNotFound: false,
        },
      };
    default:
      return state;
  }
};
export { reducer };

export interface TableData {
  title: string;
  company: string;
  status: string;
  date: Date;
  replies: {
    name: string;
    number: number;
    isStaff: boolean;
    img: string;
  };
}
export interface DropDownMenu {
  all: number;
  open: number;
  resolved: number;
  feedback: number;
}

export interface State {
  tableData: TableData[] | [];
  modifiedData: TableData[] | [];
  DropDownMenuNumbers: DropDownMenu;
  status: {
    loading: boolean;
    error: boolean;
  };
  input: string;
  sort: {
    isSorted: boolean;
    sortType: "DEFAULT" | "ASC" | "DESC";
  };
  filter: {
    isFiltred: boolean;
    filtredData: TableData[];
    TicketsNotFound: boolean;
  };
  pagination: {
    itemsPerPage: number;
    currentPage: number;
  };
}

export type Action = {
  type: string;
  payload?: any;
};
export const sortingOrder = {
  DEFAULT: "DEFAULT",
  ASC: "ASC",
  DESC: "DESC",
};

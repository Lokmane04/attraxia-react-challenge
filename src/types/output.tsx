import { TableData, DropDownMenu } from "./reducerTypes";

export interface ContentOutPut {
  content: TableData[];
}
export type contentDisplayed = TableData[];

export interface dataoutput {
  tableData: TableData[];
  DropDownMenuNumbers: DropDownMenu;
}
export interface usePaginationOutput {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
  getPageItems: () => TableData[];
  startRow: number;
  endRow: number;
}

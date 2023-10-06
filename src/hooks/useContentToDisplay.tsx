import { useContext } from "react";
import { ContentOutPut, contentDisplayed } from "../types/output";
import { ContextType } from "../types/contextTypes";
import { Context } from "../state/Ctx";
const useContentToDisplay = (): ContentOutPut => {
  const { state } = useContext<ContextType | undefined>(Context)!;
  const { tableData, modifiedData } = state;

  let displayedContent: contentDisplayed;
  if (modifiedData.length > 0) {
    displayedContent = modifiedData;
  } else {
    displayedContent = tableData;
  }
  return {
    content: displayedContent,
  };
};

export default useContentToDisplay;

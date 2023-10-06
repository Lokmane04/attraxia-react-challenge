import { initialState, reducer } from "./reducer";
import theme from "../theme";
import { ContextType } from "../types/contextTypes";
import { createContext, useReducer } from "react";
import { ThemeProvider } from "@mui/material";

const Context = createContext<ContextType | undefined>(undefined);
const ContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
export { Context, ContextProvider };

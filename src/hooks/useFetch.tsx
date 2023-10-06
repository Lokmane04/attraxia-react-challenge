import useGenerate from "./useGenerate";
import { createServer } from "miragejs";
import { useContext } from "react";
import { Context } from "../state/Ctx";
import { ContextType } from "../types/contextTypes";
import { Actions } from "../state/reducer";
const data = useGenerate(8);
createServer({
  routes() {
    this.get("api/data", () => {
      return data;
    });
  },
});
const useFetch = () => {
  const { dispatch }: any = useContext<ContextType | undefined>(Context);
  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch({
        type: Actions.FETCHING_SUCCESS,
        payload: json,
      });
    } catch (error) {
      console.error("Fetching Error", error);
      dispatch({ type: Actions.FETCHING_ERROR });
      throw error;
    }
  };
  return {
    fetchData,
  };
};

export default useFetch;

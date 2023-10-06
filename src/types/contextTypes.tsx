import { Action, State } from "./reducerTypes";

export interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

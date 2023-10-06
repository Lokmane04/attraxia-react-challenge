import { TextField, InputAdornment } from "@mui/material";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useFilter from "../../hooks/useFilter";
import { Context } from "../../state/Ctx";
import { ContextType } from "../../types/contextTypes";
import { Actions } from "../../state/reducer";

const SearchField = () => {
  const { state, dispatch } = useContext<ContextType | undefined>(Context)!;
  const { filterByTitle, reset } = useFilter();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Actions.CHANGE_INPUT, payload: event.target.value });
    state.input !== "" ? filterByTitle() : reset();
  };

  return (
    <TextField
      value={state.input}
      onChange={handleChange}
      id="outlined-search"
      placeholder="Search Tickets"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      type="search"
      sx={{
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
          borderColor: "#FFF",
          borderRadius: "20px !important",
          border: "1px solid #FFF",
          height: "60px",
        },
        "& .css-aeeyth-MuiInputBase-input-MuiOutlinedInput-input": {
          color: "black",
        },
        "& .css-18jed1m": {
          borderRadius: "20px !important",
        },
        bgcolor: "#f2f2f2",
        borderRadius: "20px",
      }}
    />
  );
};

export default SearchField;

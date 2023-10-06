import { Box } from "@mui/material";
import { DoubleBubble } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

const LoadingSpinner = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <DoubleBubble
        text={"Loading..."}
        center={false}
        width={"150px"}
        height={"150px"}
      />
    </Box>
  );
};
export default LoadingSpinner;

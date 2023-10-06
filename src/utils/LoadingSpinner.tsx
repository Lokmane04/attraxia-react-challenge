import { Box, Typography } from "@mui/material";
import "react-spinner-animated/dist/index.css";

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3">Loding ....</Typography>
      <Typography variant="h3">Please wait</Typography>
    </Box>
  );
};
export default LoadingSpinner;

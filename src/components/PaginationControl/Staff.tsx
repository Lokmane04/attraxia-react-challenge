import { Box, Typography } from "@mui/material";
import StaffSvg from "../../assets/StaffSvg";
const Staff = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: "5px",
        width: "75px",
        borderRadius: "13px",
        bgcolor: "#EDEDED",
        ml: "5px",
      }}
    >
      <StaffSvg />
      <Typography variant="body1" fontWeight="bold">
        STAFF
      </Typography>
    </Box>
  );
};

export default Staff;

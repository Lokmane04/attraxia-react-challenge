import { Box, Typography } from "@mui/material";
import TopNav from "../../utils/TopNav";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import SearchField from "./SearchField";

const TopNavTickets = () => {
  return (
    <TopNav>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
          }}
        >
          My Tickets
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <DropDownMenu />
        <SearchField />
      </Box>
    </TopNav>
  );
};

export default TopNavTickets;

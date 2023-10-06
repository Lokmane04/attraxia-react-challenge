import {
  Box,
  Button,
  Typography,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import { SupportStyles } from "../../styles/Styles";
import SupportForumsSvg from "../../assets/SupportForumsSvg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
const SupportForums = () => {
  return (
    <Box sx={SupportStyles}>
      <SupportForumsSvg />
      <Typography variant="h5" p="5px" fontWeight="700">
        Support Forums
      </Typography>
      <Typography variant="body1" p="5px" sx={{ color: "#555555" }}>
        Search the topic you need help with our support forums.
      </Typography>
      <Button
        sx={{ fontWeight: "700" }}
        endIcon={<ArrowForwardIcon sx={{ fontWeight: "700" }} />}
      >
        Browse Forums
      </Button>
      <Paper
        sx={{ bgcolor: "#F2F2F2", borderRadius: "20px", boxShadow: "none" }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, p: "5px" }}
          placeholder="Search support forum"
          inputProps={{
            "aria-label": "Search support forum",
          }}
        />
      </Paper>
    </Box>
  );
};

export default SupportForums;

import { Typography, Box, Button } from "@mui/material";
import TopNav from "../../utils/TopNav";
import Support from "@mui/icons-material/Support";
import { useEffect } from "react";

const TopNavSupport = () => {
  useEffect(() => {
    document.title = "Attraxia_React_challenge";
  }, []);
  return (
    <TopNav>
      <Box>
        <Typography variant="h5">Support Resources</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button>Need Help?</Button>
        <Button variant="contained" startIcon={<Support />}>
          Get Support
        </Button>
      </Box>
    </TopNav>
  );
};

export default TopNavSupport;

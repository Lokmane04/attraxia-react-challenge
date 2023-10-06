import { Box, Grid, Typography } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import useSort from "../../hooks/useSort";

const TableHeader = () => {
  const { sorting } = useSort();
  const handleSort = (sortBy: string) => {
    sorting(sortBy);
  };
  return (
    <Box
      sx={{
        mt: "40px",
        ml: "35px",
        p: "15px",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Box
            sx={{ display: "flex", width: "fit-content" }}
            onClick={() => handleSort("title")}
          >
            <Typography
              width="fit-content"
              variant="body1"
              fontWeight="600"
              sx={{ cursor: "pointer" }}
            >
              TICKET
            </Typography>
            <SwapVertIcon />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mr={5}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ cursor: "default" }}
            >
              STATUS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
            }}
            onClick={() => handleSort("date")}
          >
            <Typography variant="body1" fontWeight="bold">
              CREATED ON
            </Typography>
            <SwapVertIcon />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            ml={5}
            onClick={() => handleSort("replies")}
            sx={{
              display: "flex",
              width: "fit-content",
              cursor: "pointer",
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              REPLIES
            </Typography>
            <SwapVertIcon />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TableHeader;

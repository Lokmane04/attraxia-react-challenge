import { Grid, Box, Typography } from "@mui/material";
import useFormatDate from "../../hooks/useformateDate";
const TableDate = ({ date }: { date: Date }) => {
  return (
    <Grid item xs={2}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" fontWeight="500">
          {useFormatDate(date)}
        </Typography>
      </Box>
    </Grid>
  );
};

export default TableDate;

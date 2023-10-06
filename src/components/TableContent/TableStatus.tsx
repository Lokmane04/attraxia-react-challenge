import { Chip, Box, Grid } from "@mui/material";
import StatusColor from "../../utils/StatusColor";
import { StatusBoxStyles } from "../../styles/Styles";
const TableStatus = ({ status }: { status: string }) => {
  return (
    <Grid item xs={2}>
      <Box mr={5}>
        <Chip label={status} sx={StatusBoxStyles(StatusColor(status))} />
      </Box>
    </Grid>
  );
};

export default TableStatus;

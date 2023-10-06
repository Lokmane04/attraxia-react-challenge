import { Grid, Typography } from "@mui/material";
import { TableTitleProps } from "../../types/TableProps";
const TableTitle: React.FC<TableTitleProps> = ({ title, category }) => {
  return (
    <Grid item xs={4}>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2" color="primary">
        {category}
      </Typography>
    </Grid>
  );
};

export default TableTitle;

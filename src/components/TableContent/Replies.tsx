import { Typography, Box, Avatar, Grid } from "@mui/material";
import * as React from "react";
import RectangleVector from "../../assets/RectangleVector";
import Staff from "../PaginationControl/Staff";
import { RepliesProps } from "../../types/TableProps";

const Replies: React.FC<RepliesProps> = ({ replies }) => {
  const { img, isStaff, name, number } = replies;
  return (
    <Grid item xs={4}>
      <Box
        ml={5}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: "5px",
          }}
        >
          <Avatar alt="Member" src={img} sx={{ width: 30, height: 30 }} />
          <Typography variant="body2" ml={"5px"}>
            Last By {name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <RectangleVector num={number} />
          {isStaff && <Staff />}
        </Box>
      </Box>
    </Grid>
  );
};

export default Replies;

import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import LensSvg from "../../assets/LensSvg";
import { Context } from "../../state/Ctx";
import { ContextType } from "../../types/contextTypes";
import { NoTicketsFoundStyles } from "../../styles/Styles";

const NoTicketsFound = () => {
  const { state } = useContext<ContextType | undefined>(Context)!;
  return (
    <Box sx={NoTicketsFoundStyles}>
      <LensSvg />
      <Typography fontWeight="bold">
        No tickets found for '{state.input}'
      </Typography>
      <Typography>Please adjust your search term and try again.</Typography>
    </Box>
  );
};

export default NoTicketsFound;

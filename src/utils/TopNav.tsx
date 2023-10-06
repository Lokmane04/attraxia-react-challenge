import { Box } from "@mui/material";
import { TopNavStyles } from "../styles/Styles";
const TopNav: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Box sx={TopNavStyles}>{children}</Box>;
};
export default TopNav;

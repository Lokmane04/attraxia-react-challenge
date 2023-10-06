import { SxProps } from "@mui/material";
export const TopNavStyles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  padding: "25px",
  borderBottom: "1px solid #EDEDED",
};
export const SupportStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};
export const NoTicketsFoundStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
};
export const StatusBoxStyles = (bgcolor: string): SxProps => {
  return {
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "5.6875rem",
    height: "1.700rem",
    borderRadius: "0.875rem",
    bgcolor: bgcolor,
  };
};
export const MenuItemStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const MenuItemNumberStyle = (bgcolor: string): SxProps => {
  return {
    color: bgcolor === "#EEE" ? "#000" : "#FFF",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    height: "20px !important",
    width: "20px !important",
    p: "7px",
    fontWeight: "600",
    letterSpacing: "0",
    borderRadius: "50%",
    bgcolor: bgcolor,
  };
};

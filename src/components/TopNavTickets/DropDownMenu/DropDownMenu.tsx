import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { Box, MenuItem, useTheme } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Context } from "../../../state/Ctx";
import { ContextType } from "../../../types/contextTypes";
import useFilter from "../../../hooks/useFilter";
import { MenuItemNumberStyle, MenuItemStyle } from "../../../styles/Styles";

export default function DropDownMenu() {
  const colors = useTheme().palette;
  const { filterByStatus } = useFilter();
  const { state } = useContext<ContextType | undefined>(Context)!;
  const { DropDownMenuNumbers } = state;

  interface Item {
    title: string;
    number: number;
    color: string;
  }

  const MenuItemData: Item[] = [
    {
      title: "All Tickets",
      number: DropDownMenuNumbers.all,
      color: "#EEE",
    },
    {
      title: "Open",
      number: DropDownMenuNumbers.open,
      color: colors.primary.main,
    },
    {
      title: "Feedback",
      number: DropDownMenuNumbers.feedback,
      color: colors.secondary.main,
    },
    {
      title: "Resolved",
      number: DropDownMenuNumbers.resolved,
      color: "#52D194",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [value, setValue] = useState<Item>(MenuItemData[0]);
  useEffect(() => {
    setValue(MenuItemData[0]);
  }, [state.DropDownMenuNumbers.all]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value: Item | null) => {
    setAnchorEl(null);
    if (value !== null) {
      setValue(value);
    }
    if (value!.title !== "ALL Tickets") {
      filterByStatus(value!.title);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box>
      <Box>
        <Button
          sx={{
            textTransform: "none",
            color: "#000",
          }}
          aria-describedby={id}
          variant="text"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon sx={{ color: "#000" }} />}
        >
          <Box
            sx={{
              display: "flex !important",
              justifyContent: "space-between !important",
              alignItems: "center",
              width: "120px",
            }}
          >
            <Typography>{value.title}</Typography>
            <Box sx={MenuItemNumberStyle(value.color)}>{value.number}</Box>
          </Box>
        </Button>
        <Popover
          open={open}
          id={id}
          anchorEl={anchorEl}
          onClose={() => handleClose(null)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              p: "3px",
              width: "160px",
              borderRadius: "5px",
            }}
          >
            {MenuItemData.map((item) => (
              <MenuItem
                key={item.title}
                sx={MenuItemStyle}
                onClick={() => handleClose(item)}
              >
                <Typography>{item.title}</Typography>
                <Box sx={MenuItemNumberStyle(item.color)}>{item.number}</Box>
              </MenuItem>
            ))}
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}

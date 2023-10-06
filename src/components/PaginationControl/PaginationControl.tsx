import { Box, IconButton, Typography, Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useContext } from "react";
import { Context } from "../../state/Ctx";
import { ContextType } from "../../types/contextTypes";
import usePagination from "../../hooks/usePagination";
import useContentToDiplay from "../../hooks/useContentToDisplay";

const PaginationControl = () => {
  const { state } = useContext<ContextType | undefined>(Context)!;
  const { content } = useContentToDiplay();
  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    startRow,
    endRow,
  } = usePagination(content, state.pagination.itemsPerPage);

  return (
    <Box mt="20px" display="flex" justifyContent="space-between">
      <Box>
        {Array.from({ length: totalPages }, (_, index) => (
          <IconButton
            sx={{
              width: "25px",
              height: "25px",
              bgcolor: currentPage === index + 1 ? "#000" : "#FFF",
              color: currentPage === index + 1 ? "#FFF" : "#555",
              "&:hover": {
                bgcolor: currentPage === index + 1 ? "#000" : "#FFF",
              },
            }}
            key={index}
            onClick={() => goToPage(index + 1)}
          >
            <Typography>{index + 1}</Typography>
          </IconButton>
        ))}
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="body2">
          {startRow}-{endRow} of {content.length}
        </Typography>
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          sx={{
            width: "25px",
            minWidth: "25px",
            height: "25px",
            color: "#555",
            borderRadius: "3px",
            border: "1px solid #EDEDED",
          }}
        >
          <KeyboardArrowLeftIcon fontSize="small" />
        </Button>
        <Button
          variant="text"
          sx={{
            width: "25px",
            minWidth: "25px",
            height: "25px",
            color: "#555",
            borderRadius: "3px",
            border: "1px solid #EDEDED",
          }}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <KeyboardArrowRightIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationControl;

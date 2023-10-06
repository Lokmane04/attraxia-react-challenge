import { useContext, useEffect } from "react";
import { Box, Divider, Grid } from "@mui/material";
import { Context } from "../../state/Ctx";
import { ContextType } from "../../types/contextTypes";
import useFetch from "../../hooks/useFetch";
import useContentToDisplay from "../../hooks/useContentToDisplay";
import useRandomId from "../../hooks/useRandomId";
import Replies from "./Replies";
import NoTicketsFound from "./NoTicketsFound";
import PaginationControl from "../PaginationControl/PaginationControl";
import usePagination from "../../hooks/usePagination";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { TableData } from "../../types/reducerTypes";
import TableTitle from "./TableTitle";
import TableStatus from "./TableStatus";
import TableDate from "./TableDate";

function TableContent() {
  const { state } = useContext<ContextType | undefined>(Context)!;
  const {
    status: { loading },
    filter: { TicketsNotFound },
    pagination,
  } = state;
  const { fetchData } = useFetch();
  const { content } = useContentToDisplay();
  const { generateRandomId } = useRandomId();

  useEffect(() => {
    fetchData("api/data");
  }, []);

  const { getPageItems } = usePagination(content, pagination.itemsPerPage);
  const paginatedContent = getPageItems();
  return (
    <Box
      sx={{
        ml: "35px",
        p: "15px",
      }}
    >
      {loading ? (
        <LoadingSpinner />
      ) : TicketsNotFound ? (
        <NoTicketsFound />
      ) : (
        paginatedContent.map(
          ({ title, company, status, date, replies }: TableData) => (
            <>
              <Divider variant="middle" />
              <Grid
                container
                spacing={4}
                key={generateRandomId()}
                pt="15px"
                pb="10px"
              >
                <TableTitle title={title} category={company} />
                <TableStatus status={status} />
                <TableDate date={date} />
                <Replies replies={replies} />
              </Grid>
            </>
          )
        )
      )}
      {!TicketsNotFound && <PaginationControl />}
    </Box>
  );
}

export default TableContent;

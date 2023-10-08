import { Skeleton, Grid, Box, Divider } from "@mui/material";
import "react-spinner-animated/dist/index.css";

const TableContentSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          ml: "20px",
          px: "15px",
          width: "calc(100vw-35px)",
          flexWrap: "nowrap",
        }}
      >
        <>
          <Divider variant="middle" />
          <Grid container spacing={4} pt="10px" pb="10px">
            <Grid item xs={3.8}>
              <Skeleton variant="text" height={30} width={400} />
              <Skeleton
                variant="text"
                color="primary"
                height={25}
                width={150}
              />
            </Grid>
            <Grid item xs={1}>
              <Box pt={0.5}>
                <Skeleton variant="rounded" width={80} height={20} />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: "125px ",
                }}
              >
                <Skeleton variant="text" height={30} width={100} />
              </Box>
            </Grid>
            <Grid item>
              <Box
                mr={20}
                ml={-22}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: "5px",
                  }}
                >
                  <Skeleton
                    variant="circular"
                    sx={{ width: 30, height: 30, mr: "10px" }}
                  />
                  <Skeleton variant="text" height={30} width={120} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Skeleton variant="rounded" height={20} width={20} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: "5px",
                      width: "75px",
                      borderRadius: "13px",
                      bgcolor: "#EDEDED",
                      ml: "5px",
                    }}
                  >
                    <Skeleton variant="circular" width={25} height={25} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      </Box>
    </>
  );
};
const TableContentSkeletons = () => {
  return (
    <>
      <TableContentSkeleton />
      <TableContentSkeleton />
      <TableContentSkeleton />
      <TableContentSkeleton />
      <TableContentSkeleton />
      <TableContentSkeleton />
      <TableContentSkeleton />
      <TableContentSkeleton />
    </>
  );
};
export default TableContentSkeletons;

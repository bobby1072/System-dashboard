import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import MemoryGetter from "../utils/MemoryGetter";
import { Typography, Grid } from "@mui/material";
import IMemType from "../common/IMemType";
export default function MemoryPage() {
  const { os, sys } = window;
  const {
    isLoading: memLoading,
    data: memData,
    error: memError,
  } = useQuery<IMemType>(
    "get-memory-info",
    () => MemoryGetter.AllInfo(os, sys),
    {
      retryDelay: 500,
      retry: (count) => count < 5,
      refetchInterval: 1,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  return (
    <div>
      <MainAppBar />
      <div
        className="App-header"
        style={memLoading || memError ? { justifyContent: "center" } : {}}
      >
        {memLoading ? (
          <Typography fontSize={50} variant="subtitle2">
            Loading...
          </Typography>
        ) : (
          <div style={{ width: "90%" }}>
            {memData && (
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                width="100%"
                minWidth="50vh"
              >
                <Grid item></Grid>
              </Grid>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

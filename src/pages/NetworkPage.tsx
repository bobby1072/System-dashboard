import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import NetworkGetter from "../utils/NetworkGetter";
import { useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
export default function NetworkPage() {
  const { os, sys } = window;
  const {
    error: netError,
    data: netData,
    isLoading: netLoading,
  } = useQuery("get-net-info", () => NetworkGetter.AllInfo(os, sys), {
    retryDelay: 500,
    retry: (count) => count < 5,
    refetchInterval: 1,
  });
  useEffect(() => {
    console.log(netData);
  }, [netData]);
  return (
    <div>
      <MainAppBar />
      <div
        className="App-header"
        style={netLoading || netError ? { justifyContent: "center" } : {}}
      >
        {netLoading ? (
          <Typography fontSize={50} variant="subtitle2">
            Loading...
          </Typography>
        ) : (
          <div style={{ width: "90%" }}>
            {netData && (
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                width="100%"
                minWidth="50vh"
              >
                <Grid item>
                  <Paper>
                    <Grid
                      container
                      spacing={1}
                      padding={3}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography variant="subtitle2" fontSize={45}>
                          Network
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

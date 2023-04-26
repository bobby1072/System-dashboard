import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import GraphicsGetter from "../utils/GraphicsGetter";
import { Grid, Typography } from "@mui/material";
import { Systeminformation } from "systeminformation";
import { useEffect } from "react";
import ScreenTitle from "../components/GraphicsComponents/ScreenTitle";
import ScreenInfo from "../components/GraphicsComponents/ScreenInfo";
export default function GraphicsPage() {
  const { os, sys } = window;
  const {
    isLoading: graphsLoading,
    error: graphsError,
    data: graphsData,
  } = useQuery<Systeminformation.GraphicsData>(
    "get-graphics-data",
    () => GraphicsGetter.AllInfo(os, sys),
    {
      retryDelay: 500,
      retry: (count) => count < 5,
      refetchInterval: 1,
    }
  );
  useEffect(() => {
    console.log(graphsData);
  }, [graphsData]);
  return (
    <div>
      <MainAppBar />
      <div
        className="App-header"
        style={graphsLoading || graphsError ? { justifyContent: "center" } : {}}
      >
        {graphsLoading ? (
          <Typography fontSize={50} variant="subtitle2">
            Loading...
          </Typography>
        ) : (
          <div style={{ width: "90%" }}>
            {graphsData && (
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                width="100%"
                minWidth="30vh"
              >
                <Grid item>
                  <ScreenTitle />
                </Grid>
                <Grid item>
                  <ScreenInfo screen={graphsData.displays} />
                </Grid>
              </Grid>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

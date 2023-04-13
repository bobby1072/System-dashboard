import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
export default function CpuBoard() {
  const { is } = window;
  const {
    isLoading: cpuLoading,
    error: cpuError,
    data: cpuData,
  } = useQuery("get-cpu-info", () => is.cpu(), {
    retryDelay: 1000,
    retry: (count) => count < 5,
  });
  useEffect(() => {
    console.log(cpuData);
  }, [cpuData]);
  return (
    <div>
      <MainAppBar />
      <div className="App-header">
        <Paper>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            spacing={2}
          >
            {cpuData && (
              <Grid item>
                <p>{}</p>
              </Grid>
            )}
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

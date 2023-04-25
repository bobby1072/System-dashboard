import { useQuery } from "react-query";
import MainAppBar from "../components/AppBar/AppBar";
import BatteryGetter from "../utils/BatteryGetter";
import { Grid, Typography } from "@mui/material";
import BatteryTitle from "../components/BatteryComponents/BatteryTitle";
export default function BatteryPage() {
  const { os, sys } = window;
  const {
    isLoading: batteryLoading,
    data: batteryData,
    error: batteryError,
  } = useQuery("get-battery-info", () => BatteryGetter.AllInfo(os, sys), {
    retryDelay: 500,
    retry: (count) => count < 5,
    refetchInterval: 1,
  });
  return (
    <div>
      <MainAppBar />
      <div
        className="App-header"
        style={
          batteryLoading || batteryError ? { justifyContent: "center" } : {}
        }
      >
        {batteryLoading ? (
          <Typography fontSize={50} variant="subtitle2">
            Loading...
          </Typography>
        ) : (
          <div style={{ width: "90%" }}>
            {batteryData && (
              <Grid
                container
                padding={1}
                spacing={2}
                direction="column"
                justifyContent="center"
                width="100%"
                minWidth="50vh"
              >
                <Grid item>
                  <BatteryTitle batteryInfo={batteryData.battery} />
                </Grid>
              </Grid>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

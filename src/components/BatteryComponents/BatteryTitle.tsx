import { Systeminformation } from "systeminformation";
import { Grid, Paper, Typography, useTheme } from "@mui/material";
import BatteryGauge from "react-battery-gauge";
export default function BatteryTitle({
  batteryInfo,
}: {
  batteryInfo: Systeminformation.BatteryData;
}) {
  const theme = useTheme();
  return (
    <Paper>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={3}
        spacing={2}
        width="100%"
        minHeight="36vh"
      >
        <Grid item>
          <Typography fontSize={40} variant="subtitle2">
            Battery
          </Typography>
        </Grid>
        <Grid item width="50%">
          <BatteryGauge
            width="50%"
            value={Number(
              (
                (batteryInfo.currentCapacity / batteryInfo.maxCapacity) *
                100
              ).toFixed(0)
            )}
            color={theme.palette.primary.main}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

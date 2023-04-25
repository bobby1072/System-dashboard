import { Systeminformation } from "systeminformation";
import { Grid, Paper, Typography, useTheme } from "@mui/material";
import BatteryGauge from "react-battery-gauge";
import { StyledBoxPaper } from "../../common/StyledPaper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function BatteryTitle({
  batteryInfo,
}: {
  batteryInfo: Systeminformation.BatteryData;
}) {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={1}
      spacing={2}
      width="100%"
    >
      <Grid item width="100%">
        <Paper>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            padding={2}
            width="100%"
          >
            <Grid item>
              <Typography fontSize={40} variant="subtitle2">
                Battery
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item width="100%">
        <Paper>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            padding={2}
            width="100%"
          >
            <Grid item>
              <StyledBoxPaper sx={{ padding: 3 }}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Typography fontSize={40} variant="subtitle2">
                      Max capacity: {batteryInfo.maxCapacity}{" "}
                      {batteryInfo.capacityUnit}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <Grid item>
                        <BatteryGauge
                          value={Number(
                            (
                              (batteryInfo.currentCapacity /
                                batteryInfo.maxCapacity) *
                              100
                            ).toFixed(0)
                          )}
                          color={theme.palette.primary.main}
                        />
                      </Grid>
                      <Grid item>
                        {batteryInfo.acConnected ? (
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                          >
                            <Grid item>
                              <CheckCircleIcon
                                color="success"
                                fontSize="large"
                              />
                            </Grid>
                            <Grid item>
                              <Typography fontSize={40} variant="subtitle2">
                                Charging
                              </Typography>
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                          >
                            <Grid item>
                              <CancelIcon color="error" fontSize="large" />
                            </Grid>
                            <Grid item>
                              <Typography fontSize={40} variant="subtitle2">
                                Not charging
                              </Typography>
                            </Grid>
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </StyledBoxPaper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

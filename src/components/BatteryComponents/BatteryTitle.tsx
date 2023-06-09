import { Systeminformation } from "systeminformation";
import { Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import BatteryGauge from "react-battery-gauge";
import { StyledBoxPaper } from "../../common/StyledPaper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
export default function BatteryTitle({
  batteryInfo,
}: {
  batteryInfo: Systeminformation.BatteryData;
}) {
  const [showPercent, setShowPercent] = useState<boolean>(true);
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
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
            spacing={1}
            padding={3}
            width="100%"
          >
            <Grid item>
              <Typography fontSize={45} variant="subtitle2">
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
            <Grid item width="100%">
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
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid item>
                        <Typography fontSize={40} variant="subtitle2">
                          Current capacity:{" "}
                          {showPercent
                            ? (
                                (batteryInfo.currentCapacity /
                                  batteryInfo.maxCapacity) *
                                100
                              ).toFixed(0) + "%"
                            : `${batteryInfo.currentCapacity} ${batteryInfo.capacityUnit}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            if (showPercent) setShowPercent(false);
                            else setShowPercent(true);
                          }}
                        >
                          {showPercent
                            ? `${batteryInfo.capacityUnit}`
                            : "Percent"}
                        </Button>
                      </Grid>
                    </Grid>
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
                          stroke={theme.palette.primary.main}
                          charging={batteryInfo.acConnected}
                          value={Number(
                            (
                              (batteryInfo.currentCapacity /
                                batteryInfo.maxCapacity) *
                              100
                            ).toFixed(0)
                          )}
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

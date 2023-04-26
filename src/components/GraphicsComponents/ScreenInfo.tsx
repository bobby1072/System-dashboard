import { Typography, Grid, Paper } from "@mui/material";
import { Systeminformation } from "systeminformation";
import { StyledBoxPaper } from "../../common/StyledPaper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import TvIcon from "@mui/icons-material/Tv";
export default function ScreenInfo({
  screen,
}: {
  screen: Systeminformation.GraphicsDisplayData[];
}) {
  return (
    <Paper>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={3}
        spacing={1}
        width="100%"
      >
        {screen.map((x) => {
          return (
            <Grid item width="50%">
              <StyledBoxPaper>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  padding={3}
                >
                  <Grid item sx={{ width: "35%", height: "55%" }}>
                    <TvIcon sx={{ width: "100%", height: "100%" }} />
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      padding={2}
                      spacing={1}
                    >
                      <Grid item>
                        <Typography fontSize={20} variant="subtitle2">
                          Resolution: {x.resolutionX} X {x.resolutionY}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography fontSize={20} variant="subtitle2">
                          Refresh rate: {x.currentRefreshRate} Hz
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography fontSize={20} variant="subtitle2">
                          Built in: {x.builtin ? "yes" : "no"}
                        </Typography>
                      </Grid>
                      {x.main ? (
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <CheckCircleIcon color="success" fontSize="large" />
                          </Grid>
                          <Grid item>
                            <Typography fontSize={40} variant="subtitle2">
                              Main screen
                            </Typography>
                          </Grid>
                        </Grid>
                      ) : (
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <CancelIcon color="error" fontSize="large" />
                          </Grid>
                          <Grid item>
                            <Typography fontSize={40} variant="subtitle2">
                              Not main screen
                            </Typography>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </StyledBoxPaper>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

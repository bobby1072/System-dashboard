import { Paper, Grid, Typography, Divider } from "@mui/material";
import { Systeminformation } from "systeminformation";
import { StyledBoxPaper } from "../../common/StyledPaper";
import CameraIcon from "@mui/icons-material/Camera";
export default function GraphicsInfo({
  graphics,
}: {
  graphics: Systeminformation.GraphicsControllerData[];
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
        {graphics.map((x, index) => (
          <Grid item width="50%">
            <StyledBoxPaper>
              <Typography
                textAlign="center"
                padding={1}
                fontSize={50}
                variant="subtitle2"
              >
                GPU: {index + 1}
              </Typography>
              <Divider />
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                padding={3}
              >
                <Grid item sx={{ width: "35%", height: "55%" }}>
                  <CameraIcon sx={{ width: "100%", height: "100%" }} />
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
                      <Typography fontSize={30} variant="subtitle2">
                        {x.vendor}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography fontSize={15} variant="subtitle2">
                        Model: {x.model}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography fontSize={15} variant="subtitle2">
                        Connection: {x.bus}
                      </Typography>
                    </Grid>
                    {x.vram && (
                      <Grid item>
                        <Typography fontSize={15} variant="subtitle2">
                          VRAM: {x.vram / 1024} GB
                        </Typography>
                      </Grid>
                    )}
                    {x.temperatureGpu && (
                      <Grid item>
                        <Typography fontSize={15} variant="subtitle2">
                          Temperature: {x.temperatureGpu} °C
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </StyledBoxPaper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

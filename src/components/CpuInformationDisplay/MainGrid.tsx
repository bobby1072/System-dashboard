import { Paper, Grid, Typography } from "@mui/material";
import ICpuType from "../../common/ICpuType";
interface IMainCpuProps {
  device: ICpuType;
}
export default function MainCpuGrid(props: IMainCpuProps) {
  const {
    device: { arch, cpuGenData, systemData },
  } = props;
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      width="100%"
    >
      <Grid item>
        <Paper>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            direction="column"
            spacing={1}
            padding={3.5}
          >
            <Grid item>
              <Typography fontSize={30} variant="subtitle2">
                {systemData.manufacturer}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={45} variant="subtitle2">
                {systemData.model}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={18} variant="subtitle2">
                Architecture: {arch}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={18} variant="subtitle2">
                CPU: {cpuGenData.manufacturer} {cpuGenData.brand}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            padding={3.5}
          >
            <Grid item>
              <p>bruh</p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

import { Paper, Grid, Typography } from "@mui/material";
import ICpuType from "../../common/ICpuType";
interface IMainCpuProps {
  device: ICpuType;
}

export default function CpuTitle(props: IMainCpuProps) {
  const {
    device: {
      arch,
      cpuGenData,
      systemData,
      opSys: { distro: version },
    },
  } = props;
  return (
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
            {version}
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
  );
}

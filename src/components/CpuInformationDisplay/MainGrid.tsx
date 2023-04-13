import { Paper, Grid, Typography } from "@mui/material";
import ICpuType from "../../common/ICpuType";
interface IMainCpuProps {
  device: ICpuType;
}
export default function MainCpuGrid(props: IMainCpuProps) {
  const {
    device: { arch, cpuGenData, systemData, cpuInfo },
  } = props;
  return (
    <Paper>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
        padding={4}
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
      </Grid>
    </Paper>
  );
}

import { Grid, Paper } from "@mui/material";
import ICpuType from "../../common/ICpuType";

export default function CpuDashboardDisplay({
  cpuInfo,
}: {
  cpuInfo: ICpuType[];
}) {
  return (
    <Paper>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        padding={2}
      >
        <Grid item>
          <p>bruh</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

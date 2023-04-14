import { Grid, Paper } from "@mui/material";
import { Systeminformation } from "systeminformation";

export default function CoreBoard({
  cpu,
}: {
  cpu: Systeminformation.CurrentLoadCpuData;
}) {
  return (
    <Paper>
      <Grid container direction="column" alignItems="center"></Grid>
    </Paper>
  );
}

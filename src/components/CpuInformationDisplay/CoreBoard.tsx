import { Grid, Paper } from "@mui/material";
import { Systeminformation } from "systeminformation";
export default function CoreBoard({
  cpu,
}: {
  cpu: Systeminformation.CurrentLoadCpuData;
}) {
  return (
    <Paper sx={{ backgroundColor: "#f5f5f5" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        minWidth="60vh"
        minHeight="30vh"
      >
        <Grid item>
          <p>Bruh</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

import { Grid, Paper, Typography } from "@mui/material";
import ICpuType from "../../common/ICpuType";
import MemoryIcon from "@mui/icons-material/Memory";
export default function ProcessorTab({ cpu }: { cpu: ICpuType }) {
  return (
    <Paper sx={{ backgroundColor: "#f5f5f5" }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="36vh"
        minWidth="18vh"
        spacing={1}
        padding={2}
      >
        <Grid item sx={{ width: "40%", height: "65%" }}>
          <MemoryIcon sx={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="center"
            direction="column"
            spacing={0.5}
          >
            <Grid item>
              <Typography fontSize={18} variant="subtitle2">
                CPU: {cpu.cpuGenData.manufacturer} {cpu.cpuGenData.brand}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={14} variant="subtitle2">
                Speed: {cpu.cpuGenData.speed}GHz
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={14} variant="subtitle2">
                Physical cores: {cpu.cpuGenData.physicalCores}
              </Typography>
            </Grid>
            {cpu.cpuGenData.performanceCores && (
              <Grid item>
                <Typography fontSize={14} variant="subtitle2">
                  Performance cores: {cpu.cpuGenData.performanceCores}
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Typography fontSize={14} variant="subtitle2">
                Threads:{" "}
                {cpu.cpuGenData.performanceCores
                  ? cpu.cpuGenData.performanceCores /
                    cpu.cpuGenData.physicalCores
                  : 1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={14} variant="subtitle2">
                Live CPU usage: {cpu.usagePerc.currentLoad.toFixed(1)}%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

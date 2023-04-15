import { Grid, Typography } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import { Systeminformation } from "systeminformation";
import { StyledBoxPaper } from "../../common/StyledPaper";
export default function CoreBoard({
  cpu,
}: {
  cpu: Systeminformation.CurrentLoadCpuData;
}) {
  return (
    <StyledBoxPaper>
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
          <div className="gauge-container">
            <Grid container alignItems="center" direction="column">
              <Grid item>
                <GaugeChart
                  id="gauge-chart1"
                  nrOfLevels={30}
                  percent={Number(cpu.load.toFixed(1)) / 100}
                  colors={["#FF5F6D", "#FFC371"]}
                  arcWidth={0.3}
                  textColor={"#333"}
                  animate={false}
                  needleColor={"#333"}
                />
              </Grid>
              <Grid item>
                <Typography fontSize={20} variant="subtitle2">
                  Usage: {cpu.load.toFixed(1)}%
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </StyledBoxPaper>
  );
}

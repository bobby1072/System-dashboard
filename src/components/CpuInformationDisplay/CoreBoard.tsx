import { Grid, Typography, Button } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import { Systeminformation } from "systeminformation";
import { StyledBoxPaper } from "../../common/StyledPaper";
export default function CoreBoard({
  allCpuData,
  setFocusedCore,
}: {
  allCpuData: Systeminformation.CurrentLoadCpuData[];
  setFocusedCore: (data?: Systeminformation.CurrentLoadCpuData[]) => void;
}) {
  return (
    <StyledBoxPaper>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        spacing={1}
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
                  percent={
                    Number(allCpuData[allCpuData.length - 1].load.toFixed(1)) /
                    100
                  }
                  colors={["#FF5F6D", "#FFC371"]}
                  arcWidth={0.3}
                  textColor={"#333"}
                  animate={false}
                  needleColor={"#333"}
                />
              </Grid>
              <Grid item>
                <Typography fontSize={20} variant="subtitle2">
                  Usage: {allCpuData[allCpuData.length - 1].load.toFixed(1)}%
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              setFocusedCore(allCpuData);
            }}
          >
            View percentage chart
          </Button>
        </Grid>
      </Grid>
    </StyledBoxPaper>
  );
}

import { Grid, Paper, useTheme } from "@mui/material";
import ICpuType from "../../common/ICpuType";
import ProcessorTab from "./ProcessorTab";
import { StyledBoxPaper } from "../../common/StyledPaper";
import CpuChart from "../../common/CpuChart";
export default function CpuDashboardDisplay({
  cpuInfo,
}: {
  cpuInfo: ICpuType[];
}) {
  let startDataArray: number[] = cpuInfo.map<number>(
    (x) => x.usagePerc.currentLoad
  );
  if (cpuInfo.length < 10) {
    for (let i = 0; i < 10 - cpuInfo.length; i++) {
      startDataArray.unshift(0);
    }
  }
  const theme = useTheme();
  const lineDataFormat: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: "overall cpu usage",
      color: theme.palette.primary.main,
      data: startDataArray.slice(Math.max(cpuInfo.length - 30, 0)),
    },
  ];
  return (
    <Paper>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        padding={2}
        minHeight="36vh"
      >
        <Grid item minWidth="18vh" width="50%">
          <StyledBoxPaper sx={{ height: "36vh" }}>
            <Grid
              container
              height="36vh"
              width="100%"
              minWidth="18vh"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              padding={2}
            >
              <Grid item height="100%" width="100%">
                <CpuChart series={lineDataFormat} title="overall cpu usage" />
              </Grid>
            </Grid>
          </StyledBoxPaper>
        </Grid>
        <Grid item width="50%" minWidth="18vh">
          <ProcessorTab cpu={cpuInfo[cpuInfo.length - 1]} />
        </Grid>
      </Grid>
    </Paper>
  );
}

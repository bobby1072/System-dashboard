import { Grid, Paper, useTheme } from "@mui/material";
import ICpuType from "../../common/ICpuType";
import Chart from "react-apexcharts";
import ProcessorTab from "./ProcessorTab";
export default function CpuDashboardDisplay({
  cpuInfo,
}: {
  cpuInfo: ICpuType[];
}) {
  const theme = useTheme();
  const lineDataFormat: {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    options: ApexCharts.ApexOptions;
  } = {
    series: [
      {
        name: "overall cpu usage",
        color: theme.palette.primary.main,
        data: cpuInfo
          .map<number>((x) => x.usagePerc.currentLoad)
          .slice(Math.max(cpuInfo.length - 50, 0)),
      },
    ],
    options: {
      chart: {
        id: "overall cpu usage",
        type: "line",
        animations: {
          enabled: false,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "overall cpu usage",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f5f5f5"],
          opacity: 0.5,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: (value: number) => {
            return value.toFixed(0) + "%";
          },
        },
        min: 0,
        max: 100,
        tickAmount: 5,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <Paper>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        padding={2}
      >
        <Grid item width="50%" height="36vh">
          <Paper sx={{ backgroundColor: "#f5f5f5", height: "36vh" }}>
            <Grid
              container
              height="36vh"
              width="100%"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              padding={2}
            >
              <Grid item height="100%" width="100%">
                <Chart
                  options={lineDataFormat.options}
                  series={lineDataFormat.series}
                  width="100%"
                  height="100%"
                  type="line"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item width="50%" height="36vh">
          <ProcessorTab cpu={cpuInfo[cpuInfo.length - 1]} />
        </Grid>
      </Grid>
    </Paper>
  );
}

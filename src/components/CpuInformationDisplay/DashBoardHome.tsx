import { Grid, Paper } from "@mui/material";
import ICpuType from "../../common/ICpuType";
import Chart from "react-apexcharts";
import ApexCharts from "react-apexcharts";
export default function CpuDashboardDisplay({
  cpuInfo,
}: {
  cpuInfo: ICpuType[];
}) {
  const lineDataFormat: {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    options: ApexCharts.ApexOptions;
  } = {
    series: [
      {
        name: "overall cpu usage",
        data: cpuInfo
          .slice(Math.max(cpuInfo.length - 30, 0))
          .map<number>((x) => x.usagePerc.currentLoad),
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
          colors: ["#f3f3f3", "transparent"],
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
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        padding={2}
      >
        <Grid item width="50%" height="36vh">
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
  );
}

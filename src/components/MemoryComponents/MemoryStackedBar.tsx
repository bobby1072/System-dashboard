import { Grid, Paper, Typography, useTheme } from "@mui/material";
import { StyledBoxPaper } from "../../common/StyledPaper";
import ReactApexChart from "react-apexcharts";

interface IMemoryStackedBarProps {
  activeMem: number;
  totalMem: number;
}
export default function MemoryStackedBar(props: IMemoryStackedBarProps) {
  const { activeMem, totalMem } = props;
  const theme = useTheme();
  const [options, series]: [ApexCharts.ApexOptions, ApexAxisChartSeries] = [
    {
      legend: {
        fontSize: "25px",
      },
      chart: {
        id: "Free memory",
        stacked: true,
        height: 350,
        type: "bar",
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
      title: {
        text: "Memory usage",
        align: "center",
        style: {
          fontSize: "25px",
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "center",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => {
          return (Number(val) / 1073741824).toFixed(2) + " GB";
        },
        offsetY: -20,
        style: {
          fontSize: "30px",
          colors: ["#000000"],
        },
      },
      xaxis: {
        categories: ["Free memory"],
        labels: {
          show: false,
        },
      },
      yaxis: {
        max: totalMem,
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    [
      {
        data: [activeMem],
        color: theme.palette.primary.main,
        name: "Used memory",
      },
      {
        data: [totalMem - activeMem],
        color: theme.palette.primary.dark,
        name: "Free memory",
      },
    ],
  ];
  return (
    <Paper>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        padding={2}
        height="100%"
        width="100%"
        direction="column"
      >
        <Grid item height="100%" width="100%">
          <StyledBoxPaper>
            <Grid
              minHeight="36vh"
              minWidth="80vh"
              container
              alignItems="center"
              justifyContent="center"
              padding={1}
              spacing={1}
              direction="column"
            >
              <Grid item width="100%" height="36vh">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="bar"
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item>
                <Typography fontSize={30} variant="subtitle2">
                  Total storage: {(totalMem / 1073741824).toFixed(2)} GB
                </Typography>
              </Grid>
            </Grid>
          </StyledBoxPaper>
        </Grid>
      </Grid>
    </Paper>
  );
}

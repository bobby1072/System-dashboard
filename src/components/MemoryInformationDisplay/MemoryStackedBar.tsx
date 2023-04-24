import { Grid, Paper, useTheme } from "@mui/material";
import { StyledBoxPaper } from "../../common/StyledPaper";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

interface IMemoryStackedBarProps {
  activeMem: number;
  totalMem: number;
}
export default function MemoryStackedBar(props: IMemoryStackedBarProps) {
  const { activeMem, totalMem } = props;
  const theme = useTheme();
  const [percentShow, setPercentShow] = useState<boolean>(false);
  const [options, series]: [ApexCharts.ApexOptions, ApexAxisChartSeries] = [
    {
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
        text: "Free memory",
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
          return (Number(val) / 1073741824).toFixed(2) + "GB";
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
              direction="column"
            >
              <Grid item width="100%" height="36vh">
                <div
                  onClick={() => {
                    if (percentShow) setPercentShow(false);
                    else setPercentShow(true);
                  }}
                  style={{ cursor: "pointer", width: "100%", height: "36vh" }}
                >
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Grid>
            </Grid>
          </StyledBoxPaper>
        </Grid>
      </Grid>
    </Paper>
  );
}

import Chart from "react-apexcharts";
export default function CpuChart({
  series,
  title,
}: {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  title: string;
}) {
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: title,
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
      text: title,
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
  };
  return (
    <Chart
      options={options}
      series={series}
      width="100%"
      height="100%"
      type="line"
    />
  );
}

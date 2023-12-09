"use client";

import dynamic from "next/dynamic";
import Select from "../../atoms/Select";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const EngagementChart = () => {
  const chartData = [
    { key: "Jan", value: 76 },
    { key: "Feb", value: 56 },
    { key: "Mar", value: 58 },
    { key: "Apr", value: 60 },
    { key: "May", value: 76 },
    { key: "Jun", value: 25 },
    { key: "Jul", value: 56 },
    { key: "Aug", value: 70 },
    { key: "Sep", value: 76 },
    { key: "Oct", value: 99 },
    { key: "Nov", value: 0 },
    { key: "Dec", value: 0 },
  ];
  const chart = {
    options: {
      xaxis: {
        labels: {
          style: {
            fontSize: "0.768rem",
            fontFamily: "__axiforma_b37546",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "0.768rem",
            fontFamily: "__axiforma_b37546",
          },
          formatter: (value: number) => `${value === 0 ? value : value + "k"}`,
        },
        tickAmount: 4,
        min: 0,
        max: 100,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "#9f9d9d",
        strokeDashArray: 1,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      colors: ["#8d3db0"],
      states: {
        normal: {
          filter: { type: "lighten", value: 0.4 },
        },
        hover: {
          filter: { type: "darken", value: 1 },
        },
      },
    },
    series: [
      {
        name: "engagement",
        data: chartData.map((val) => ({
          y: val.value + "k",
          x: val.key,
          columnWidthOffset: 8,
        })),
      },
    ],
  };

  return (
    <div className="w-full bg-twikkl-tertiary rounded-3xl pt-8 px-2 md:px-6">
      <div className="flex justify-between">
        <h2 className="font-medium">Engagement chart</h2>
        <Select />
      </div>
      <Chart
        options={chart.options}
        series={chart.series}
        type="bar"
        height={300}
        width="100%"
      />
    </div>
  );
};

export default EngagementChart;

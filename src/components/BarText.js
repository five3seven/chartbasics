import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";

export default function BarText() {
  const [series] = useState([
    {
      data: [
        {
          x: "Jan",
          y: [0, 75],
        },
        {
          x: "Feb",
          y: [0, 96],
        },
        {
          x: "Mar",
          y: [0, 200],
        },
        {
          x: "Apr",
          y: [0, 112],
        },
        {
          x: "May",
          y: [0, 53],
        },
        {
          x: "Jun",
          y: [0, 67],
        },
        {
          x: "Jul",
          y: [0, 108],
        },
        {
          x: "Aug",
          y: [0, 122],
        },
        {
          x: "Sep",
          y: [0, 74],
        },
        {
          x: "Oct",
          y: [0, 60],
        },
        {
          x: "Nov",
          y: [0, 81],
        },
        {
          x: "Dec",
          y: [0, 225],
        },
      ],
    },
  ]);
  const [options] = useState({
    chart: {
      background: "transparent",
      foreColor: "#333",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 7,
        columnWidth: "35%",
        barHeight: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#FFFFFF"],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 500,
          cssClass: "apexcharts-yaxis-label",
        },
      },
    },
    fill: {
      colors: ["#FFFFFF"],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: undefined,
    },
    states: {
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
  });
  return (
    <Chart
      options={options}
      series={series}
      type="rangeBar"
      height="225"
      width="620"
    />
  );
}

import React from "react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

export default function BarChart(props) {
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
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 7,
        columnWidth: "25%",
        barHeight: "70%",
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

  const [series, setSeries] = useState(props.series);

  useEffect(() => {
    setSeries(props.series);
  }, [props.series]);

  return (
      <Chart
        options={options}
        series={series}
        type="bar"
        height="225"
        width="620"
      />
  );
}

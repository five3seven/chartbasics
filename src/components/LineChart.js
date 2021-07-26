import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function LineChart() {
  const [options] = useState({
    chart: {
      background: "#ffffff",
      foreColor: "#333",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "#E2E8F0",
      strokeDashArray: 3,
    },
    colors: ["#4FD1C5", "#2D3748"], // Line color
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
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
        style: {
          colors: [
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
            "#CBD5E0",
          ],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 500,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#CBD5E0"],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 500,
          cssClass: "apexcharts-yaxis-label",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [],
        colorStops: [],
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    title: {
      text: "Sales overview",
      align: "left",
      margin: 30,
      offsetX: 10,
      offsetY: -5,
      style: {
        fontSize: "18px",
        color: "#2D3748",
      },
    },
    // events: {
    //   click: (event, chartContext, confi) => {
    //     console.log(11);
    //     const newNumber = series[0].data[series[0].data.length - 1];
    //     const originalNumber = series[0].data[0];
    //     const Increase = ((newNumber - originalNumber) / originalNumber) * 100;
    //     Math.floor(Math.abs(Increase));
    //     // Increase > 0 ? "green":"red";
    //     console.log(Math.floor(Math.abs(Increase)));
    //   },
    // },
  });

  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [200, 55, 41, 171, 125, 34, 25, 141, 107, 150, 22, 400],
    },
    {
      type: "area",
      name: "Websites",
      data: [33, 11, 21, 117, 25, 133, 121, 211, 147, 25, 201, 203],
    },
  ]);

  const calculateIncrease = () => {
    const newNumber = series[0].data[series[0].data.length - 1];
    const originalNumber = series[0].data[0];
    const Increase = ((newNumber - originalNumber) / originalNumber) * 100;
    Math.floor(Math.abs(Increase));
    // if (increase == 0)
    //   "gray"
    //else
    //  Increase > 0 ? "green":"red";
    console.log(Increase.toString() + "%");
    // console.log(Math.floor(Math.abs(Increase)));
  };
  const GenerateData = () => {
    const newSeries = [];
    series.map((s) => {
      const data = s.data.map(() => {
        return Math.round(Math.random() * (180 - Math.exp(Math.random())));
      });
      newSeries.push({ data, name: s.name });
    });
    setSeries(newSeries);
  };

  return (
    <React.Fragment>
      <Chart
        options={options}
        series={series}
        // type="line"
        height="450"
        width="100%"
      />
      <Button
        onClick={GenerateData}
        variant="secondary"
        style={{ margin: "5px" }}
      >
        Random
      </Button>
      <Button onClick={calculateIncrease}>click</Button>
    </React.Fragment>
  );
}

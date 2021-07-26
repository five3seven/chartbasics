import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function BarChart() {
  const [options, setOptions] = useState({
    chart: {
      background: "#f4f4f4",
      foreColor: "#333",
    },
    xaxis: {
      categories: ["A", "B", "C", "D", "E"],
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    fill: {
      colors: ["#f44336"],
    },
    dataLables: {
      enabled: false,
    },
    title: {
      text: "Numbers",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px",
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "numbers",
      data: [44, 55, 41, 17, 15],
    },
  ]);

  function ChartOrientation() {
    setOptions({
      ...options,
      plotOptions: {
        ...options.plotOptions,
        bar: {
          ...options.plotOptions.bar,
          horizontal: !options.plotOptions.bar.horizontal,
        },
      },
    });
  }

  function GenerateData() {
    const newSeries = [];
    series.map((s) => {
      const data = s.data.map(() => {
        return Math.round(Math.random() * (180 - Math.exp(Math.random())));
      });
      newSeries.push({ data, name: s.name });
    });
    setSeries(newSeries);
  }

  return (
    <React.Fragment>
      <Chart
        options={options}
        series={series}
        type="bar"
        height="450"
        width="100%"
      />
      <Button onClick={ChartOrientation} variant="primary" style={{marginRight: "5px"}}>
        Switch Orientation
      </Button>
      <Button onClick={GenerateData} variant="secondary" style={{marginLeft: "5px"}}>
        Random
      </Button>
    </React.Fragment>
  );
}

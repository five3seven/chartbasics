import React from "react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

export default function LineChart(props) {
  const [options, setOptions] = useState({
    chart: {
      background: "#ffffff",
      foreColor: "#333",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
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
      title: {
        text: "in 2021",
        offsetX: "0rem",
        offsetY: "0rem",
        style: {
          color: "#A0AEC0",
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 450,
          cssClass: "apexcharts-yaxis-title",
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
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    title: {
      text: undefined, // Sales overview
      align: "left",
      margin: 30,
      offsetX: 10,
      offsetY: 20,
      style: {
        fontSize: "14px",
        color: "#2D3748",
      },
    },
    subtitle: {
      text: "in 2021",
      align: "left",
      margin: 30,
      offsetX: 106,
      offsetY: 20,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: undefined,
        color: "#CBD5E0",
      },
    },
  });

  const [series, setSeries] = useState(props.series);

  useEffect(() => {
    setSeries(props.series);
  }, [props.series]);

  useEffect(() => {
    const inc = calculateIncrease();
    let col,
      txt,
      sInc = Math.abs(inc).toString(),
      titleDis;
    if (inc === 0) {
      col = "#A0AEC0";
      txt = txt = "(+" + sInc + "%) more";
    } else {
      inc > 0 ? (col = "#48BB78") : (col = "#E53E3E");
      inc > 0
        ? (txt = "(+" + sInc + "%) more")
        : (txt = "(-" + sInc + "%) less");
    }
    sInc.lenght > 3 ? (titleDis = 150) : (titleDis = 120);
    console.log(sInc.length);
    setOptions({
      ...options,
      title: {
        ...options.title,
        text: txt,
        style: {
          ...options.title.style,
          color: col,
        },
      },
      subtitle: {
        ...options.subtitle,
        offsetX: titleDis,
      },
    });
  }, [series]);

  const calculateIncrease = () => {
    const newNumber = series[0].data[series[0].data.length - 1];
    const originalNumber = series[0].data[0];
    const Increase = ((newNumber - originalNumber) / originalNumber) * 100;
    return Math.floor(Increase);
  };

  return <Chart options={options} series={series} width="100%" height="450" />;
}

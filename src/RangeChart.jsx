import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import dayjs from "dayjs";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        data: [
          {
            x: "Vanilla Bean Crème Brûlée",
            y: [
              new Date("2019-02-26").getTime(),
              new Date("2019-03-04").getTime(),
            ],
            fillColor: "#008FFB",
          },
          {
            x: "Waffle with Berries",
            y: [
              new Date("2019-03-03").getTime(),
              new Date("2019-03-08").getTime(),
            ],
            fillColor: "#00E396",
          },
          {
            x: "Classic Tiramisu",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-10").getTime(),
            ],
            fillColor: "#775DD0",
          },
          {
            x: "Pistachio Baklava",
            y: [
              new Date("2019-03-07").getTime(),
              new Date("2019-03-12").getTime(),
            ],
            fillColor: "#FEB019",
          },
          {
            x: "Vanilla Panna Cotta",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-17").getTime(),
            ],
            fillColor: "#FF4560",
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = dayjs(val[0]);
          var b = dayjs(val[1]);
          var diff = b.diff(a, "days");
          return label + ": " + diff + (diff > 1 ? " days" : " day");
        },
        style: {
          colors: ["#f3f4f5", "#fff"],
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        show: false,
      },
      grid: {
        row: {
          colors: ["#f3f4f5", "#fff"],
          opacity: 1,
        },
      },
    },
  });

  return (
    <section>
      <h2>Best Sellings in dates</h2>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="rangeBar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </section>
  );
};

export default ApexChart;

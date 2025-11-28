import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    layout: {
  padding: {
    top: 20,
    bottom: 10,
    left: 0,
    right: 0,
  },
},
elements: {
  line: {
    tension: 0.4,
  },
  point: {
    radius: 0,
  },
},
scales: {
  y: {
    beginAtZero: true,
    grace: '20%',
    ticks: {
      color: "#9f9f9f",
    },
  },
  x: {
    ticks: {
      color: "#9f9f9f",
    },
  },
},

  };

  const data = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Vendas",
        data: [10, 20, 30, 40, 10, 10, 80, 20, 40, 33, 37, 9],
        borderColor: "#00bbff",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        backgroundColor: (context: { chart: any }) => {
          const bgColor = ["rgba(0, 187, 255, 0.5)", "rgba(0, 187, 255, 0)"];

          if (!context.chart.chartArea) {
            return null;
          }

          console.log(context.chart.chartArea);

          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBG = ctx.createLinearGradient(0, top, 0, bottom);

          bgColor.map((color, index) => {
            gradientBG.addColorStop(index, color);
          });

          return gradientBG;
        },
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 2.5,
        fill: true,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineGraph;

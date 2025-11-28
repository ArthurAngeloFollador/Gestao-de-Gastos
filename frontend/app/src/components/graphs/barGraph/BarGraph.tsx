import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = () => {
  const theme = useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grace: "10%",
        ticks: { color: "#bfbfbf" },
      },
      x: {
        ticks: { color: "#bfbfbf" },
      },
    },
  };

  const data = {
    labels: [
      "Food",
      "Transport",
      "Entertainment",
      "Health",
      "Clothing",
      "Other",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: theme.colors.primaryText + "33",
        borderColor: theme.colors.primaryText + "88",
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 50,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarGraph;

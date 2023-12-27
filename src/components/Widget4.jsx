import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);
const Widget4 = () => {
  const data = {
    labels: ["1 Aug", "8 Aug", "15 Aug", "22 Aug", "29 Aug", "5 Sep"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "rgba(255, 168, 0, 1)",
        borderColor: "rgba(255, 168, 0, 1)",
        borderWidth: 1,
        data: [75, 100, 125, 105, 115, 140], 
        borderRadius: 10
      },
      {
        label: "Dataset 2",
        backgroundColor: "rgba(229, 234, 238, 1)",
        borderColor: "rgba(229, 234, 238, 1)",
        borderWidth: 1,
        data: [55, 80, 110, 85, 105, 130], 
        borderRadius: 10
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        }
      },
  };
  return (
    <section>
      <div className="mx-auto my-6 flex max-w-7xl flex-col gap-4 rounded-xl bg-white pb-6">
        <div className="flex justify-between p-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Recent Stats</h3>
            <p className="text-xs text-[#B5B5C3]">More than 400+ new members</p>
          </div>
          <div className="flex items-center">
            <button className="rounded-xl p-3 text-xs font-semibold text-[#B5B5C3] hover:bg-[#464E5F] hover:text-white">
              Month
            </button>
            <button className="rounded-xl p-3 text-xs font-semibold text-[#B5B5C3] hover:bg-[#464E5F] hover:text-white">
              Week
            </button>
            <button className="rounded-xl bg-[#464E5F] p-3 text-xs font-semibold text-white">
              Day
            </button>
          </div>
        </div>
        <div className="md:p-10 p-4">
          <Bar data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default Widget4;

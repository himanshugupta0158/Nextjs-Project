// components/TotalJobPostGraph.js
import { Bar } from 'react-chartjs-2';

const TotalJobPostGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Total Job Posts',
        data: [10, 15, 8, 20, 12],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="my-4">
      <h2>Total Job Post Graph</h2>
      <Bar data={data} />
    </div>
  );
};

export default TotalJobPostGraph;

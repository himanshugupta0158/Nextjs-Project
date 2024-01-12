// components/ComparisonGraph.js
import { Bar } from 'react-chartjs-2';

const ComparisonGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Total Job Posts',
        data: [10, 15, 8, 20, 12],
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
      {
        label: 'Total Applicants',
        data: [8, 12, 15, 10, 18],
        backgroundColor: 'rgba(255,99,132,0.5)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="my-4">
      <h2>Comparison Graph</h2>
      <Bar data={data} />
    </div>
  );
};

export default ComparisonGraph;

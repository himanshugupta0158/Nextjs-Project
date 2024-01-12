// components/TotalApplicantsGraph.js
import { Bar } from 'react-chartjs-2';

const TotalApplicantsGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
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
      <h2>Total Applicants Graph</h2>
      <Bar data={data} />
    </div>
  );
};

export default TotalApplicantsGraph;

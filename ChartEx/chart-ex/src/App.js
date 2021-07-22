import logo from './logo.svg';
import './App.css';
import { Bar,Line,Pie } from "react-chartjs-2";

function App() {
  return (
    <div>
        <Bar width={400}
             height={600}
             options={{
              maintainAspectRatio: false,
             }}
             data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets:[{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              },
                {
                    label: 'Quantity',
                    data: [47, 52, 67, 58, 9, 50],
                    backgroundColor: 'orange',
                    borderColor: 'red'
                },
                {
                  label: 'Price',
                  data: [24, 26, 33, 29, 5, 25],
                  backgroundColor: 'pink',
                  borderColor: 'grey'
              }
              ]
             }}>
          
        </Bar>
    </div>
  );
}

export default App;

import react from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) =>{
    const datapointValue = props.dataPoints.map(datapoint => datapoint.value);
    const totalMaxValue = Math.max(...datapointValue);
    return (
      <div className="chart">
        {props.dataPoints.map((datapoint) => (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaxValue}
            label={datapoint.label}
          />
        ))}
      </div>
    );
}

export default Chart;
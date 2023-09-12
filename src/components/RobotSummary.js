import Battery from "./Battery";

function RobotSummary({robotName, batteryLevel}) {
    return (
      <div className="App">
        <p>{robotName}</p>
        <Battery batteryLevel={batteryLevel} />
      </div>
    );
  }
  
export default RobotSummary;
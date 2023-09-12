import Battery from "./Battery";

function RobotSummary({robotName, batteryLevel}) {
    return (
      <div className="robot-summary">
        <p>{robotName}</p>
        <Battery batteryLevel={batteryLevel} />
      </div>
    );
  }
  
export default RobotSummary;
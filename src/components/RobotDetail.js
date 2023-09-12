import { useState } from "react";
import Battery from "./Battery";

function RobotDetail({robotName, batteryLevel, robotDescription, robotId}) {

    const [chargeDisabled, setChargeDisabled] = useState(false)

    function chargeBot() {
        setChargeDisabled(true)
        fetch(`https://robotsapi.vercel.app/chargerobot/${robotId}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            setChargeDisabled(false)
            console.log("data", data)
        });
    }

    return (
      <div className="App">
        <p>{robotName}</p>
        <Battery batteryLevel={batteryLevel} />
        <p>{robotDescription}</p>
        <button disabled={chargeDisabled} onClick={() => chargeBot()}>Charge BOT !</button>
      </div>
    );
  }
  
export default RobotDetail;
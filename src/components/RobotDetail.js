import { useState } from "react";
import Battery from "./Battery";
import { useDispatch } from 'react-redux'
import { updateRobotChargeFromStore } from '../features/robots/robotsSlice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function RobotDetail({robotName, batteryLevel, robotDescription, robotId}) {

    const [chargeDisabled, setChargeDisabled] = useState(false)
    const dispatch = useDispatch()

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
            dispatch(updateRobotChargeFromStore(robotId))
            console.log("data", data)
        });
    }

    return (
      <div className="robot-detail">
        <h2>{robotName}</h2>
        <p>{robotDescription}</p>
        <Battery batteryLevel={batteryLevel} />
        <button disabled={chargeDisabled} onClick={() => chargeBot()}><span className="text">Charge BOT !</span><span className="icon"><FontAwesomeIcon icon={faBolt} /></span></button>
      </div>
    );
  }
  
export default RobotDetail;
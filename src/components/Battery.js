import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryEmpty, faBatteryFull, faBatteryQuarter, faBatteryHalf, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";

function Battery({batteryLevel}) {

    const [batteryIcon, setBatteryIcon] = useState(faBatteryEmpty)

    useEffect(() => {
        if(batteryLevel === 100) {
            setBatteryIcon(faBatteryFull)
        } else if(batteryLevel >= 75) {
            setBatteryIcon(faBatteryThreeQuarters)
        } else if(batteryLevel >= 50) {
            setBatteryIcon(faBatteryHalf)
        } else if(batteryLevel >= 25) {
            setBatteryIcon(faBatteryQuarter)
        } else {
            setBatteryIcon(faBatteryEmpty)
        }
    },[batteryLevel])

    return (
      <div className="battery">
        <p>battery : </p>
        <p className="battery-level">{batteryLevel}%</p>
        <FontAwesomeIcon className="battery-icon" icon={batteryIcon} />
      </div>
    );
  }
  
  export default Battery;
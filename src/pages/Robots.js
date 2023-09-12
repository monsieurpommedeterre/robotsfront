import RobotSummary from '../components/RobotSummary'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function RobotsPage() {

  const navigate = useNavigate();
  const [robots, setRobots] = useState([])

  useEffect(() => {

    fetch(`https://robotsapi.vercel.app/getrobots`)
      .then(response => response.json())
      .then(data => {
        console.log("data", data)
        setRobots(data.robots);
      });
  }, []);

  const fetchedRobots = robots.map((robot, index) => 
  <div key={index} onClick={()=> navigate(`/robot/${robot._id}`)}>
    <RobotSummary robotName={robot.name} batteryLevel={robot.batteryLevel} />
  </div>)

  return (
    <div className="robots-container">
      {fetchedRobots}
    </div>
  );
}
  
export default RobotsPage;
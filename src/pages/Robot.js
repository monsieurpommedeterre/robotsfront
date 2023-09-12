import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import RobotDetail from '../components/RobotDetail';

function RobotPage() {

  const [robot, setRobot] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  const robots = useSelector((state) => state.robots.value)
  
  useEffect(() => {
    const robotFinder = robots.find(robot => robot._id === params.robotid)
    if(robotFinder) {
      setRobot(robotFinder)
    } else {
      navigate("/nopage")
    }
  }, [params.robotid, robots, navigate]);

    return (
      <div className="robot-container">
        <button onClick={() => navigate("/robots")}>Go Back</button>
        <RobotDetail robotName={robot.name} robotDescription={robot.description} batteryLevel={robot.batteryLevel} robotId={robot._id}/>
      </div>
    );
  }
  
  export default RobotPage;
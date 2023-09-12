import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import RobotDetail from '../components/RobotDetail';

function RobotPage() {
  const params = useParams()
  const navigate = useNavigate()
  const robots = useSelector((state) => state.robots.value)
  const robot = robots.find(robot => robot._id === params.robotid)

  useEffect(() => {
    console.log("id", params.robotid)
    // robots.filter(robot => robot._id === route._id)
  }, [params.robotid]);

    return (
      <div className="robot-container">
        <button onClick={() => navigate("/robots")}>Go Back</button>
        <RobotDetail robotName={robot.name} robotDescription={robot.description} batteryLevel={robot.batteryLevel} robotId={robot._id}/>
      </div>
    );
  }
  
  export default RobotPage;
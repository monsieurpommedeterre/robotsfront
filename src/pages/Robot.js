import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import RobotDetail from '../components/RobotDetail';

function RobotPage() {
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("id", params.robotid)
    // robots.filter(robot => robot._id === route._id)
  }, [params.robotid]);

    return (
      <div className="robot-container">
        <button onClick={() => navigate("/robots")}>Go Back</button>
        <RobotDetail robotName="Henry" robotDescription="Lorem RobotSum" batteryLevel={100} robotId={params.robotid}/>
      </div>
    );
  }
  
  export default RobotPage;
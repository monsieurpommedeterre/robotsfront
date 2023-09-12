import RobotSummary from '../components/RobotSummary'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setStoreRobots} from '../features/robots/robotsSlice'

function RobotsPage() {

  const navigate = useNavigate();
  const [addRobotDisabled, setAddRobotDisabled] = useState(false)
  const [deleteRobotDisabled, setDeleteRobotDisabled] = useState(false)

  const dispatch = useDispatch()
  const robots = useSelector((state) => state.robots.value)
  useEffect(() => {

    fetch(`https://robotsapi.vercel.app/getrobots`)
      .then(response => response.json())
      .then(data => {
        console.log("data", data)
        dispatch(setStoreRobots(data.robots));
      });
  }, [dispatch]);

  const addRobot = () => {
    setAddRobotDisabled(true)
        fetch(`https://robotsapi.vercel.app/addrobot`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
          setAddRobotDisabled(false)
          console.log("data", data)
        });
  }

  const deleteRobot = (robotId) => {
    setDeleteRobotDisabled(true)
        fetch(`https://robotsapi.vercel.app/deleterobot/${robotId}`,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
          setDeleteRobotDisabled(false)
          console.log("data", data)
        });
  }

  const fetchedRobotsList = robots.map((robot, index) =>
  <div key={index} >
  <div onClick={()=> navigate(`/robot/${robot._id}`)}>
    <RobotSummary robotName={robot.name} batteryLevel={robot.batteryLevel} />
  </div>
  <button disabled={deleteRobotDisabled} onClick={() => deleteRobot(robot._id)}>Delete Robot</button>
  </div>
  )

  return (
    <div className="robots-container">
      <button onClick={() => navigate("/")}>Go Home</button>
      <button disabled={addRobotDisabled} onClick={() => addRobot() }>Add Robot</button>
      {fetchedRobotsList}
    </div>
  );
}
  
export default RobotsPage;
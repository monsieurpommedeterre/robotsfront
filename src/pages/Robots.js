import RobotSummary from '../components/RobotSummary'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setRobotsFromStore, addRobotFromStore, deleteRobotFromStore } from '../features/robots/robotsSlice'

function RobotsPage() {

  const navigate = useNavigate();
  const [addRobotDisabled, setAddRobotDisabled] = useState(false)
  const [deleteRobotDisabled, setDeleteRobotDisabled] = useState(false)
  const [warningMessage, setWarningMessage] = useState('')

  const dispatch = useDispatch()
  const robots = useSelector((state) => state.robots.value)
  useEffect(() => {

    fetch(`https://robotsapi.vercel.app/getrobots`)
      .then(response => response.json())
      .then(data => {
        console.log("data", data)
        dispatch(setRobotsFromStore(data.robots));
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
          if(data.result) {
            setWarningMessage('')
            dispatch(addRobotFromStore(data.robot));
          } else {
            setWarningMessage(data.message)
          }
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
          dispatch(deleteRobotFromStore(robotId))
          setWarningMessage('')
          console.log("data", data)
        });
  }

  const fetchedRobotsList = robots.map((robot, index) =>
  <div className="robot-summary-item">
    <div key={index} className="robot-summary-card" onClick={()=>  navigate(`/robot/${robot._id}`)}>
      <RobotSummary robotName={robot.name} batteryLevel={robot.batteryLevel} />
    </div>
    <button disabled={deleteRobotDisabled} onClick={() => deleteRobot(robot._id)}>Destroy Robot</button>
  </div>
  )

  return (
    <div className="robots-container">
      <div className="robots-menu">
        <div>
          <button className="gohome-button" onClick={() => navigate("/")}>Go Home</button>
        </div>
        <div className="addrobot-container">
          <button className="addrobot-button" disabled={addRobotDisabled} onClick={() => addRobot() }><span>Create<br/>Robot</span></button>
        </div>
        </div>
      <p className="warning-message">{warningMessage}</p>
      <div className="robot-summary-container">
        {fetchedRobotsList.length?fetchedRobotsList:<p>No robots yet, create some, you're the boss !</p>}
      </div>
    </div>
  );
}
  
export default RobotsPage;
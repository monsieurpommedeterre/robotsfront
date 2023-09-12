import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="main-page">
      <h1>Welcome to the robots factory !</h1>
      <img src="logo_main.png" alt="robot_logo" />
      <button onClick={() => navigate("/robots")}>go in</button>
    </div>
  );
}
  
export default HomePage;
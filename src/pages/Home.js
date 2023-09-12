import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Welcome to the robots factory !</h1>
      <button onClick={() => navigate("/robots")}>go in</button>
    </div>
  );
}
  
export default HomePage;
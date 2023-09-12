import { useNavigate } from "react-router-dom";

function NoPage() {

    const navigate = useNavigate()

    return (
      <div className="App">
        <button onClick={() => navigate("/")}>Go Home</button>
        <p>We're just a bunch of broken robots</p>
      </div>
    );
  }
  
  export default NoPage;
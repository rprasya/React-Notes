import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="containerHome">
      <h1>Welcome</h1>
      <p>This is Home Page from app Notes</p>
      <button>
        <Link to={"/notes"}>Make a note</Link>
      </button>
    </div>
  );
};

export default Home;

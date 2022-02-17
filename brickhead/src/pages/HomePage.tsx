import HeaderComponent from "../components/HeaderComponent";
import HomeGrid from "../components/HomeGrid";
import MainVideo from "../components/MainVideo";
import { useEffect } from "react";
import "./HomePage.css";
function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="header">
        <HeaderComponent />
      </div>
      <div className="vertical-line"></div>
      <h2 className="recent-works">Recent Work</h2>
      <MainVideo />
      <HomeGrid />
    </div>
  );
}
export default HomePage;

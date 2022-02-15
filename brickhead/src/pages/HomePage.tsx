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
      <MainVideo />
      <HomeGrid />
    </div>
  );
}
export default HomePage;

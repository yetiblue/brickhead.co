import HeaderComponent from "../components/HeaderComponent";
import HomeGrid from "../components/HomeGrid";
import MainVideo from "../components/MainVideo";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderComponent />
      <MainVideo />
      <HomeGrid />
    </div>
  );
}
export default HomePage;

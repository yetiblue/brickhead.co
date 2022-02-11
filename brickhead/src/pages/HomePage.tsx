import HeaderComponent from "../components/HeaderComponent";
import CardGrid from "../components/CardGrid";
import MainVideo from "../components/MainVideo";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderComponent />
      {/* <MainVideo /> */}
      <CardGrid />
    </div>
  );
}
export default HomePage;

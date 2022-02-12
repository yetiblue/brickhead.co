import HeaderComponent from "../components/HeaderComponent";
import HomeGrid from "../components/HomeGrid";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderComponent />
      <HomeGrid />
    </div>
  );
}
export default HomePage;

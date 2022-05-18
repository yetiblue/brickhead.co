import HeaderComponent from "../components/HeaderComponent";
import VFXComponent from "../components/VFXComponent";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderComponent />
      <h2 className="collaborators-title">VFX</h2>
      <VFXComponent />
    </div>
  );
}
export default HomePage;

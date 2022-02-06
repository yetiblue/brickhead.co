import HeaderComponent from "../components/HeaderComponent";
import Collaborators from "../components/Collaborators";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderComponent />
      <Collaborators />
    </div>
  );
}
export default HomePage;

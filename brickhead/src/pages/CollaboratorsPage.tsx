import HeaderComponent from "../components/HeaderComponent";
import CollaboratorList from "../components/CollaboratorList";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderComponent />
      <CollaboratorList />
    </div>
  );
}
export default HomePage;

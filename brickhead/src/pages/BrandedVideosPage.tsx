import CardGrid from "../components/CardGrid";
import HeaderComponent from "../components/HeaderComponent";
import PageTitle from "../components/PageTitle";
import { useEffect } from "react";
import "./MusicAndBrandedPage.css";

function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="work-page">
      <HeaderComponent />
      <PageTitle pageTitle="Branded" />
      <CardGrid sortFilter="Branded" />
    </div>
  );
}
export default WorkPage;

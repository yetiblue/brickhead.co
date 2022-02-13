import CardGrid from "../components/CardGrid";
import HeaderComponent from "../components/HeaderComponent";
import PageTitle from "../components/PageTitle";
import { useEffect } from "react";

function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderComponent />
      <PageTitle pageTitle="WORK" />
      <CardGrid />
    </div>
  );
}
export default WorkPage;

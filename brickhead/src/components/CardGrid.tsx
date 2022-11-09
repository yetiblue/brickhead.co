import "./CardGrid.css";
import store from "../store/store";
import WorkNavigationButtons from "../components/WorkNagivationButtons";
import { useState } from "react";
import CardComponent from "./CardComponent";

let storeContent = store.getState();

function CardGrid() {
  const [workNavOption, setWorkNavOption] = useState("");
  let filteredContent;
  if (workNavOption === "Music Videos") {
    filteredContent = storeContent.filter(
      (works) => works.category === "Music Video"
    );
  } else {
    filteredContent = storeContent.filter(
      (works) => works.category !== "Music Video"
    );
  }
  const cardContent = filteredContent.map((card) => (
    <div className="justify">
      <li key={card.title} className="card-object">
        <CardComponent
          cardCategory={card.category}
          cardTitle={card.title}
          cardDirector={card.director}
          cardSource={card.src}
          cardThumbnail={card.thumbnail}
        />
      </li>
    </div>
  ));
  // }
  let gridContent = <ul className="card-wrapper">{cardContent}</ul>;

  return (
    <div>
      <WorkNavigationButtons selectedCategory={setWorkNavOption} />
      <div className="justify-cardgrid">
        <div className="cardgrid-wrapper">
          {gridContent}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
export default CardGrid;

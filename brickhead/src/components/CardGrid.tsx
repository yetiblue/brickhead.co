import "./CardGrid.css";
import store from "../store/store";
import { useParams } from "react-router-dom";

import CardComponent from "./CardComponent";

let storeContent = store.getState();

function CardGrid() {
  let routeParam = useParams();
  let cardContent;
  console.log(routeParam.category, "params");
  // if (routeParam.category !== undefined) {
  //   let filteredResults = storeContent.filter(
  //     (video) => video.route === routeParam.category
  //   );
  //   console.log(filteredResults, "filtered resuts");
  //   cardContent = filteredResults.map((card) => (
  //     <li key={card.title} className="card-object">
  //       <CardComponent
  //         cardCategory={card.category}
  //         cardTitle={card.title}
  //         cardDirector={card.director}
  //         cardSource={card.src}
  //         cardThumbnail={card.thumbnail}
  //       />
  //     </li>
  //   ));
  // } else {
  console.log("nothing");
  cardContent = storeContent.map((card) => (
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
    <div className="justify-cardgrid">
      <div className="cardgrid-wrapper">
        {gridContent}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
export default CardGrid;

import "./CardGrid.css";
import store from "../store/store";

import CardComponent from "./CardComponent";

let storeContent = store.getState();

let cardContent = storeContent.map((card) => (
  <li key={card.title} className="card-object">
    <CardComponent
      cardCategory={card.category}
      cardTitle={card.title}
      cardDirector={card.director}
      cardSource={card.src}
    />
  </li>
));
let gridContent = <ul className="card-wrapper">{cardContent}</ul>;

function CardGrid() {
  return (
    <div className="cardgrid-wrapper">
      {gridContent}
      <div>
        <iframe
          className="card"
          src="https://www.youtube.com/embed/dzQd-CsG-PE"
          allow="fullscreen; picture-in-picture"
          width="800"
          height="420"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}
export default CardGrid;

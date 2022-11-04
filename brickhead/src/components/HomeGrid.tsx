import "./HomeGrid.css";
import { Link } from "react-router-dom";
function HomeGrid() {
  document.body.style.overflow = "visible";

  return (
    <div>
      <ul className="homepage-layout">
        <li className="homepage-item-v1">
          <div className="homepage-item-v1-text">
            <p>LEXUS x Frank White</p>
            <h6 className="homepage-director-jack"> Dir. Jarrett Depasquale</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Lexus-min.png" />
        </li>
        <li className="homepage-item-v2">
          <div className="homepage-item-v2-text">
            <p>NOITAMALCER - Juneteenth Elegy</p>
            <h6 className="homepage-director"> Dir. Ewurakua Dawson-Amoah</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Juneteenth-min.JPG" />
        </li>
        <li className="homepage-item-v1">
          <div className="homepage-item-v1-text">
            <p>Starr</p>
            <h6 className="homepage-director">
              Gabriel Crawford Connelly + Alex Fischman Cardenas
            </h6>
          </div>
          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Starr-min.png" />
        </li>
        <li className="homepage-item-v2">
          <div className="homepage-item-v2-text">
            <p>Abby T - Legos</p>
            <h6 className="homepage-director"> Dir. Henry DaCosta</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Legos-min.png" />
        </li>
        <li className="homepage-item-v1">
          <div className="homepage-item-v1-text">
            <p>Jacob Jones The Company - Neptune’s Dreams</p>
            <h6 className="homepage-director"> Dir. Alex Fischman Cárdenas</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/NeptuneDream-min.png" />
        </li>
      </ul>
      <Link className="see-all" to="/work">
        <p className="see-all">See Select Work</p>
      </Link>
    </div>
  );
}

export default HomeGrid;

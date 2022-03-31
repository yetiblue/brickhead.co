import "./HomeGrid.css";
import { Link } from "react-router-dom";
function HomeGrid() {
  document.body.style.overflow = "visible";

  return (
    <div>
      <ul className="homepage-layout">
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
        <li className="homepage-item-v2">
          <div className="homepage-item-v2-text">
            <p>Underscores - Gunk</p>
            <h6 className="homepage-director-jack"> Dir. Ayodeji</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Gunk-min.png" />
        </li>
        <li className="homepage-item-v1">
          <div className="homepage-item-v1-text">
            <p>Montell Fish - WINGS</p>
            <h6 className="homepage-director"> Dir. Caleb Wild</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Wings-2-min.png" />
        </li>
      </ul>
      <Link className="see-all" to="/work">
        <p className="see-all">See Select Work</p>
      </Link>
    </div>
  );
}

export default HomeGrid;

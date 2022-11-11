import "./HomeGrid.css";
import { Link } from "react-router-dom";
function HomeGrid() {
  document.body.style.overflow = "visible";

  return (
    <div>
      <ul className="homepage-layout">
        <li className="homepage-item-v1">
          <div className="homepage-item-v1-text">
            <p>ASUS: For Those Who Dare x Complex</p>
            <h6 className="homepage-director-jack"> Dir. Julian Muller</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/asus-min.png" />
        </li>
        <li className="homepage-item-v2">
          <div className="homepage-item-v2-text">
            <p>Coca-Cola Dreamworld x KidSuper</p>
            <h6 className="homepage-director-jack"> Dir. Nick Freeman</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/kidsuper.png" />
        </li>
        <li className="homepage-item-v1">
          <div className="homepage-item-v1-text">
            <p>Starr</p>
            <h6 className="homepage-director">
              Gabriel Crawford Connelly + Alex Fischman Cardenas
            </h6>
          </div>
          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/starrupdate-min.png" />
        </li>
        <li className="homepage-item-v2">
          <div className="homepage-item-v2-text">
            <p>LEXUS x Frank White</p>
            <h6 className="homepage-director-jack"> Dir. Jarrett Depasquale</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Lexus-min.png" />
        </li>
        <li className="homepage-item-v1">
          <div className="homepage-item-v1-text">
            <p>Abby T - Legos</p>
            <h6 className="homepage-director"> Dir. Henry DaCosta</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Legos-min.png" />
        </li>
      </ul>
      <Link className="see-all" to="/about">
        <p className="see-all">Who We Are</p>
      </Link>
    </div>
  );
}

export default HomeGrid;

import "./HomeGrid.css";
import { Link } from "react-router-dom";
function HomeGrid() {
  document.body.style.overflow = "visible";

  return (
    <div>
      <ul className="homepage-layout">
        <li className="homepage-item-v1">
          <p>Starr</p>
          <h6 className="homepage-director"> Gabriel Crawford Connelly</h6>
          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/starr%2Bcolored_1.1.57-min.jpg" />
        </li>
        <li className="homepage-item-v2">
          <div className="homepage-item-v2-text">
            <p>Legos</p>
            <h6 className="homepage-director"> Dir. Henry DaCosta</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Legos+still+1-min.jpg" />
        </li>
        <li className="homepage-item-v1">
          <p>Neptune’s Dreams</p>
          <h6 className="homepage-director"> Dir. Alex Fischman Cárdenas</h6>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/neptune_1.1.2-min.jpg" />
        </li>
        <li className="homepage-item-v2">
          <div className="homepage-item-v2-text">
            <p>Underscores - Gunk</p>
            <h6 className="homepage-director-jack"> Dir. Ayodeji</h6>
          </div>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/File_001-min.jpeg" />
        </li>
        <li className="homepage-item-v1">
          <p>Montell Fish - WINGS</p>
          <h6 className="homepage-director"> Dir. Caleb Wild</h6>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/MASTER+(SOUND).00_02_01_23.Still076-min.png" />
        </li>
      </ul>
      <Link className="see-all" to="/work">
        <p className="see-all">See All Work</p>
      </Link>
    </div>
  );
}

export default HomeGrid;

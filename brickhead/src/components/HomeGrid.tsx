import "./HomeGrid.css";
function HomeGrid() {
  return (
    <div>
      <ul className="homepage-layout">
        <li className="homepage-item-v1">
          <p>Alexa Dark - Fade To Black And Blue</p>
          <h6 className="homepage-director"> Dir. Giles Perkins</h6>
          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/AlexaDarkSTILL.png" />
        </li>
        <li className="homepage-item-v2">
          <p>Chloe Lilac - 10 Things</p>
          <h6 className="homepage-director"> Dir. Ragan Henderson</h6>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/10ThingsStill.png" />
        </li>
        <li className="homepage-item-v1">
          <p>Saiko</p>
          <h6 className="homepage-director"> Dir. Adrian Sobrado</h6>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/SaikohSTILL.png" />
        </li>
        <li className="homepage-item-v2">
          <p>Cece Coakley - Listerine</p>
          <h6 className="homepage-director-jack"> Dir. Jack Simon</h6>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/ListerineSTILL.png" />
        </li>
        <li className="homepage-item-v1">
          <p>X2 Much Dope - Maison 2500</p>
          <h6 className="homepage-director"> Dir. Nick Freeman</h6>

          <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/Much+dope-min.png" />
        </li>
      </ul>
    </div>
  );
}

export default HomeGrid;

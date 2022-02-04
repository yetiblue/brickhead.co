import "./Collaborators.css";
function Collaborators(props: any) {
  document.body.style.overflow = "visible";
  return (
    <div className="about-wrapper">
      <div className="about__description">
        <p className="about__description__p">
          BrickHead is a NYC-based production company that specializes in
          short-form content. From documentaries to music videos to short films,
          we work with the best up-and-coming directors, producers,
          cinematographers, editors, and VFX artists to offer a full-service,
          one-stop shop for brands and artists.
        </p>

        <ul className="about__executives">
          <h3 className="about__executives__h3">Team</h3>

          <li className="about__executives__li">
            <p>Executive Producers:</p>
            <p>Bre Kelly</p>
            <p>Adrian Sobrado</p>
          </li>
          <li className="about__executives__li">
            <p>In-House Producer:</p>
            <p>Harrison Allen</p>
            <p>Nora Zubizarreta</p>
          </li>
          <li className="about__executives__li">
            <p>Business Operations:</p>
            <p>Dion White</p>
          </li>
          <li className="about__executives__li">
            <p>VFX:</p>
            <p>Joachim Pfefferkorn</p>
          </li>
          <h3 className="about__executives__h3">Contact</h3>
          <li>
            <p>bre@brickhead.co </p>
          </li>
        </ul>
      </div>
      <div className="collaborators-wrapper"></div>
      <hr></hr>

      <div className="accolades">
        <ul className="accolades-wrapper">
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/770-7701013_vimeo-staff-pick-logo-copy-vimeo-staff-pick.png"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/DL-LOGO.png"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/ERLogo-WithSizing.png"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/Logo-Rolling-Stone.png"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/MTV-Logo.png"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/Ones_to_Watch_logo.jpg"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/Screen-Shot-2020-01-16-at-11.32.53-AM-1579192439.png"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/boom-tv-logoshare.jpg"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/download-1.png"
            />
          </li>
          <li className="accolades-wrapper__li">
            <img
              className="accolades__wrapper__img"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/download-2.png"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Collaborators;

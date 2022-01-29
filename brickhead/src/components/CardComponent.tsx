import "./CardComponent.css";
import CardCategory from "./CardCategory";
import CardInformation from "./CardInformation";
function CardComponent(props: any) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card__text-wrapper">
          <div className="card__category">
            <CardCategory categoryName={props.cardCategory} />
          </div>
          <div className="card__information">
            <CardInformation
              companyName={props.cardCompany}
              videoTitle={props.cardTitle}
              directorName={props.cardDirector}
            />
          </div>
        </div>
        <div className="card__thumbnail">
          {" "}
          <iframe
            className="card"
            src="https://player.vimeo.com/video/664925900?h=ec1736e4af&title=0&byline=0&portrait=0"
            allow="fullscreen; picture-in-picture"
            // width="800"
            // height="420"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
}

export default CardComponent;

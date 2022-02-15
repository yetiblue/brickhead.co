import "./CardInformation.css";
function CardInformation(props: any) {
  return (
    <div className="information-wrapper">
      <div className="information">
        <h1 className="information__brand">{props.companyName}</h1>
        <h1 className="information__title">{props.videoTitle}</h1>
        <br></br>
        <p className="information__director">Dir. {props.directorName}</p>
      </div>
    </div>
  );
}

export default CardInformation;

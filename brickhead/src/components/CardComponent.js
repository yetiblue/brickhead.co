import "./CardComponent.css";
import CardCategory from "./CardCategory";
import VideoModal from "./VideoModal";
import { useState } from "react";
import CardInformation from "./CardInformation";
function CardComponent(props) {
  let renderModal;
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen, "modalopen");
  if (modalOpen) {
    document.body.style.overflow = "hidden";
    renderModal = (
      <VideoModal
        closeModal={[modalOpen, setModalOpen]}
        videoSource={props.cardSource}
        videoTitle={props.cardTitle}
        directorName={props.cardDirector}
      />
    );
  } else {
    document.body.style.overflow = "visible";
  }
  console.log(props.cardThumbnail, "card thumbnail");
  return (
    <div className="card-wrapper">
      {renderModal}
      <div className="card">
        <div className="card__text-wrapper">
          <div className="category-wrapper">
            <div className="card__category">
              <CardCategory categoryName={props.cardCategory} />
            </div>
          </div>
          <div
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            className="card__information"
          >
            <CardInformation
              companyName={props.cardCompany}
              videoTitle={props.cardTitle}
              directorName={props.cardDirector}
            />
          </div>
        </div>
        <div className="card__thumbnail">
          <img
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            className="card"
            src={props.cardThumbnail}
            alt="sdfsf"
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
}

export default CardComponent;

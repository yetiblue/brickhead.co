import "./PhotoGridComponent.css";
import PhotoModal from "./PhotoModal.js";
import { useState } from "react";
function PhotoGridComponent(props: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [photoID, setPhotoID] = useState(0);
  console.log(modalOpen, "modal open");
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  let loopedPhotos = props.projectPhotos.map((photoArray) => {
    return (
      <img
        className="photo-project-wrapper__scroll__image"
        src={photoArray.src}
        onClick={() => {
          setModalOpen(!modalOpen);
          setPhotoID(photoArray.id);
        }}
      ></img>
    );
  });
  let renderModal;
  if (!modalOpen) {
  } else {
    renderModal = (
      <PhotoModal
        closeModal={[modalOpen, setModalOpen]}
        modalPhotos={props.projectPhotos}
        targetID={photoID}
      />
    );
  }
  console.log(loopedPhotos, "looped");
  console.log(loopedPhotos, "looped photos");
  return (
    <div className="photo-wrapper-main">
      {renderModal}
      <div className="photo-project-wrapper">
        <div className="photo-project-wrapper__scroll">{loopedPhotos}</div>
        <div className="info-wrapper">
          <div className="info-wrapper__project-name">{props.projectName}</div>
          <div className="info-wrapper__shot-by">
            Shot By:{props.projectCreator}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhotoGridComponent;

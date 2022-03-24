import "./PhotoGridComponent.css";
function PhotoGridComponent(props: any) {
  let loopedPhotos = props.projectPhotos.map((photoArray) => {
    return (
      <img
        className="photo-project-wrapper__scroll__image"
        src={photoArray}
      ></img>
    );
  });
  console.log(loopedPhotos, "looped");
  console.log(loopedPhotos, "looped photos");
  return (
    <div className="photo-wrapper-main">
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

import "./PhotoGridComponent.css";
import React from "react";
class PhotoGridComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    interface PhotoArray {
      projectName: string;
      creator: string;
      photos: Array<string>;
    }
    let photoProjects: PhotoArray[] = [
      { projectName: "one", creator: "timmy", photos: ["one", "one"] },
    ];
    this.state = {
      projects: photoProjects,
    };
  }

  render() {
    return (
      <div className="photo-wrapper-main">
        <div className="photo-project-wrapper">
          <div className="photo-project-wrapper__scroll">
            <img
              className="photo-project-wrapper__scroll__image"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Tashi+-2-min.jpg"
            />
            <img
              className="photo-project-wrapper__scroll__image"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Tashi+-2-min.jpg"
            />
            <img
              className="photo-project-wrapper__scroll__image"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Tashi+-2-min.jpg"
            />
            <img
              className="photo-project-wrapper__scroll__image"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Tashi+-2-min.jpg"
            />
            <img
              className="photo-project-wrapper__scroll__image"
              src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Tashi+-2-min.jpg"
            />
          </div>
          <div className="info-wrapper">
            <div className="info-wrapper__project-name">Adidas Shoot</div>
            <div className="info-wrapper__shot-by">Shot By: Adrian Sobrado</div>
          </div>
        </div>
      </div>
    );
  }
}
export default PhotoGridComponent;

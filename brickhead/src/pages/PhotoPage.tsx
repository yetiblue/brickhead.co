import PhotoGridComponent from "../components/PhotoGridComponent";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
class PhotoPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    interface PhotoArray {
      projectName: string;
      creator: string;
      photos: Array<object>;
    }
    let photoProjects: PhotoArray[] = [
      {
        projectName: "Sephora x Complex",
        creator: "Ragan Henderson",
        photos: [
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/sephora2-min.png",
            id: 0,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/sephora5.png",
            id: 1,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/sephora32-min.png",
            id: 2,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/sephora1-min.png",
            id: 3,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/sephora4-min.png",
            id: 4,
          },
        ],
      },
      {
        projectName: "Remi Wolf  x Crocs",
        creator: "Ragan Henderson",
        photos: [
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_FUZZY-46-min.jpg",
            id: 0,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_FUZZY-64-min.jpg",
            id: 1,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_MARBLE-51-min.jpg",
            id: 2,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_MARBLE-6-min.jpg",
            id: 3,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_TIEDYE-18-min.jpg",
            id: 4,
          },
        ],
      },
      {
        projectName: "Chris Rock x Ego Death Tour",
        creator: "Ragan Henderson",
        photos: [
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/RH_ChrisRock_TourPoster_0244-min.jpg",
            id: 0,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_ChrisRock_TourPoster_0001-min.jpg",
            id: 1,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_ChrisRock_TourPoster_0135-min.jpg",
            id: 2,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_ChrisRock_TourPoster_0866-min.jpg",
            id: 3,
          },
          {
            src: "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_ChrisRock_TourPoster_0179-min.jpg",
            id: 4,
          },
        ],
      },
    ];
    this.state = {
      projects: photoProjects,
    };
  }

  render() {
    let mappedProjects = this.state.projects.map((project) => (
      <div>
        <li key={project.projectName}>
          <PhotoGridComponent
            projectName={project.projectName}
            projectCreator={project.creator}
            projectPhotos={project.photos}
          />
        </li>
      </div>
    ));
    let projectList = <ul>{mappedProjects}</ul>;

    return (
      <div>
        <HeaderComponent />
        <h2 className="collaborators-title">PHOTOS</h2>

        {projectList}
      </div>
    );
  }
}
export default PhotoPage;

import PhotoGridComponent from "../components/PhotoGridComponent";
import React from "react";
class PhotoPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    interface PhotoArray {
      projectName: string;
      creator: string;
      photos: Array<string>;
    }
    let photoProjects: PhotoArray[] = [
      {
        projectName: "Chris Rock",
        creator: "timmy",
        photos: [
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/29910001-min.jpg",
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_ChrisRock_TourPoster_0001-min.jpg",
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_ChrisRock_TourPoster_0135-min.jpg",
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_ChrisRock_TourPoster_0866-min.jpg",
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_ChrisRock_TourPoster_0179-min.jpg",
        ],
      },
      {
        projectName: "Remy Wolf Crocs",
        creator: "idk",
        photos: [
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_FUZZY-46-min.jpg",
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_FUZZY-64-min.jpg",
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_MARBLE-51-min.jpg",
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_MARBLE-6-min.jpg",
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/Photo+Projects/RH_REMIWOLF_CROCS_TIEDYE-18-min.jpg",
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

    return <div>{projectList}</div>;
  }
}
export default PhotoPage;

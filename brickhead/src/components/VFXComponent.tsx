import PhotoGridComponent from "../components/PhotoGridComponent";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import CardComponent from "../components/CardComponent";
class VFXComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    interface vfxArray {
      projectName: string;
      creator: string;
      thumbnail: string;
      id: number;
      video: string;
    }
    let vfxProjects: vfxArray[] = [
      {
        projectName: "AT&T - Morning Commute",
        creator: "Ragan Henderson",
        thumbnail:
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/VFX+VIdeos/AT%26T+Morning+Commute-min.png",
        id: 0,
        video:
          "http://dzkagq791g2eh.cloudfront.net/VFX+VIdeos/at%26t__morning_commute+(720p).mp4",
      },
      {
        projectName: "IKEA - Trust Your Seller",
        creator: "Ragan Henderson",
        thumbnail:
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/VFX+VIdeos/IKEA+Trust+Your+Seller-min.png",
        id: 1,
        video:
          "http://dzkagq791g2eh.cloudfront.net/VFX+VIdeos/ikea___'trust_your_seller'.mp4+(1440p).mp4",
      },
      {
        projectName: "Oathaus",
        creator: "Ragan Henderson",
        thumbnail:
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/VFX+VIdeos/Screen+Shot+2022-03-28+at+8.37.58+PM.png",
        id: 2,
        video:
          "http://dzkagq791g2eh.cloudfront.net/VFX+VIdeos/oathaus+(1080p).mp4",
      },
      {
        projectName: "Syd - Fast Car",
        creator: "Ragan Henderson",
        thumbnail:
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/VFX+VIdeos/Screen+Shot+2022-03-27+at+12.01.57+PM-min.png",
        id: 3,
        video:
          "http://dzkagq791g2eh.cloudfront.net/VFX+VIdeos/syd__fastcar+(1080p).mp4",
      },
      {
        projectName: "Under Armor - Genesis Curry Flow",
        creator: "Ragan Henderson",
        thumbnail:
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/VFX+VIdeos/Under+Armour+-+Genesis+Curry+Flow-min.png",
        id: 4,
        video:
          "http://dzkagq791g2eh.cloudfront.net/VFX+VIdeos/under-armour-genesis-curry-download-1080p.mp4",
      },
      {
        projectName: "Whisper",
        creator: "Ragan Henderson",
        thumbnail:
          "https://timmyportfolio.s3.us-east-2.amazonaws.com/VFX+VIdeos/Whisper-min.png",
        id: 5,
        video:
          "http://dzkagq791g2eh.cloudfront.net/VFX+VIdeos/whisper+(1080p).mp4",
      },
    ];
    this.state = {
      vfxProjects: vfxProjects,
    };
  }

  render() {
    let cardContent = this.state.vfxProjects.map((card) => (
      <div className="justify">
        <li key={card.title} className="card-object">
          <CardComponent
            cardCategory={card.category}
            cardTitle={card.projectName}
            // cardDirector={card.creator}
            cardSource={card.video}
            cardThumbnail={card.thumbnail}
          />
        </li>
      </div>
    ));
    let gridContent = <ul className="card-wrapper">{cardContent}</ul>;

    return (
      <div>
        <div className="description-justify">
          <p className="about__description__p">
            All VFX work by Light Range, Brickhead’s in-house VFX team
            <br></br>
          </p>
        </div>
        <div className="justify-cardgrid">
          <div className="cardgrid-wrapper">
            {gridContent}
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default VFXComponent;

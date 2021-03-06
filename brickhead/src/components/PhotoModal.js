import "./PhotoModal.css";
// import { withRouter } from "react-router";

import React from "react";

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.keyNav = this.keyNav.bind(this);
  }
  componentDidMount() {
    this.setState({ currentCount: this.props.targetID }); //targetID is the ID of the image clicked in the gallery
    document.addEventListener("keydown", this.keyNav, false);
    // window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyNav, "false");
  }
  keyNav(event) {
    if (event.keyCode === 37) {
      this.previous();
    } else {
      this.next();
    }
  }

  previous() {
    console.log("called previous", this.state.currentCount);
    if (this.state.currentCount > 0) {
      this.setState((prevState) => ({
        currentCount: prevState.currentCount - 1,
      }));
    } else {
      this.setState({ currentCount: this.props.modalPhotos.length - 1 });
    }
  }
  next() {
    console.log("called next", this.state.currentCount);
    if (this.state.currentCount < this.props.modalPhotos.length - 1) {
      this.setState((prevState) => ({
        currentCount: prevState.currentCount + 1,
      }));
    } else {
      this.setState({ currentCount: 0 });
    }
  }
  closeModal() {
    let [data, setData] = this.props.closeModal;
    setData(!data);
  }
  onKeyPressed(e) {
    console.log(e.keyCode);
  }

  render() {
    let navArrow = ">";
    let photoList = this.props.modalPhotos;
    let photoOrVideo;

    photoOrVideo = (
      <div className="modal-photo">
        <img
          className="lightboxImage"
          src={photoList[this.state.currentCount].src}
        />
      </div>
    );

    return (
      <div className="photo-project-modal">
        <div onClick={this.closeModal} className="modal-exit">
          X
        </div>
        <div className="photo-project-modal__content">
          <button onClick={this.previous}>
            <p className="prev-button">{navArrow}</p>
          </button>
          {photoOrVideo}
          <button onClick={this.next}>
            <p className="next-button">{navArrow}</p>
          </button>
        </div>
        <div onClick={this.closeModal} className="exit-click-region"></div>
      </div>
    );
  }
}
export default PhotoModal;

import "./VideoModal.css";
import React from "react";
class VideoModal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    let [data, setData] = this.props.closeModal;
    setData(!data);
  }
  render() {
    return (
      <div className="modal-wrapper">
        <div>
          <div className="modal-top">
            <button
              type="button"
              className="modal-wrapper-back"
              onClick={this.closeModal}
            >
              ←
            </button>
            <h2 className="modal-title">{this.props.videoTitle}</h2>
          </div>
          <div className="modal-video">
            <iframe
              //   className="card"
              className="modal-video"
              src={this.props.videoSource}
              title=" "
              allow="fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
        {/* <div className="modal-stills">
          <h3>STILLS</h3>
        </div>
        <div className="modal-credits">
          <h3>CREDITS</h3>
        </div> */}
      </div>
    );
  }
}
export default VideoModal;

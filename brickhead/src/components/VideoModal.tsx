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
        <button
          type="button"
          className="modal-wrapper-back"
          onClick={this.closeModal}
        >
          ←
        </button>
        <div className="modal-video">
          <iframe
            //   className="card"

            src={this.props.videoSource}
            title=" "
            allow="fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    );
  }
}
export default VideoModal;

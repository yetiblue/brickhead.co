import "./MainVideo.css";

function MainVideo() {
  return (
    <div>
      <video className="reel-main" autoPlay muted loop>
        <source
          src="http://dzkagq791g2eh.cloudfront.net/Brickhead-stills/3174466491.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
export default MainVideo;

import "./Production.css";

function Production() {
  return (
    <div id="production-wrapper">
      <div id="production-content-wrapper">
        <div id="production-pipeline-content">
          <h2>
            Describe your idea, and our AI generates a 3D model. We craft it
            with precision and deliver it to your doorstep
          </h2>
        </div>
        <div id="production-pipeline-wrapper"></div>
      </div>
      <div id="production-video-wrapper">
        <h2>See the team in action</h2>
        <video id="production-video" controls>
          <source src="/video/promotion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Production;

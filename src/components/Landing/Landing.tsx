import "./Landing.css";

function Landing() {
  const scrollToNext = () => {
    const showcaseElement = document.getElementById("showcase-wrapper");
    showcaseElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="landing-wrapper">
      <div id="landing-content-wrapper">
        <div id="landing-content">
          <div id="landing-content-description">
            <h2>The toy that you shape</h2>
            <h2>as you want</h2>
          </div>
          <div id="landing-content-cta" onClick={scrollToNext}>
            See what our AI-powered process can create
          </div>
        </div>
      </div>
      <div id="landing-showcase-wrapper">
        <video id="landing-showcase-video" autoPlay muted playsInline>
          <source src="/video/duck-entry_animation.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Landing;

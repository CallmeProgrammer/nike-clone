/*
import "./Hero.css";

function Hero({ showVideo, setShowVideo }) {

  return (
    <>
      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>

      </section>

      {showVideo && (

        <div className="video-modal">

          <button
            className="video-close"
            onClick={() => setShowVideo(false)}
          >
            ✕
          </button>

          <video
            className="fullscreen-video"
            controls
            autoPlay
          >
            <source
              src="/videos/hero.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      )}

    </>
  );
}

export default Hero;
*/
/*
import "./Hero.css";

function Hero({
  videoSrc = "/videos/hero.mp4",

  showVideo = false,
  setShowVideo = () => {},

  showOverlay = false,

  subtitle = "",
  title = "",
  description = "",
  buttonText = ""
}) {

  return (
    <>
      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
        </video>

        {showOverlay && (

          <div className="hero-overlay">

            {subtitle && (
              <p className="hero-subtitle">
                {subtitle}
              </p>
            )}

            {title && (
              <h1 className="hero-title">
                {title}
              </h1>
            )}

            {description && (
              <p className="hero-description">
                {description}
              </p>
            )}

            {buttonText && (
              <button className="hero-button">
                {buttonText}
              </button>
            )}

          </div>

        )}

      </section>

      {showVideo && (

        <div className="video-modal">

          <button
            className="video-close"
            onClick={() => setShowVideo(false)}
          >
            ✕
          </button>

          <video
            className="fullscreen-video"
            controls
            autoPlay
          >
            <source
              src={videoSrc}
              type="video/mp4"
            />
          </video>

        </div>

      )}

    </>
  );
}

export default Hero;
*/
import "./Hero.css";

function Hero({

  /* VIDEO HERO */

  /*videoSrc = "/videos/hero.mp4"*/ videoSrc = "https://wcmpgyhrucsnpacoonre.supabase.co/storage/v1/object/public/videos/hero.mp4",

  /* IMAGE HERO */

  imageSrc = "",

  isImageHero = false,

  /* VIDEO MODAL */

  showVideo = false,

  setShowVideo = () => {},

  /* OVERLAY */

  showOverlay = false,

  subtitle = "",

  title = "",

  description = "",

  buttonText = ""

}) {

  return (
    <>
      <section className="hero">

        {isImageHero ? (

          <img
            src={imageSrc}
            alt={title}
            className="hero-banner"
          />

        ) : (

          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={videoSrc}
              type="video/mp4"
            />
          </video>

        )}

        {showOverlay && (

          <div className="hero-overlay">

            {subtitle && (

              <p className="hero-subtitle">

                {subtitle}

              </p>

            )}

            {title && (

              <h1 className="hero-title">

                {title}

              </h1>

            )}

            {description && (

              <p className="hero-description">

                {description}

              </p>

            )}

            {buttonText && (

              <button className="hero-button">

                {buttonText}

              </button>

            )}

          </div>

        )}

      </section>

      {!isImageHero && showVideo && (

        <div className="video-modal">

          <button
            className="video-close"
            onClick={() => setShowVideo(false)}
          >
            ✕
          </button>

          <video
            className="fullscreen-video"
            controls
            autoPlay
          >
            <source
              src={videoSrc}
              type="video/mp4"
            />
          </video>

        </div>

      )}

    </>
  );
}

export default Hero;
/*
import "./CampaignSection.css";

function CampaignSection({ setShowVideo }) {
  const goToProducts = () => {
    window.location.href = "/products";
  };

  return (
    <section className="campaign-section">
      <h1>RIP THE SCRIPT</h1>

      <p>Instinct over everything</p>

      <div className="campaign-buttons">
        <button onClick={goToProducts}>
          Shop
        </button>

        <button onClick={() => setShowVideo(true)}>
          Watch ▶
        </button>
      </div>
    </section>
  );
}

export default CampaignSection;
*/
import "./CampaignSection.css";

function CampaignSection({

  heading = "RIP THE SCRIPT",

  description = "Instinct over everything",

  primaryButtonText = "Shop",

  secondaryButtonText = "Watch ▶",

  onPrimaryClick,

  onSecondaryClick,

  setShowVideo

}) {

  const goToProducts = () => {
    window.location.href = "/shop";
  };

  return (

    <section className="campaign-section">

      <h1>{heading}</h1>

      <p>{description}</p>

      <div className="campaign-buttons">

        <button
          onClick={onPrimaryClick || goToProducts}
        >
          {primaryButtonText}
        </button>

        <button
          onClick={
            onSecondaryClick ||
            (() => setShowVideo?.(true))
          }
        >
          {secondaryButtonText}
        </button>

      </div>

    </section>

  );
}

export default CampaignSection;
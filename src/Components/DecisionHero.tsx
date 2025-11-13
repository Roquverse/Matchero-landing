import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import "../assets/Styles/decision-hero.css";

interface DecisionHeroProps {
  backgroundClass?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  secondaryButtonText?: string;
  privacyText?: string;
  privacyLink?: string;
  videoText?: string;
  hideInput?: boolean;
  hideVideoLink?: boolean;
  onButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  onVideoClick?: () => void;
  className?: string;
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
}

const DecisionHero = ({
  backgroundClass = "",
  title = `Faster, fairer decisions with <span class="decision-hero-accent">data</span> and <span class="decision-hero-accent">AI</span>.`,
  description = "Centralise feedback, scores, and insights so every hiring decision is backed by evidence—not guesswork.",
  image = "/decision-hero.png",
  imageAlt = "Decision making hero image",
  emailPlaceholder = "Enter your email address",
  buttonText = "Request demo",
  secondaryButtonText,
  privacyText = `By clicking "request demo", you agree to the use of your data in accordance with Matchero's`,
  privacyLink = "/privacy-policy",
  videoText = "Watch 1 min video",
  hideInput = false,
  hideVideoLink = false,
  onButtonClick,
  onSecondaryButtonClick,
  onVideoClick,
  className = "",
  breadcrumb = {
    items: [{ text: "Home", link: "/" }, { text: "Decision making" }],
  },
}: DecisionHeroProps) => {
  return (
    <section
      className={`decision-hero-section ${backgroundClass} ${className}`.trim()}
    >
      <div className="decision-hero-overlay" />
      <div className="decision-hero-container">
        {breadcrumb && (
          <nav className="decision-hero-breadcrumb" aria-label="Breadcrumb">
            {breadcrumb.items.map((item, index) => (
              <div key={index} className="decision-hero-breadcrumb-item">
                {item.link ? (
                  <Link to={item.link}>{item.text}</Link>
                ) : (
                  <span>{item.text}</span>
                )}
                {index < breadcrumb.items.length - 1 && (
                  <span className="decision-hero-breadcrumb-separator">/</span>
                )}
              </div>
            ))}
          </nav>
        )}

        <div className="decision-hero-grid">
          <div className="decision-hero-left">
            <h1
              className="decision-hero-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {description && (
              <p
                className="decision-hero-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            <div className="decision-hero-cta">
              {!hideInput && (
                <Input
                  type="email"
                  size="lg"
                  placeholder={emailPlaceholder}
                  className="decision-hero-input"
                />
              )}
              <Button
                variant="filled"
                color="green"
                size="lg"
                onClick={onButtonClick}
                className="decision-hero-button"
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                }
              >
                {buttonText}
              </Button>
              {secondaryButtonText && (
                <Button
                  variant="outlined"
                  color="white"
                  size="lg"
                  onClick={onSecondaryButtonClick}
                  className="decision-hero-secondary-button"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>

            {privacyText && (
              <p className="decision-hero-privacy">
                {!hideInput ? (
                  <>
                    {privacyText}{" "}
                    <Link
                      to={privacyLink}
                      className="decision-hero-privacy-link"
                    >
                      Privacy Notice
                    </Link>
                    , including for marketing purposes.
                  </>
                ) : (
                  privacyText
                )}
              </p>
            )}

            {!hideVideoLink && (
              <button
                className="decision-hero-video"
                type="button"
                onClick={onVideoClick}
              >
                <span>{videoText}</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>

          <div className="decision-hero-right">
            <div className="decision-hero-visual">
              <img src={image} alt={imageAlt} className="decision-hero-image" />
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="decision-hero-wave"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default DecisionHero;

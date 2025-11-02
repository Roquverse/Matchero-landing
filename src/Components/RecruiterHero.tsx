import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import "../assets/Styles/recruiter-hero.css";

interface RecruiterHeroProps {
  backgroundColor?: string;
  title: string;
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

const RecruiterHero = ({
  backgroundColor = "bg-green-20",
  title,
  description,
  image = "/decision-making-hero.png",
  imageAlt = "Recruiter hero image",
  emailPlaceholder = "Enter your email address",
  buttonText = "Request demo",
  secondaryButtonText,
  privacyText = `By clicking "request demo", you agree to the use of your data in accordance with Matchero's`,
  privacyLink = "#",
  videoText = "Watch 1 min video",
  hideInput = false,
  hideVideoLink = false,
  onButtonClick,
  onSecondaryButtonClick,
  onVideoClick,
  className = "",
  breadcrumb,
}: RecruiterHeroProps) => {
  const location = useLocation();

  return (
    <section
      className={`recruiter-hero-section ${backgroundColor} ${className}`}
    >
      <div className="recruiter-hero-container">
        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="recruiter-hero-breadcrumb">
            {breadcrumb.items.map((item, index) => (
              <div key={index} className="flex items-center">
                {index === 0 && (
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                )}
                {item.link ? (
                  <Link
                    to={item.link}
                    className={`breadcrumb-link ${
                      location.pathname === item.link ? "active" : ""
                    } ${
                      index === breadcrumb.items.length - 1
                        ? "breadcrumb-current"
                        : "breadcrumb-home"
                    }`}
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span
                    className={
                      index === breadcrumb.items.length - 1
                        ? "breadcrumb-current"
                        : "breadcrumb-home"
                    }
                  >
                    {item.text}
                  </span>
                )}
                {index < breadcrumb.items.length - 1 && (
                  <span className="breadcrumb-separator">/</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Content Grid */}
        <div className="recruiter-hero-content">
          {/* Left Content */}
          <div className="recruiter-hero-left">
            <h1
              className="recruiter-hero-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {description && (
              <p
                className="recruiter-hero-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {/* Email Input Group */}
            <div className="recruiter-hero-cta">
              {!hideInput && (
                <Input
                  type="email"
                  placeholder={emailPlaceholder}
                  size="lg"
                  className="recruiter-hero-input"
                />
              )}
              <Button
                variant="filled"
                color="green"
                size="lg"
                onClick={onButtonClick}
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
                className="recruiter-hero-button"
              >
                {buttonText}
              </Button>
              {secondaryButtonText && (
                <Button
                  variant="outlined"
                  color="white"
                  size="lg"
                  onClick={onSecondaryButtonClick}
                  className="recruiter-hero-secondary-button"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>

            {/* Privacy Notice */}
            {privacyText && (
              <p className="recruiter-hero-privacy">
                {!hideInput ? (
                  <>
                    {privacyText}{" "}
                    <a
                      href={privacyLink}
                      className="recruiter-hero-privacy-link"
                    >
                      Privacy Notice
                    </a>
                    , including for marketing purposes.
                  </>
                ) : (
                  privacyText
                )}
              </p>
            )}

            {/* Video Link */}
            {!hideVideoLink && (
              <div className="recruiter-hero-video" onClick={onVideoClick}>
                <span>{videoText}</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="recruiter-hero-right">
            <div className="recruiter-hero-image-wrapper">
              <img
                src={image}
                alt={imageAlt}
                className="recruiter-hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterHero;

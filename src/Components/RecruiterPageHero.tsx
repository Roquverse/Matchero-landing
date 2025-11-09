import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import "../assets/Styles/recruiter-page-hero.css";

interface RecruiterPageHeroProps {
  backgroundColor?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  collageImages?: Array<{
    src: string;
    alt: string;
    accentColor?: string;
  }>;
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

const RecruiterPageHero = ({
  backgroundColor = "#ffffff",
  title,
  description,
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
}: RecruiterPageHeroProps) => {
  const location = useLocation();

  return (
    <div className="recruiter-page-hero-page">
      <section
        className={`recruiter-page-hero-section ${backgroundColor} ${className}`}
      >
        <div className="recruiter-page-hero-container">
          {/* Breadcrumb */}
          {breadcrumb && (
            <div className="recruiter-page-hero-breadcrumb">
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
          <div className="recruiter-page-hero-content">
            <div className="recruiter-page-hero-text">
              <h1
                className="recruiter-page-hero-title"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              {description && (
                <p
                  className="recruiter-page-hero-description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}

              <div className="recruiter-page-hero-actions">
                {!hideInput && (
                  <div className="recruiter-page-hero-input-group">
                    <Input
                      type="email"
                      placeholder={emailPlaceholder}
                      size="lg"
                      className="recruiter-page-hero-input"
                    />
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
                      className="recruiter-page-hero-button"
                    >
                      {buttonText}
                    </Button>
                  </div>
                )}

                <div className="recruiter-page-hero-button-group">
                  {hideInput && (
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
                      className="recruiter-page-hero-button"
                    >
                      {buttonText}
                    </Button>
                  )}
                  {secondaryButtonText && (
                    <Button
                      variant="outlined"
                      color="white"
                      size="lg"
                      onClick={onSecondaryButtonClick}
                      className="recruiter-page-hero-secondary-button"
                    >
                      {secondaryButtonText}
                    </Button>
                  )}
                </div>
              </div>

              {/* Privacy Notice */}
              {privacyText && (
                <p className="recruiter-page-hero-privacy">
                  {!hideInput ? (
                    <>
                      {privacyText}{" "}
                      <a
                        href={privacyLink}
                        className="recruiter-page-hero-privacy-link"
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
                <div
                  className="recruiter-page-hero-video"
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
                </div>
              )}
            </div>

            <div className="recruiter-page-hero-visual">
              <img
                src="/Sourcing_people@2x.png"
                alt="Recruiter hero image"
                className="recruiter-page-hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-sourcing-page-hero"
      >
        <path
          fill="#d7f6a4"
          fillOpacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default RecruiterPageHero;

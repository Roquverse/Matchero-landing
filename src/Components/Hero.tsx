import Button from "./Button";
import Input from "./Input";
import "../assets/Styles/hero.css";

interface HeroProps {
  backgroundColor?: string;
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
}

const Hero = ({
  backgroundColor = "bg-green-20",
  title = `<b><em>Smarter</em></b> Hiring, <b>human touch</b>, real results`,
  description = "Matchero helps businesses hire faster and fairer with an all-in-one ATS, AI video interviews, and seamless onboarding.",
  image = "/hero-home.png",
  imageAlt = "Home hero image",
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
}: HeroProps) => {
  return (
    <div className="hero-page">
      <section className={`hero-section ${backgroundColor} ${className}`}>
        <div className="hero-container">
          {/* Content Grid */}
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-left">
              <h1
                className="hero-title"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              {description && (
                <p
                  className="hero-description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}

              {/* Email Input Group */}
              <div className="hero-cta">
                {!hideInput && (
                  <Input
                    type="email"
                    placeholder={emailPlaceholder}
                    size="lg"
                    className="hero-input"
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
                  className="hero-button"
                >
                  {buttonText ?? "Request demo"}
                </Button>
                {secondaryButtonText && (
                  <Button
                    variant="outlined"
                    color="white"
                    size="lg"
                    onClick={onSecondaryButtonClick}
                    className="hero-secondary-button"
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </div>

              {/* Privacy Notice */}
              {privacyText && (
                <p className="hero-privacy">
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
                <div className="hero-video" onClick={onVideoClick}>
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
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <img src={image} alt={imageAlt} className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="hero-home-vector"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;

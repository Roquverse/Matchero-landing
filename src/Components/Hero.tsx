import Button from "./Button";
import Input from "./Input";
import "../assets/Styles/hero.css";

interface HeroProps {
  backgroundColor?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  privacyText?: string;
  privacyLink?: string;
  videoText?: string;
  onButtonClick?: () => void;
  onVideoClick?: () => void;
  className?: string;
}

const Hero = ({
  backgroundColor = "bg-green-20",
  title,
  description,
  image = "/hero-home.png",
  imageAlt = "Happy professional woman",
  emailPlaceholder = "Enter your email address",
  buttonText = "Request demo",
  privacyText = 'By clicking "request demo", you agree to the use of your data in accordance with Matchero\'s',
  privacyLink = "#",
  videoText = "Watch 1 min video",
  onButtonClick,
  onVideoClick,
  className = "",
}: HeroProps) => {
  return (
    <section className={`${backgroundColor} hero-section ${className}`}>
      {/* Left Content Block */}
      <div className="hero-content">
        <div className="hero-frame">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />

          {description && (
            <p
              className="hero-description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {/* Email Input Group */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder={emailPlaceholder}
              size="lg"
              className="flex-1 min-w-80 rounded-xl"
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
              className="px-8 py-4 whitespace-nowrap"
            >
              {buttonText}
            </Button>
          </div>

          {/* Privacy Notice */}
          <p className="privacy-notice">
            {privacyText}{" "}
            <a
              href={privacyLink}
              className="text-green-700 underline hover:text-deep-tek-100"
            >
              Privacy Notice
            </a>
            , including for marketing purposes.
          </p>

          {/* Video Link */}
          <div
            className="flex items-center text-gray-700 hover:text-deep-tek-100 cursor-pointer"
            onClick={onVideoClick}
          >
            <span className="hero-video">{videoText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 3L19 12L5 21V3Z"
                stroke="#020617"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Image Collage */}
      <div className="hero-image-container">
        {/* Main Image */}
        <div className="hero-image">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

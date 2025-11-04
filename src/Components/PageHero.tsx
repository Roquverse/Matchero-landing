import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
// import "../assets/Styles/hero.css";
import "../assets/Styles/page-hero.css";

interface PageHeroProps {
  backgroundColor?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
}

const PageHero = ({
  backgroundColor = "bg-cyan-20",
  title,
  description,
  image = "/jobseeker.png",
  imageAlt = "Hero image",
  buttonText = "Get started",
  onButtonClick,
  className = "",
  breadcrumb,
}: PageHeroProps) => {
  const location = useLocation();
  return (
    <div className="page-hero-container">
      <section className={`${backgroundColor} hero-section ${className}`}>
        {/* Left Content Block */}
        <div className="hero-content">
          <div className="hero-frame">
            {/* Breadcrumb */}
            {breadcrumb && (
              <div
                className="page-hero-breadcrumb"
                style={{ marginBottom: "24px" }}
              >
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

            <h1 dangerouslySetInnerHTML={{ __html: title }} />

            {description && (
              <p
                className="hero-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {/* Button */}
            <div>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="vector-page-hero"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default PageHero;

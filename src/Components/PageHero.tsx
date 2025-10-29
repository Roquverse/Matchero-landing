import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
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
  showSearchBar?: boolean;
  searchPlaceholder?: string;
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
  showSearchBar = false,
  searchPlaceholder = "Search...",
}: PageHeroProps) => {
  const location = useLocation();
  return (
    <section className={`${backgroundColor} page-hero-section ${className}`}>
      {/* Left Content Block */}
      <div className="page-hero-content">
        <div className="page-hero-frame">
          {/* Breadcrumb */}
          {breadcrumb && (
            <div className="page-hero-breadcrumb">
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
              className="page-hero-description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {/* Search Bar */}
          {showSearchBar && (
            <div className="mt-6 w-full max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <Input
                  type="text"
                  placeholder={searchPlaceholder}
                  size="lg"
                  className="pl-10 w-full"
                />
              </div>
            </div>
          )}

          {/* Button */}
          <div className="mt-6">
            <Button
              variant="filled"
              color="green"
              size="lg"
              onClick={onButtonClick}
              className="px-8 py-4"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Right Image Collage */}
      <div className="page-hero-image-container">
        {/* Petals */}
        <div className="bg-image">
          <img
            src="/Blue petals.svg"
            alt="Happy professional woman"
            className="petal-image"
          />
        </div>
        {/* Main Image */}
        <div className="page-hero-image">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default PageHero;

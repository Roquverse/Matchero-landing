import { Link, useLocation } from "react-router-dom";
// import "../assets/Styles/hero.css";
import "../assets/Styles/blog-hero.css";

interface BlogHeroProps {
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
}

const BlogHero = ({ breadcrumb }: BlogHeroProps) => {
  const location = useLocation();

  return (
    <div className="blog-hero-container">
      <div className="blog-hero-content">
        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="blog-hero-breadcrumb">
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
        <div className="blog-hero-content-title-container">
          <h1 className="blog-hero-content-title">Blog</h1>
          <p className="blog-hero-content-description">
            Stay informed and inspired with Matchero's blog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;

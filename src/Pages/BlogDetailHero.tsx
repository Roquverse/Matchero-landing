import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BlogDetailHeroProps {
  title: string;
}

const truncateWords = (text: string, limit: number) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) {
    return text;
  }

  return `${words.slice(0, limit).join(" ")}...`;
};

const BlogDetailHero = ({ title }: BlogDetailHeroProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayTitle = isMobile ? truncateWords(title, 3) : title;

  return (
    <div className="blog-detail-hero-container">
      <section className="blog-detail-hero">
        <div className="blog-detail-hero-content">
          {/* Breadcrumb */}
          <div className="blog-detail-breadcrumb">
            <Link to="/" className="breadcrumb-link">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/blog" className="breadcrumb-link">
              Blog
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{displayTitle}</span>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-blog-detail-hero"
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

export default BlogDetailHero;

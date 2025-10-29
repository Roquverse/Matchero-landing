import { Link } from "react-router-dom";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  linkHref?: string;
  linkText?: string;
  className?: string;
}

const BlogCard = ({
  title,
  excerpt,
  image,
  imageAlt,
  linkHref = "#",
  linkText = "Read article",
  className = "",
}: BlogCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden feature-card-container ${className}`}
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden feature-card-image">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 feature-card-content">
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 feature-card-excerpt">
          {excerpt}
        </p>

        {/* Read Article Link */}
        <Link
          to={linkHref}
          className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-2 transition-colors"
        >
          <span>{linkText}</span>
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
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

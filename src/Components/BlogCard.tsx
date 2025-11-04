import { Link } from "react-router-dom";
import "../assets/Styles/blog-card.css";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category?: string;
  date?: string;
  linkHref?: string;
  linkText?: string;
  className?: string;
}

const BlogCard = ({
  title,
  excerpt,
  image,
  imageAlt,
  category,
  date = "12.10.2025",
  linkHref = "#",
  linkText = "Read the article",
  className = "",
}: BlogCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm overflow-hidden blog-card ${className}`}
    >
      {/* Image with Category Tag */}
      <div className="relative w-full h-48 overflow-hidden blog-card-image">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {category && (
          <div className="absolute top-3 left-3 blog-card-category-tag">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 blog-card-content">
        {/* Date */}
        <div className="text-sm text-gray-500 mb-2 blog-card-date">{date}</div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight blog-card-title">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed blog-card-excerpt">
          {excerpt}
        </p>

        {/* Read Article Link */}
        <Link
          to={linkHref}
          className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center space-x-1 transition-colors blog-card-link"
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

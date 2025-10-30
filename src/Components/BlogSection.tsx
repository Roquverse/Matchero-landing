import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import type { BlogCardProps } from "./BlogCard";
import Button from "./Button";

interface BlogSectionProps {
  title?: string;
  cards: BlogCardProps[];
  viewAllText?: string;
  viewAllHref?: string;
  onViewAllClick?: () => void;
  className?: string;
  maxCards?: number;
}

const BlogSection = ({
  title = "Matchero insights and latest advice:",
  cards,
  viewAllText = "View full blog",
  onViewAllClick,
  className = "",
  maxCards,
}: BlogSectionProps) => {
  // Limit cards if maxCards is specified
  const displayCards = maxCards ? cards.slice(0, maxCards) : cards;
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="w-full px-4 md:px-16">
        {/* Section Title */}
        <h2 className="sub-title2">{title}</h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayCards.map((card, index) => (
            <BlogCard
              key={index}
              title={card.title}
              excerpt={card.excerpt}
              image={card.image}
              imageAlt={card.imageAlt}
              linkHref={card.linkHref}
              linkText={card.linkText}
            />
          ))}
        </div>

        {/* View Full Blog Button */}
        <div className="flex justify-start">
          {viewAllText === "View all open roles" ? (
            <Link to="/application">
              <Button
                variant="outlined"
                color="gray"
                size="md"
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
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {viewAllText}
              </Button>
            </Link>
          ) : (
            <Button
              variant="outlined"
              color="gray"
              size="md"
              onClick={onViewAllClick}
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
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {viewAllText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

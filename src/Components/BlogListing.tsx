import { useState } from "react";
import BlogCard from "./BlogCard";
import type { BlogCardProps } from "./BlogCard";
import Button from "./Button";
import "../assets/Styles/blog-listing.css";

interface BlogListingProps {
  className?: string;
}

const BlogListing = ({ className = "" }: BlogListingProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayCount, setDisplayCount] = useState(9);

  const blogCards: BlogCardProps[] = [
    {
      title: "5 Ways AI Is Transforming Recruitment in Africa",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img1.png",
      imageAlt: "Professional man with glasses smiling",
      linkHref: "/blog/ai-recruitment-africa",
      linkText: "Read article",
    },
    {
      title: "Why Startups Need Smarter Hiring Tools to Scale Fast",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img2.png",
      imageAlt: "Young professional with laptop in modern office",
      linkHref: "/blog/startup-hiring-tools",
      linkText: "Read article",
    },
    {
      title: "Why Job Seekers Should Care About AI Interviews",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img3.png",
      imageAlt: "Professional man in video call interview",
      linkHref: "/blog/ai-interviews-job-seekers",
      linkText: "Read article",
    },
    {
      title: "The Future of Remote Work in African Tech",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img1.png",
      imageAlt: "Remote work setup",
      linkHref: "/blog/remote-work-africa",
      linkText: "Read article",
    },
    {
      title: "Building Diverse Teams: Best Practices for 2024",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img2.png",
      imageAlt: "Diverse team collaboration",
      linkHref: "/blog/diverse-teams-2024",
      linkText: "Read article",
    },
    {
      title: "How to Ace Your Next Video Interview",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img3.png",
      imageAlt: "Video interview preparation",
      linkHref: "/blog/video-interview-tips",
      linkText: "Read article",
    },
    {
      title: "Top Skills in Demand Across African Tech Companies",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img1.png",
      imageAlt: "Tech skills visualization",
      linkHref: "/blog/tech-skills-africa",
      linkText: "Read article",
    },
    {
      title: "Startup Funding Trends and Their Impact on Hiring",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img2.png",
      imageAlt: "Funding trends chart",
      linkHref: "/blog/funding-hiring-trends",
      linkText: "Read article",
    },
    {
      title: "Candidate Experience: What Makes a Great Interview Process",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img3.png",
      imageAlt: "Interview process flow",
      linkHref: "/blog/candidate-experience",
      linkText: "Read article",
    },
    {
      title: "Leveraging Social Media for Modern Recruitment",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img1.png",
      imageAlt: "Social media recruitment",
      linkHref: "/blog/social-media-recruitment",
      linkText: "Read article",
    },
    {
      title: "The Role of Data Analytics in HR Decision Making",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img2.png",
      imageAlt: "HR analytics dashboard",
      linkHref: "/blog/hr-analytics",
      linkText: "Read article",
    },
    {
      title: "Creating an Inclusive Workplace Culture",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img3.png",
      imageAlt: "Inclusive workplace",
      linkHref: "/blog/inclusive-culture",
      linkText: "Read article",
    },
  ];

  const categories = [
    { name: "All", count: blogCards.length },
    { name: "Category 2", count: 3 },
    { name: "Category 3", count: 3 },
    { name: "Category 4", count: 3 },
  ];

  const displayedCards = blogCards.slice(0, displayCount);
  const hasMore = displayCount < blogCards.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 9, blogCards.length));
  };

  return (
    <section className={`blog-listing-section ${className}`}>
      <div className="blog-listing-container">
        {/* Category Filters */}
        <div className="blog-category-filters">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`blog-category-btn ${
                selectedCategory === category.name ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} {category.count}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-cards-grid">
          {displayedCards.map((card, index) => (
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

        {/* Load More Button */}
        {hasMore && (
          <div className="blog-load-more">
            <Button
              variant="outlined"
              color="gray"
              size="md"
              onClick={handleLoadMore}
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
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogListing;

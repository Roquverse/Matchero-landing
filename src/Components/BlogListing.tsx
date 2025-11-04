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
      title: "HR trends and what they mean: The Expectation Gap",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img1.png",
      imageAlt: "Professional man with glasses smiling",
      category: "Innovation",
      date: "12.10.2025",
      linkHref: "/blog/ai-recruitment-africa",
      linkText: "Read the article",
    },
    {
      title: "The Power of Personio: What happens when HR gets the r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img2.png",
      imageAlt: "Young professional with laptop in modern office",
      category: "Strategy",
      date: "12.10.2025",
      linkHref: "/blog/startup-hiring-tools",
      linkText: "Read the article",
    },
    {
      title: "Break guilt is the new burnout: Time for a cultural r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img3.png",
      imageAlt: "Professional man in video call interview",
      category: "Candidate Experience",
      date: "12.10.2025",
      linkHref: "/blog/ai-interviews-job-seekers",
      linkText: "Read the article",
    },
    {
      title: "HR trends and what they mean: The Expectation Gap",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img1.png",
      imageAlt: "Remote work setup",
      category: "Insights",
      date: "12.10.2025",
      linkHref: "/blog/remote-work-africa",
      linkText: "Read the article",
    },
    {
      title: "The Power of Personio: What happens when HR gets the r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img2.png",
      imageAlt: "Diverse team collaboration",
      category: "Culture",
      date: "12.10.2025",
      linkHref: "/blog/diverse-teams-2024",
      linkText: "Read the article",
    },
    {
      title: "Break guilt is the new burnout: Time for a cultural r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img3.png",
      imageAlt: "Video interview preparation",
      category: "Innovation",
      date: "12.10.2025",
      linkHref: "/blog/video-interview-tips",
      linkText: "Read the article",
    },
    {
      title: "HR trends and what they mean: The Expectation Gap",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img1.png",
      imageAlt: "Tech skills visualization",
      category: "Strategy",
      date: "12.10.2025",
      linkHref: "/blog/tech-skills-africa",
      linkText: "Read the article",
    },
    {
      title: "The Power of Personio: What happens when HR gets the r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img2.png",
      imageAlt: "Funding trends chart",
      category: "Candidate Experience",
      date: "12.10.2025",
      linkHref: "/blog/funding-hiring-trends",
      linkText: "Read the article",
    },
    {
      title: "Break guilt is the new burnout: Time for a cultural r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img3.png",
      imageAlt: "Interview process flow",
      category: "Insights",
      date: "12.10.2025",
      linkHref: "/blog/candidate-experience",
      linkText: "Read the article",
    },
    {
      title: "HR trends and what they mean: The Expectation Gap",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img1.png",
      imageAlt: "Social media recruitment",
      category: "Culture",
      date: "12.10.2025",
      linkHref: "/blog/social-media-recruitment",
      linkText: "Read the article",
    },
    {
      title: "The Power of Personio: What happens when HR gets the r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img2.png",
      imageAlt: "HR analytics dashboard",
      category: "Innovation",
      date: "12.10.2025",
      linkHref: "/blog/hr-analytics",
      linkText: "Read the article",
    },
    {
      title: "Break guilt is the new burnout: Time for a cultural r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img3.png",
      imageAlt: "Inclusive workplace",
      category: "Strategy",
      date: "12.10.2025",
      linkHref: "/blog/inclusive-culture",
      linkText: "Read the article",
    },
  ];

  const categories = [
    { name: "All", count: 32 },
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
              <span>{category.name}</span>
              <span className="blog-category-count">{category.count}</span>
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
              category={card.category}
              date={card.date}
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
              color="green"
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
              className="blog-load-more-btn"
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

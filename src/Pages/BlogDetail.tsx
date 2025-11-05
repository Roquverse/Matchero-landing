import { useParams, Link } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import type { BlogCardProps } from "../Components/BlogCard";
import Button from "../Components/Button";
import "../assets/Styles/blog-detail.css";
import BlogDetailHero from "./BlogDetailHero";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  authorImage: string;
  authorImageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  embeddedImage?: string;
  embeddedImageAlt?: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Blog posts data - in a real app, this would come from an API or CMS
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      slug: "hr-trends-expectation-gap",
      title: "HR trends and what they mean: The Expectation Gap",
      date: "12.10.2025",
      author: "Mamadou Adebayo",
      category: "Innovation",
      authorImage: "/blog/author-mamadou.png",
      authorImageAlt: "Mamadou Adebayo profile picture",
      heroImage: "/blog/img1.png",
      heroImageAlt: "Smiling Black man sitting on sofa with laptop",
      content: `12.10.2025

AI already is a reality reshaping performance management and the entire workplace. However, implementation challenges remain significant. According to the 2025 HR Insights Report, **AI can empower HR to support fair, data-driven decisions without increasing headcount or overburdening managers.**

## 5 ways to use AI in performance management

AI isn't here to replace human judgment—it's here to make management faster, clearer, and scalable. The data is clear: **94% of HR leaders believe there are significant risks in not training internal employees in AI, including within HR.**

AI can help identify patterns in performance data that might be invisible to human managers. It can flag potential biases, suggest developmental opportunities, and provide real-time insights that support better decision-making.`,
      embeddedImage: "/blog/laptop-keyboard.png",
      embeddedImageAlt: "Person typing on laptop keyboard with coffee cup",
    },
    {
      id: "2",
      slug: "ai-recruitment-africa",
      title: "5 Ways AI Is Transforming Recruitment in Africa",
      date: "12.10.2025",
      author: "Sarah Johnson",
      category: "Innovation",
      authorImage: "/blog/author-sarah.png",
      authorImageAlt: "Sarah Johnson profile picture",
      heroImage: "/blog/img1.png",
      heroImageAlt: "Professional man with glasses smiling",
      content: `12.10.2025

The recruitment landscape in Africa is undergoing a significant transformation, driven by artificial intelligence and innovative technologies. This article explores five key ways AI is revolutionizing how companies find and hire talent across the continent.

From automated candidate screening to predictive analytics, AI is making recruitment faster, more efficient, and more inclusive.`,
    },
    {
      id: "3",
      slug: "startup-hiring-tools",
      title: "Why Startups Need Smarter Hiring Tools to Scale Fast",
      date: "12.10.2025",
      author: "Michael Chen",
      category: "Strategy",
      authorImage: "/blog/author-michael.png",
      authorImageAlt: "Michael Chen profile picture",
      heroImage: "/blog/img2.png",
      heroImageAlt: "Young professional with laptop in modern office",
      content: `12.10.2025

Startups face unique challenges when it comes to hiring. Limited resources, rapid growth, and the need to build a strong team quickly make recruitment a critical success factor.

This article examines why modern startups need intelligent hiring tools that can scale with their growth and adapt to changing needs.`,
    },
    {
      id: "4",
      slug: "ai-interviews-job-seekers",
      title: "Why Job Seekers Should Care About AI Interviews",
      date: "12.10.2025",
      author: "Emma Davis",
      category: "Candidate Experience",
      authorImage: "/blog/author-emma.png",
      authorImageAlt: "Emma Davis profile picture",
      heroImage: "/blog/img3.png",
      heroImageAlt: "Professional man in video call interview",
      content: `12.10.2025

AI-powered interviews are becoming increasingly common in the hiring process. But what does this mean for job seekers? This article explores the benefits and considerations of AI interviews from a candidate's perspective.

Understanding how AI interviews work can help candidates better prepare and showcase their skills effectively.`,
    },
  ];

  // Related blog posts (excluding current post)
  const relatedBlogPosts: BlogCardProps[] = [
    {
      title: "HR trends and what they mean: The Expectation Gap",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img1.png",
      imageAlt: "Smiling Black woman with short curly hair",
      category: "Innovation",
      date: "12.10.2025",
      linkHref: "/blog/hr-trends-expectation-gap",
      linkText: "Read the article",
    },
    {
      title: "The Power of Personio: What happens when HR gets the r...",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis purus quis eleifend efficitur. Vivam...",
      image: "/blog/img2.png",
      imageAlt: "Smiling woman with curly dark hair",
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
      imageAlt: "Woman looking at laptop",
      category: "Candidate Experience",
      date: "12.10.2025",
      linkHref: "/blog/ai-interviews-job-seekers",
      linkText: "Read the article",
    },
  ];

  // Find current blog post
  const currentPost = blogPosts.find((post) => post.slug === slug);

  if (!currentPost) {
    return (
      <div className="blog-detail-container">
        <div className="blog-detail-not-found">
          <h1>Blog post not found</h1>
          <Link to="/blog">Return to Blog</Link>
        </div>
      </div>
    );
  }

  const handleViewFullBlog = () => {
    window.location.href = "/blog";
  };

  return (
    <div className="blog-detail-container">
      {/* Hero Section */}
      <BlogDetailHero title={currentPost.title} />

      {/* Content Section */}
      <section className="blog-detail-content">
        <div className="blog-detail-content-wrapper">
          <div className="blog-detail-header-content">
            {/* Date */}
            <div className="blog-detail-date">{currentPost.date}</div>

            {/* Title */}
            <h1 className="blog-detail-title">{currentPost.title}</h1>

            {/* Author Image, Name & Category */}
            <div className="blog-detail-author-section">
              <div className="blog-detail-author-image">
                <img
                  src={currentPost.authorImage}
                  alt={currentPost.authorImageAlt}
                  className="blog-detail-author-img"
                />
              </div>
              <div className="blog-detail-meta">
                {currentPost.author} • {currentPost.category}
              </div>
            </div>
          </div>
          <div className="blog-detail-hero-image">
            <img
              src={currentPost.heroImage}
              alt={currentPost.heroImageAlt}
              className="blog-detail-hero-img"
            />
          </div>
          <div className="blog-detail-text">
            {currentPost.content.split("\n\n").map((paragraph, index) => {
              // Check if paragraph is a heading
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="blog-detail-heading">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              // Check if paragraph contains bold text
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={index} className="blog-detail-paragraph">
                  {parts.map((part, partIndex) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={partIndex}>{part.slice(2, -2)}</strong>
                      );
                    }
                    return <span key={partIndex}>{part}</span>;
                  })}
                </p>
              );
            })}

            {/* Embedded Image */}
            {currentPost.embeddedImage && (
              <div className="blog-detail-embedded-image">
                <img
                  src={currentPost.embeddedImage}
                  alt={currentPost.embeddedImageAlt || ""}
                  className="blog-detail-embedded-img"
                />
              </div>
            )}

            {/* Additional content paragraphs */}
            <p className="blog-detail-paragraph">
              AI can help identify patterns in performance data that might be
              invisible to human managers. It can flag potential biases, suggest
              developmental opportunities, and provide real-time insights that
              support better decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Read More Section */}
      <section className="blog-detail-read-more">
        <div className="blog-detail-read-more-wrapper">
          <h2 className="blog-detail-read-more-title">Read more</h2>
          <div className="blog-detail-read-more-grid">
            {relatedBlogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          <div className="blog-detail-read-more-button">
            <Button
              variant="outlined"
              color="white"
              size="lg"
              onClick={handleViewFullBlog}
              className="blog-detail-view-full-blog"
            >
              View full blog →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

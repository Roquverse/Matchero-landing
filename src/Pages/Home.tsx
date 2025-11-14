import Hero from "../Components/Hero";
import FeatureSection from "../Components/FeatureSection";
import VideoSection from "../Components/VideoSection";
import WhyMatcheroSection from "../Components/WhyMatcheroSection";
import BlogSection from "../Components/BlogSection";
import "../assets/Styles/home.css";

const Home = () => {
  const handleMainVideoClick = () => {
    console.log("Main video clicked");
  };

  const handleViewBlogClick = () => {
    console.log("View full blog clicked");
  };

  const blogCardsData = [
    {
      title: "5 Ways AI Is Transforming Recruitment in Africa",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img1.png",
      imageAlt: "Professional man with glasses smiling",
      linkHref: "/blog/ai-recruitment-africa",
    },
    {
      title: "Why Startups Need Smarter Hiring Tools to Scale Fast",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img2.png",
      imageAlt: "Young professional with laptop in modern office",
      linkHref: "/blog/startup-hiring-tools",
    },
    {
      title: "Why Job Seekers Should Care About AI Interviews",
      excerpt:
        "consectetur adipiscing elit. Quisque tristique quam nec felis tincidunt tristique. Sed conse...",
      image: "/blog/img3.png",
      imageAlt: "Professional man in video call interview",
      linkHref: "/blog/ai-interviews-job-seekers",
    },
  ];

  const featureCardsData = [
    {
      title: "Decision-Making",
      description: "Make fair, data-driven hiring decisions.",
      imageSrc: "/decision-hero.png",
      imageAlt: "Decision making workspace",
      imageBackgroundColor: "#E4F1FF",
      buttonText: "Explore decision making",
      linkHref: "/recruiters/decision-making",
    },
    {
      title: "Sourcing",
      description: "Find and engage top talent faster.",
      imageSrc: "/sourcing.png",
      imageAlt: "Sourcing dashboard",
      imageBackgroundColor: "#FFF4E6",
      buttonText: "See sourcing tools",
      linkHref: "/recruiters/sourcing",
    },
    {
      title: "Candidate Experience",
      description: "Deliver smooth, branded journeys.",
      imageSrc: "/candidate-experience-hero.png",
      imageAlt: "Candidate experience flow",
      imageBackgroundColor: "#F4EBFF",
      buttonText: "Design candidate journeys",
      linkHref: "/recruiters/candidate-experience",
    },
    {
      title: "Onboarding",
      description: "Get new hires productive from day one.",
      imageSrc: "/onboarding-hero.png",
      imageAlt: "Onboarding workspace",
      imageBackgroundColor: "#E6F7F2",
      buttonText: "Explore onboarding",
      linkHref: "/recruiters/onboarding",
    },
    {
      title: "Integrations",
      description: "Connect easily with your existing tools.",
      imageSrc: "/decision-insight.png",
      imageAlt: "Integrations dashboard",
      imageBackgroundColor: "#F6F7FE",
      buttonText: "View integrations",
      linkHref: "/recruiters/integrations",
    },
    {
      title: "AI",
      description: "Automate tasks and uncover hidden insights.",
      imageSrc: "/sourcing-people2.png",
      imageAlt: "Recruiters collaborating with AI tools",
      imageBackgroundColor: "#E8F9FF",
      buttonText: "See AI automation",
      linkHref: "/recruiters/ai",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Feature Cards Section */}
      <FeatureSection cards={featureCardsData} />

      {/* Video Section */}
      <VideoSection
        title="Hiring reimagined"
        description="See how Matchero transforms the recruitment journey from job posting to onboarding in a single platform."
        videoThumbnail="/video.png"
        videoAlt="Professional woman in workspace setting"
        onVideoClick={handleMainVideoClick}
      />

      {/* Why Matchero Section */}
      <WhyMatcheroSection />

      {/* Blog Section */}
      <BlogSection
        title="Matchero insights and latest advice:"
        cards={blogCardsData}
        viewAllText="View full blog"
        onViewAllClick={handleViewBlogClick}
      />
    </div>
  );
};

export default Home;

import Hero from "../Components/Hero";
import FeatureSection from "../Components/FeatureSection";
import VideoSection from "../Components/VideoSection";
import WhyMatcheroSection from "../Components/WhyMatcheroSection";
import BlogSection from "../Components/BlogSection";
import "../assets/Styles/home.css";

const Home = () => {
  const handleButtonClick = () => {
    console.log("Request demo clicked");
  };

  const handleVideoClick = () => {
    console.log("Watch video clicked");
  };

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
      imageSrc: "/insights-dashboard.png",
      imageAlt: "Insights dashboard showing data and reviews",
      linkHref: "/recruiters/decision-making",
    },
    {
      title: "Sourcing",
      description: "Find and engage top talent faster.",
      linkHref: "/recruiters/sourcing",
    },
    {
      title: "Candidate Experience",
      description: "Deliver smooth, branded journeys.",
      linkHref: "/recruiters/candidate-experience",
    },
    {
      title: "Onboarding",
      description: "Get new hires productive from day one.",
      linkHref: "/recruiters/onboarding",
    },
    {
      title: "Integrations",
      description: "Connect easily with your existing tools.",
      linkHref: "/recruiters/integrations",
    },
    {
      title: "AI",
      description: "Automate tasks and uncover hidden insights.",
      linkHref: "/recruiters/ai",
    },
  ];

  return (
    <div>
      <Hero
        backgroundColor="bg-green-20"
        title="<em>Smarter</em> Hiring, h<b>uman touch,</b> real results"
        description="<b>Matchero</b> helps businesses hire faster and fairer with an all-in-one ATS, AI video interviews, and seamless onboarding."
        image="/hero-home.png"
        imageAlt="Happy professional woman"
        onButtonClick={handleButtonClick}
        onVideoClick={handleVideoClick}
      />

      {/* Bottom Section */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-home"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
      <section className="py-16 bg-white bottom-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            A smart 360° hiring ecosystem designed to source, evaluate, and
            onboard talent smarter, faster, and more effectively.
          </p>
        </div>
      </section>

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

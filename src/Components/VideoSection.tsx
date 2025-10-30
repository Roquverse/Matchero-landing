import Button from "./Button";

interface VideoSectionProps {
  title?: string;
  description?: string;
  videoThumbnail?: string;
  videoAlt?: string;
  buttonText?: string;
  onVideoClick?: () => void;
  className?: string;
}

const VideoSection = ({
  title = "Hiring reimagined",
  description = "See how Matchero transforms the recruitment journey from job posting to onboarding in a single platform.",
  videoThumbnail = "/video-thumbnail.jpg",
  videoAlt = "Video thumbnail showing a professional woman",
  buttonText = "Watch 1 min video",
  onVideoClick,
  className = "",
}: VideoSectionProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="w-full px-4 md:px-16">
        <div className="w-full text-center">
          {/* Header Text */}
          <div className="sub-title-container">
            <h2 className="sub-title">{title}</h2>
            <p className="text-xl text-gray-700 leading-relaxed sub-title-description">
              {description}
            </p>
          </div>

          {/* Video Player */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto video-container">
              <img
                src={videoThumbnail}
                alt={videoAlt}
                className="w-full h-auto object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center video-button">
                <Button
                  variant="filled"
                  color="white"
                  size="lg"
                  onClick={onVideoClick}
                  icon={
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  }
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 shadow-lg video-button-text"
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

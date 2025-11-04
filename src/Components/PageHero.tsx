import Button from "./Button";
// import "../assets/Styles/hero.css";
import "../assets/Styles/page-hero.css";

const PageHero = () => {
  const handleButtonClick = () => {
    console.log("Request demo clicked");
  };

  return (
    <div className="candidate-hero-container">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="candidate-hero-content">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Your next role, <em>intelligently matched</em>
            </h1>
            <p className="candidate-hero-content-description">
              No endless job listings. No generic suggestions. We bring you
              roles that align with your skills, values, and ambition
            </p>

            <div className="candidate-hero-input-group flex flex-col sm:flex-row gap-4 mt-7">
              <Button
                variant="filled"
                color="green"
                size="md"
                onClick={handleButtonClick}
                className="candidate-hero-button"
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
              >
                Join free. Start matching
              </Button>
            </div>
          </div>

          <div className="relative ms-4 candidate-hero-image-container">
            <img
              className="candidate-hero-image"
              src="jobseeker.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="candidate-vector-home"
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

export default PageHero;

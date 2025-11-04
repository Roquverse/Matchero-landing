import Button from "./Button";
import Input from "./Input";
import "../assets/Styles/hero.css";

const Hero = () => {
  const handleButtonClick = () => {
    console.log("Request demo clicked");
  };

  const handleVideoClick = () => {
    console.log("Watch video clicked");
  };

  return (
    <div className="hero-container">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="hero-content">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              <b>
                <em>Smarter</em>
              </b>{" "}
              Hiring, <b>human touch</b>, real results
            </h1>
            <p className="hero-content-description">
              Matchero helps businesses hire faster and fairer with an
              all-in-one ATS, AI video interviews, and seamless onboarding.
            </p>

            <div className="hero-input-group flex flex-col sm:flex-row gap-4 mt-7">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="hero-input"
              />
              <Button
                variant="filled"
                color="green"
                size="md"
                onClick={handleButtonClick}
                className="hero-button"
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
                Request demo
              </Button>
            </div>

            <p className="hero-privacy-text mt-4 text-sm text-gray-600">
              By clicking "request demo", you agree to the use of your data in
              accordance with Matchero's{" "}
              <a
                href="#"
                className="hero-privacy-link text-green-600 hover:underline"
              >
                Privacy Notice
              </a>
              , including for marketing purposes.
            </p>

            <div
              className="hero-video-link mt-4 flex items-center gap-2 text-gray-700 hover:text-green-600 cursor-pointer"
              onClick={handleVideoClick}
            >
              <span>Watch 1 min video</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="relative ms-4 hero-image-container">
            <img className="hero-image" src="hero-home.png" alt="Hero Image" />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="vector-home"
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

export default Hero;

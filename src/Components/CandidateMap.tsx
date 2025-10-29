import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../assets/Styles/candidate-map.css";
import JobListing from "./JobListing";

const CandidateMap = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/candidate/signup");
  };

  return (
    <div className="candidate-map-container relative">
      <section className="candidate-map-section">
        <div className="map-container">
          {/* World Map Background */}
          <div className="world-map">
            <img
              src="/Candidate map.svg"
              alt="World Map"
              className="map-image"
            />
          </div>

          {/* Profile Pictures Scattered Across Map */}

          {/* North America East Coast - with speech bubble */}
          <div className="absolute north-america">
            <div className="relative candidate-map-profile">
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden candidate-headshots">
                <img
                  src="/headshots/headie1.png"
                  alt="East Coast Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Speech Bubble */}
              <div className="absolute top-0 left-16 speech-bubble">
                <p className="speech-bubble-title">Congratulations</p>
                <p className="speech-bubble-subtitle">
                  We are offering you the role!
                </p>
              </div>
            </div>
          </div>

          {/* North America Midwest */}
          <div className="absolute midwest-profile">
            <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden candidate-headshots">
              <img
                src="/headshots/headie3.png"
                alt="Midwest Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Caribbean/Northern South America */}
          <div className="absolute caribbean-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden candidate-headshots">
              <img
                src="/headshots/headie2.png"
                alt="Caribbean Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Caribbean/Northern South America - Second */}
          <div className="absolute caribbean-profile-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden candidate-headshots">
              <img
                src="/headshots/headie4.png"
                alt="Caribbean Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Europe (United Kingdom) */}
          <div className="absolute europe-profile">
            <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden candidate-headshots">
              <img
                src="/headshots/headie5.png"
                alt="UK Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* North Africa (Morocco/Algeria) */}
          <div className="absolute north-africa-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden candidate-headshots">
              <img
                src="/headshots/headie6.png"
                alt="North Africa Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* West Africa (Nigeria/Niger) */}
          <div className="absolute west-africa-profile">
            <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden candidate-headshots">
              <img
                src="/headshots/headie7.png"
                alt="West Africa Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* West Africa (Nigeria/Niger) */}
          <div className="absolute west-africa-profile-2">
            <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white shadow-lg overflow-hidden candidate-headshots">
              <img
                src="/headshots/headie8.png"
                alt="West Africa Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side Content - Multi-Language Access */}
          <div className="absolute right-content">
            <div className="content-block">
              <h1 className="htw-heading">Multi-Language Access</h1>
              <h3 className="map-content-subtitle">
                Designed for global talent — English, French, and Spanish
                supported at launch.
              </h3>
              <p className="htw-step-desc">
                Tell us what you value—team culture, location, tech stack.
              </p>
              <Button
                variant="filled"
                color="white"
                size="lg"
                onClick={handleJoinClick}
                className="content-button"
              >
                Join free. Start matching.
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Job Listing Section - Limited to 3 cards */}
      <JobListing maxCards={3} />
    </div>
  );
};

export default CandidateMap;

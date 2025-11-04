import "../assets/Styles/interview-dashboard.css";

const InterviewDashboard = () => {
  return (
    <div className="interview-dashboard-container">
      <section className="interview-dashboard-section">
        <div className="dashboard-container">
          {/* Floating Button */}

          {/* Interview Dashboard Image */}
          <div className="dashboard-image-container">
            <img
              src="/button-image.png"
              alt="Interview Dashboard Interface"
              className="dashboard-image"
            />
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="vector-interview-dashboard"
      >
        <path
          fill="#CDF0F6"
          fill-opacity="1"
          d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default InterviewDashboard;

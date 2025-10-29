import "../assets/Styles/interview-dashboard.css";

const InterviewDashboard = () => {
  return (
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
  );
};

export default InterviewDashboard;

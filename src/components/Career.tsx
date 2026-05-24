import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education (10th Standard)</h4>
                <h5>Completed Schooling</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Successfully completed my 10th standard with a strong academic
              foundation and developed an early interest in technology,
              computers, and problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education (12th Standard)</h4>
                <h5>Biofocal - Computer Science</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed my 12th standard with Biofocal and Computer Science as
              key subjects, which strengthened my interest in programming,
              logical thinking, and technical learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science Engineering</h4>
                <h5>1st Year Student</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing my first year of B.Tech in Computer Science
              Engineering, focusing on programming, software development, and
              building practical projects to grow as a future developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
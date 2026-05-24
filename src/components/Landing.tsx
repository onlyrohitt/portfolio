import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ROHIT
              <br />
              <span>SHARMA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Knowledgeable man in</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Basic to Advanced </div>
              <div className="landing-h2-2">C , C++</div>
            </h2>
            <h2>
              <div className="landing-h2-info">HTML </div>
              <div className="landing-h2-info-1">Python</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

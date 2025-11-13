import { Link } from "react-router-dom";
import "../assets/Styles/legal.css";

interface TermsOfUseProps {
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
}

const TermsOfUse = ({
  breadcrumb = {
    items: [{ text: "Home", link: "/" }, { text: "Terms of use" }],
  },
}: TermsOfUseProps) => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-hero">
          <nav className="legal-breadcrumb-nav" aria-label="Breadcrumb">
            {breadcrumb.items.map((item, index) => {
              const isLast = index === breadcrumb.items.length - 1;
              return (
                <div key={index} className="legal-breadcrumb-item">
                  {item.link && !isLast ? (
                    <Link to={item.link} className="legal-breadcrumb-link">
                      {item.text}
                    </Link>
                  ) : (
                    <span
                      className={
                        isLast
                          ? "legal-breadcrumb-current"
                          : "legal-breadcrumb-link"
                      }
                    >
                      {item.text}
                    </span>
                  )}
                  {index < breadcrumb.items.length - 1 && (
                    <span className="legal-breadcrumb-separator">/</span>
                  )}
                </div>
              );
            })}
          </nav>

          <p className="legal-updated">Last updated: 12.12.2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h1>1. Acceptance of Terms</h1>
            <p>
              By accessing or using Matchero (&quot;the Platform&quot;), you
              agree to these Terms of Use and our Privacy Policy. If you do not
              agree, please do not use the Platform.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. About Matchero</h2>
            <p>
              Matchero (&quot;Matchero,&quot; &quot;we,&quot; &quot;our,&quot;
              or &quot;us&quot;) is a company registered in Delaware, U.S.A. We
              provide AI-powered recruitment and onboarding services to
              employers and job seekers globally.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Use of the Platform</h2>
            <p>
              You agree to use the Platform only for lawful purposes. You must
              not:
            </p>
            <ul>
              <li>Misuse or attempt to hack our systems.</li>
              <li>Upload false, misleading, or unauthorized content.</li>
              <li>
                Copy, distribute, or modify any part of the Platform without
                permission.
              </li>
            </ul>
            <p className="legal-note">
              We may suspend or terminate your account if you breach these
              terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Accounts</h2>
            <p>
              To access certain features, you may need to create an account. You
              are responsible for maintaining the confidentiality of your login
              credentials and all activity under your account.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Intellectual Property</h2>
            <p>
              All content, trademarks, graphics, logos, and software on the
              Platform are owned by or licensed to Matchero. You may not
              reproduce or redistribute them without prior written consent.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Third-Party Links</h2>
            <p>
              Our Platform may include links to third-party websites or
              services. We are not responsible for their content, privacy
              policies, or practices.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Disclaimers</h2>
            <p>
              Matchero provides the Platform &quot;as is&quot; and &quot;as
              available.&quot; We make no guarantees about its accuracy,
              reliability, or availability. You use it at your own risk.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Matchero shall not be
              liable for any indirect, incidental, or consequential damages
              resulting from your use of the Platform.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware,
              U.S.A., without regard to its conflict of law principles.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Platform means you accept the updated version.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about these Terms,{" "}
              <Link to="/contact" className="legal-link">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="legal-cta">
          <div className="legal-cta-inner">
            <div className="legal-cta-header">
              <h3>Hire smarter with Matchero</h3>
              <p>
                Enter your email to see how Matchero helps you find and hire
                aligned talent—fast.
              </p>
            </div>

            <form
              className="legal-cta-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="legal-cta-input"
              />
              <button type="submit" className="legal-cta-button">
                <span>Request demo</span>
                <svg
                  className="legal-cta-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            <p className="legal-cta-note">
              By clicking “request demo”, you agree to the use of your data in
              accordance with Matchero’s{" "}
              <Link to="/privacy-policy" className="legal-cta-note-link">
                Privacy Notice
              </Link>
              , including for marketing purposes.
            </p>

            <button type="button" className="legal-cta-video">
              <span>Watch 1 min video</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="legal-cta-video-icon"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="legal-footer">
          <div className="legal-footer-columns">
            <div className="legal-footer-column">
              <h4>Solutions</h4>
              <ul>
                <li>
                  <Link to="/recruiters/decision-making">Decision making</Link>
                </li>
                <li>
                  <Link to="/recruiters/sourcing">Sourcing</Link>
                </li>
                <li>
                  <Link to="/recruiters/candidate-experience">
                    Candidate Experience
                  </Link>
                </li>
                <li>
                  <Link to="/recruiters/onboarding">Smart onboarding</Link>
                </li>
                <li>
                  <Link to="/recruiters/integrations">Integrations</Link>
                </li>
                <li>
                  <Link to="/recruiters/ai-interviewer">AI interviewer</Link>
                </li>
                <li>
                  <Link to="/recruiters/ai-job-matching">AI job matching</Link>
                </li>
              </ul>
            </div>

            <div className="legal-footer-column">
              <h4>For jobseekers</h4>
              <ul>
                <li>
                  <Link to="/candidate">Browse jobs</Link>
                </li>
                <li>
                  <Link to="/candidate/signup">Sign up</Link>
                </li>
              </ul>
            </div>

            <div className="legal-footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-use">Terms of use</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

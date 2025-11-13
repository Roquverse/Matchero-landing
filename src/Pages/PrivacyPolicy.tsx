import { Link } from "react-router-dom";
import "../assets/Styles/legal.css";

interface PrivacyPolicyProps {
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
}

const PrivacyPolicy = ({
  breadcrumb = {
    items: [{ text: "Home", link: "/" }, { text: "Privacy policy" }],
  },
}: PrivacyPolicyProps) => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-hero">
          {breadcrumb && (
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
          )}
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <p className="legal-updated">Last updated: 12.12.2025</p>
            <h2>1. Introduction</h2>
            <p>
              Matchero (&quot;Matchero,&quot; &quot;we,&quot; &quot;our,&quot;
              &quot;us&quot;) respects your privacy. This Privacy Policy
              explains how we collect, use, and protect your personal
              information when you use our website and services
              (&quot;Platform&quot;).
            </p>
            <p>
              We comply with applicable data protection laws, including the
              General Data Protection Regulation (GDPR) and other international
              privacy frameworks.
            </p>

            <h2>2. Data We Collect</h2>
            <p>We may collect:</p>
            <ul>
              <li>Account information: name, email, password.</li>
              <li>
                Profile &amp; Resume Data: employment history, skills,
                qualifications.
              </li>
              <li>
                Recruitment Data: job applications, assessments, interview
                notes.
              </li>
              <li>
                Usage Data: IP address, browser type, device information,
                cookies.
              </li>
              <li>
                Communication Data: messages, feedback, or support requests.
              </li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We process your data to:</p>
            <ul>
              <li>Provide and operate the Matchero Platform.</li>
              <li>Match candidates with relevant job opportunities.</li>
              <li>
                Communicate with you regarding your account or hiring processes.
              </li>
              <li>Improve our services and user experience.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2>4. Legal Basis for Processing (GDPR)</h2>
            <p>
              We process personal data under one or more of the following bases:
            </p>
            <ul>
              <li>Consent — when you create an account or upload your CV.</li>
              <li>Contract — to provide services you have requested.</li>
              <li>Legitimate Interest — to enhance and secure our platform.</li>
              <li>Legal Obligation — when required by law.</li>
            </ul>

            <h2>5. Sharing Your Data</h2>
            <p>We may share data with:</p>
            <ul>
              <li>Employers and recruiters using Matchero for hiring.</li>
              <li>
                Service providers who assist with hosting, analytics, or
                communications.
              </li>
              <li>Legal authorities, if required to comply with the law.</li>
            </ul>
            <p className="legal-note">
              We do not sell personal data to third parties.
            </p>

            <h2>6. International Data Transfers</h2>
            <p>
              Because we operate globally, your data may be transferred outside
              your country, including to the U.S. We ensure such transfers
              comply with GDPR using safeguards like Standard Contractual
              Clauses.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for the purposes
              outlined here or as required by law. You can request deletion at
              any time.
            </p>

            <h2>8. Your Rights (GDPR &amp; Global)</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, correct, or delete your data.</li>
              <li>Withdraw consent at any time.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Request data portability.</li>
            </ul>
            <p>
              To exercise these rights,{" "}
              <Link to="/privacy-policy#contact" className="legal-link">
                contact us
              </Link>
              .
            </p>

            <h2>9. Cookies &amp; Tracking</h2>
            <p>
              We use cookies and similar technologies to analyze site usage and
              enhance your experience. You can manage cookie preferences through
              your browser settings.
            </p>

            <h2>10. Security</h2>
            <p>
              We apply appropriate technical and organizational measures to
              protect your data from unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify
              users of material changes via email or prominent notice on the
              Platform.
            </p>

            <h2>12. Contact</h2>
            <p>
              For any privacy concerns,{" "}
              <Link to="/contact" className="legal-link">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import "../assets/Styles/footer.css";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const logoSrc = isHomePage ? "/logo.svg" : "/blue-logo.svg";
  const footerBackground = isHomePage ? "bg-cyan-20" : "bg-white";

  return (
    <footer className={`py-16 footer ${footerBackground}`}>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Logo and Email Form */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logoSrc} alt="Matchero Logo" className="footer-logo" />
            </div>

            {/* Email Form */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base bg-white h-11 w-full"
                />
                <Link to="/pricing" className="inline-block">
                  <Button
                    variant="filled"
                    color="green"
                    size="md"
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
                    className="whitespace-nowrap"
                  >
                    Request demo
                  </Button>
                </Link>
              </div>

              {/* Privacy Notice */}
              <p className="text-sm text-gray-700 max-w-full">
                By clicking "request demo", you agree to the use of your data in
                accordance with Matchero's{" "}
                <a
                  href="#"
                  className="text-green-800 underline hover:text-deep-tek-100"
                >
                  Privacy Notice
                </a>
                , including for marketing purposes.
              </p>

              {/* Video Link */}
              <div className="flex items-center text-gray-700 hover:text-deep-tek-100 cursor-pointer group">
                <svg
                  className="w-5 h-5 mr-3 group-hover:text-deep-tek-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="font-medium text-base">Watch 1 min video</span>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Recruiters */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-4">
                For recruiters
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Sourcing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Decision-Making
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Candidate Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Onboarding
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    AI
                  </a>
                </li>
              </ul>
            </div>

            {/* For Jobseekers */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-4">
                For jobseekers
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Live jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Interview Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Upskill
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Get in touch
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-deep-tek-100 transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

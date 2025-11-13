import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import "../assets/Styles/navbar.css";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRecruitersDropdownOpen, setIsRecruitersDropdownOpen] =
    useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node;

      const clickedInsideDesktopDropdown =
        dropdownRef.current?.contains(targetNode);
      const clickedInsideMobileDropdown =
        mobileDropdownRef.current?.contains(targetNode);

      if (clickedInsideDesktopDropdown || clickedInsideMobileDropdown) {
        return;
      }

      if (dropdownRef.current || mobileDropdownRef.current) {
        setIsRecruitersDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isHomePage = location.pathname === "/";
  const isRecruiterPage =
    location.pathname === "/recruiters" ||
    location.pathname.startsWith("/recruiters/");
  const legalPaths = ["/privacy-policy", "/terms-of-use"];
  const isLegalPage = legalPaths.includes(location.pathname);
  const isSignupPage = location.pathname === "/signup";
  const shouldUseGreenLogo =
    isHomePage || isRecruiterPage || isLegalPage || isSignupPage;
  const logoSrc = shouldUseGreenLogo ? "/logo.svg" : "/blue-logo.svg";

  const navigationItems = [
    { name: "Solutions", path: "/recruiters", hasDropdown: true },
    { name: "For jobseekers", path: "/candidate" },
    { name: "Blog", path: "/blog" },
  ];

  const recruitersMenuItems = [
    { name: "Decision making", path: "/recruiters/decision-making" },
    { name: "Sourcing", path: "/recruiters/sourcing" },
    {
      name: "Candidate experience",
      path: "/recruiters/candidate-experience",
    },
    { name: "Smart onboarding", path: "/recruiters/onboarding" },
    { name: "Integrations", path: "/recruiters/integrations" },
  ];
  const comingSoonItems = [
    {
      name: "AI Interviewer",
      path: "/recruiters/ai-interviewer",
      comingSoon: true,
    },
    {
      name: "AI job matching",
      path: "/recruiters/ai-job-matching",
      comingSoon: true,
    },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 navbar">
      <div className="w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoSrc} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name} ref={dropdownRef} className="relative">
                    <button
                      onClick={() =>
                        setIsRecruitersDropdownOpen(!isRecruitersDropdownOpen)
                      }
                      className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                        isActive(item.path)
                          ? "text-deep-tek-100 font-semibold"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isRecruitersDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isRecruitersDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50 dropdown-menu">
                        <div className="px-4 pb-2">
                          <Link
                            to="/recruiters"
                            className="block"
                            onClick={() => setIsRecruitersDropdownOpen(false)}
                          >
                            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                              Solution for recruiters
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Explore tools that make hiring faster
                            </p>
                          </Link>
                        </div>
                        <div className="space-y-1">
                          {recruitersMenuItems.map((menuItem) => (
                            <Link
                              key={menuItem.path}
                              to={menuItem.path}
                              className={`w-full text-left block px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                isActive(menuItem.path)
                                  ? "text-deep-tek-100 bg-deep-tek-20 font-semibold"
                                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                              }`}
                              onClick={() => {
                                setIsRecruitersDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <span>{menuItem.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {comingSoonItems.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                              Coming soon
                            </p>
                            <div className="space-y-1">
                              {comingSoonItems.map((menuItem) => (
                                <div
                                  key={menuItem.path}
                                  className="block px-4 py-3 dropdown-menu-item cursor-not-allowed opacity-60 transition-colors duration-200"
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{menuItem.name}</span>
                                    <span className="px-2 py-0.5 coming-soon-badge text-blue-700 badge rounded-full">
                                      Coming soon
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-deep-tek-100 font-semibold"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <Link to="/signup" className="inline-flex">
                <Button
                  variant="filled"
                  color="green"
                  size="sm"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  }
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setIsRecruitersDropdownOpen((prevState) => !prevState)
                      }
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-deep-tek-100 bg-deep-tek-20"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isRecruitersDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {isRecruitersDropdownOpen && (
                      <div
                        ref={mobileDropdownRef}
                        className="pl-4 mt-2 space-y-1"
                      >
                        <div className="px-4 pb-2">
                          <Link
                            to="/recruiters"
                            className="text-left block w-full"
                            onClick={() => {
                              setIsRecruitersDropdownOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                              Solution for recruiters
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Explore tools that make hiring faster
                            </p>
                          </Link>
                        </div>
                        <div className="space-y-1">
                          {recruitersMenuItems.map((menuItem) => (
                            <Link
                              key={menuItem.path}
                              to={menuItem.path}
                              className={`w-full text-left block px-4 py-3 rounded-lg text-sm dropdown-menu-item transition-colors duration-200 ${
                                isActive(menuItem.path)
                                  ? "bg-deep-tek-20 text-deep-tek-100 font-semibold"
                                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              }`}
                              onClick={() => {
                                setIsRecruitersDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <span>{menuItem.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {comingSoonItems.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-gray-100 space-y-1">
                            {comingSoonItems.map((menuItem) => (
                              <div
                                key={menuItem.path}
                                className="block px-4 py-2 rounded-lg text-sm cursor-not-allowed opacity-60 transition-colors duration-200"
                              >
                                <div className="flex items-center justify-between">
                                  <span>{menuItem.name}</span>
                                  <span className="px-2 py-0.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                                    Coming soon
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-deep-tek-100 bg-deep-tek-20"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <button className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  <Link to="/signup" className="flex-1">
                    <Button
                      variant="filled"
                      color="green"
                      size="sm"
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      }
                      className="w-full"
                    >
                      Sign up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

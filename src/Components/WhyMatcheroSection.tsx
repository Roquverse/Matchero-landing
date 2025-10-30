interface WhyMatcheroSectionProps {
  className?: string;
}

const WhyMatcheroSection = ({ className = "" }: WhyMatcheroSectionProps) => {
  const whyMatcheroFeatures = [
    {
      title: "Africa-First Approach",
      description:
        "Built with English and French support, NDPR-ready compliance, and mobile-friendly design for emerging markets.",
    },
    {
      title: "360° Hiring Ecosystem",
      description:
        "From sourcing to onboarding, everything lives in one intuitive platform.",
    },
    {
      title: "Human-Centric Automation",
      description:
        "AI works alongside recruiters to accelerate, not replace, human decision-making.",
    },
    {
      title: "Scalable for All Teams",
      description:
        "Whether you're a startup, agency, or enterprise, Matchero adapts to your growth.",
    },
    {
      title: "Transparent & Trusted",
      description:
        "Every score, decision, and data point is structured, auditable, and designed to inspire confidence.",
    },
  ];

  const integrations = [
    {
      name: "ORACLE",
      color: "text-red-600",
      image: "/partner/Oracle_logo 1.svg",
    },
    {
      name: "LinkedIn",
      color: "text-blue-600",
      image: "/partner/LinkedIn_2021 1.svg",
    },
    {
      name: "workday.",
      color: "text-gray-700",
      image: "/partner/Workday_Logo_0 1.svg",
    },
    {
      name: "matchero",
      color: "text-green-600",
      subtitle: "ATS, Hiring & Onboarding",
      image: "/logo.svg",
    },
    {
      name: "Google Drive",
      color: "text-blue-500",
      image: "/partner/Google.png",
    },
    {
      name: "bo",
      color: "text-green-600",
      image: "/partner/338d20c8723f9c93bca1046de48ea40f1e6450be.png",
    },
  ];

  return (
    <section className={`py-16 bg-gray-50 relative ${className}`}>
      {/* Background Map Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
      </div>

      <div className="w-full px-4 md:px-16 relative z-10">
        {/* Why Matchero Section */}
        <div className="mb-20">
          <h2 className="sub-title2">Why Matchero?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyMatcheroFeatures.map((feature, index) => (
              <div key={index} className="list-item-container">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="sub-list-item-container">
                  <h3 className="text-lg font-semibold sub-list-title">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 sub-list-item">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Integration Section */}
        <div className="text-center">
          <h2 className="sub-title">
            Matchero fits into <em>your</em> workflow
          </h2>
          <p className="text-xl text-gray-600 mb-12 sub-title-description2">
            not the other way around
          </p>

          {/* Integration Logos */}
          <div className="w-full mb-12">
            {/* Desktop Grid - Spread across full width */}
            <div className="hidden md:flex justify-between items-center w-full">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-1 integration-logo-container"
                >
                  <img
                    src={integration.image}
                    alt={`${integration.name} logo`}
                    className="h-16 w-auto object-contain integration-logo"
                  />
                  {integration.subtitle && (
                    <div className="text-sm text-gray-500 mt-2 text-center integration-subtitle">
                      {integration.subtitle}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden overflow-x-auto">
              <div
                className="flex space-x-8 pb-4"
                style={{ width: `${integrations.length * 120}px` }}
              >
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center w-24"
                  >
                    <img
                      src={integration.image}
                      alt={`${integration.name} logo`}
                      className="w-full h-auto max-h-12 object-contain integration-logo"
                    />
                    {integration.subtitle && (
                      <div className="text-xs text-gray-500 mt-1 text-center">
                        {integration.subtitle}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our platform connects effortlessly with the tools you already use,
            from job boards and CRMs to communication platforms and HR software.
            As your team grows, Matchero grows with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMatcheroSection;

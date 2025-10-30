import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import type { FeatureCardProps } from "./FeatureCard";
import Button from "./Button";
import "../assets/Styles/feature.css";

interface FeatureSectionProps {
  cards: FeatureCardProps[];
  className?: string;
}

const FeatureSection = ({ cards }: FeatureSectionProps) => {
  return (
    <section className="bg-green-20 py-10 pb-32 md:pb-10 relative features-section">
      <div className="w-full px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* For Jobseekers Button */}
        <div className="text-center mt-12">
          <Link to="/candidate">
            <Button
              variant="outlined"
              color="green"
              size="lg"
              className="px-8 py-4"
            >
              For Jobseekers →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

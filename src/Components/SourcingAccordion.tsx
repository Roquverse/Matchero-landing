import { useState } from "react";
import "../assets/Styles/sourcing-accordion.css";

interface SourcingAccordionItem {
  title: string;
  content: string;
}

interface SourcingAccordionProps {
  items: SourcingAccordionItem[];
  defaultOpenIndex?: number;
  className?: string;
}

const SourcingAccordion = ({
  items,
  defaultOpenIndex = 0,
  className = "",
}: SourcingAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`sourcing-accordion ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="sourcing-accordion-item">
            <button
              className={`sourcing-accordion-header ${
                isOpen ? "sourcing-accordion-open" : ""
              }`}
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
            >
              <span className="sourcing-accordion-icon">
                {isOpen ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>
              <span className="sourcing-accordion-title">{item.title}</span>
            </button>
            {isOpen && (
              <div className="sourcing-accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SourcingAccordion;

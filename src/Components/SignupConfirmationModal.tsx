import { useEffect } from "react";
import "../assets/Styles/signup-confirmation-modal.css";

interface SignupConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupConfirmationModal = ({
  isOpen,
  onClose,
}: SignupConfirmationModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="signup-confirmation-modal-overlay" onClick={onClose}>
      <div
        className="signup-confirmation-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="signup-confirmation-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="signup-confirmation-modal__content">
          <h2 className="signup-confirmation-modal__title">
            You&apos;re almost in!
          </h2>

          <div className="signup-confirmation-modal__icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="signup-confirmation-modal__message">
            We&apos;ve sent a confirmation email
          </p>

          <p className="signup-confirmation-modal__instructions">
            Verify your address to complete your beta registration.
          </p>

          <p className="signup-confirmation-modal__details">
            Once verified, you&apos;ll receive your early-access invite and
            onboarding details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupConfirmationModal;


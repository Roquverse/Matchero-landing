import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { validateBusinessEmail } from "../lib/emailValidation";
import { supabase } from "../lib/supabaseClient";

const baseCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

interface PricingFormProps {
  buttonText?: string;
  formTitle?: string;
  initialEmail?: string;
}

const PricingForm: React.FC<PricingFormProps> = ({
  buttonText = "Book your demo",
  formTitle = "Request pricing",
  initialEmail = "",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: initialEmail,
    phoneNumber: "",
    country: "",
    organizationSize: "",
    message: "",
    hearAbout: "",
  });
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Update email when initialEmail prop changes
  useEffect(() => {
    if (initialEmail) {
      setFormData((prev) => ({ ...prev, email: initialEmail }));
    }
  }, [initialEmail]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear email error when user types
    if (name === "email") {
      setEmailError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setEmailError(null);
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.firstName.trim()) {
      setSubmitError("First name is required");
      setIsSubmitting(false);
      return;
    }

    if (!formData.lastName.trim()) {
      setSubmitError("Last name is required");
      setIsSubmitting(false);
      return;
    }

    // Validate email is a business email
    const emailValidation = validateBusinessEmail(formData.email);
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.error || "Invalid email");
      setIsSubmitting(false);
      return;
    }

    try {
      // Step 1: Insert data into request_demos table
      const { data: demoRequest, error: dbError } = await supabase
        .from("request_demos")
        .insert({
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          email: formData.email.trim(),
          phone_number: formData.phoneNumber.trim() || null,
          company_name: formData.company.trim() || null,
          country: formData.country || null,
          organisation_size: formData.organizationSize || null,
          hear_about: formData.hearAbout || null,
          questions: formData.message.trim() || null,
          email_sent: false,
        })
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        setSubmitError(
          dbError.message.includes("duplicate") ||
            dbError.message.includes("unique")
            ? "This email has already been registered for a demo. We'll be in touch soon!"
            : "Failed to submit request. Please try again."
        );
        setIsSubmitting(false);
        return;
      }

      if (!demoRequest) {
        setSubmitError("Failed to save request. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Note: Email will be sent automatically via Supabase Edge Function
      // triggered by database webhook when the record is inserted
      // The Edge Function will update email_sent, email_sent_at, or email_error fields

      // Show success message
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        country: "",
        organizationSize: "",
        message: "",
        hearAbout: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Unexpected error:", error);
      setSubmitError(
        "An unexpected error occurred. Please try again or contact support."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pricing-form-card">
      <h1 className="pricing-title">{formTitle}</h1>

      <form onSubmit={handleSubmit} className="pricing-form">
        <div className="form-row">
          <Input
            type="text"
            name="firstName"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-input"
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Your last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <Input
          type="text"
          name="company"
          placeholder="Your company or organization"
          value={formData.company}
          onChange={handleInputChange}
          className="form-input"
        />

        <div className="form-row">
          <div className="form-input-wrapper">
            <Input
              type="email"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              error={!!emailError}
            />
            {emailError && <p className="form-email-error">{emailError}</p>}
          </div>
          <Input
            type="tel"
            name="phoneNumber"
            placeholder="Your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-field-group">
          <label className="form-label">Country/Region *</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select your country</option>
            {baseCountries.map((country) => (
              <option
                key={country}
                value={country.toLowerCase().replace(/\s+/g, "-")}
              >
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field-group">
          <label className="form-label">Organisation size *</label>
          <select
            name="organizationSize"
            value={formData.organizationSize}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select your organisation size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501-1000">501-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>

        <div className="form-field-group">
          <textarea
            name="message"
            placeholder="Ask us anything you like"
            value={formData.message}
            onChange={handleInputChange}
            className="form-textarea"
            rows={4}
          />
        </div>

        <div className="form-field-group">
          <label className="form-label">How did you hear about Matchero</label>
          <select
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select an option</option>
            <option value="google">Google Search</option>
            <option value="linkedin">LinkedIn</option>
            <option value="referral">Referral</option>
            <option value="social-media">Social Media</option>
            <option value="event">Event/Conference</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div
            style={{
              padding: "16px",
              backgroundColor: "#d1fae5",
              border: "1px solid #22c55e",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#166534",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              ✅ Thank you! We've received your request. Check your email for
              confirmation.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div
            style={{
              padding: "16px",
              backgroundColor: "#fee2e2",
              border: "1px solid #dc2626",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#991b1b",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {submitError}
            </p>
          </div>
        )}

        <p className="privacy-notice">
          We'll only use the information you provide to contact you about
          Matchero's products, updates, and relevant resources. We respect your
          privacy and will never share your details with third parties. You can
          unsubscribe from our communications at any time. For more details,
          please see our{" "}
          <Link to="/privacy" className="privacy-link">
            Privacy Policy
          </Link>
          .
        </p>

        <Button
          type="submit"
          variant="filled"
          color="green"
          className="pricing-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : buttonText}
        </Button>
      </form>
    </div>
  );
};

export default PricingForm;

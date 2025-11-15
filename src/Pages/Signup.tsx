import { useState } from "react";
import "../assets/Styles/signup.css";
import { supabase } from "../lib/supabaseClient";
import SignupConfirmationModal from "../Components/SignupConfirmationModal";

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
  "Côte d’Ivoire",
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
const countryOptions = ["Select your country", ...baseCountries];

const organisationSizeOptions = [
  "Select your organisation size",
  "1-10",
  "11-50",
  "51-200",
  "201-1000",
  "1000+",
];

const hearAboutOptions = [
  "Select an option",
  "Referral",
  "LinkedIn",
  "Twitter / X",
  "Podcast",
  "Newsletter",
  "Other",
];

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    country: countryOptions[0],
    organisationSize: organisationSizeOptions[0],
    hearAbout: hearAboutOptions[0],
    questions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    const email = formData.email.trim().toLowerCase();
    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const companyName = formData.companyName.trim() || null;
    const phone = formData.phone.trim() || null;
    const country = formData.country;
    const organisationSize = formData.organisationSize;
    const hearAbout =
      formData.hearAbout === hearAboutOptions[0] ? null : formData.hearAbout;
    const questions = formData.questions.trim() || null;

    try {
      // Check if email already exists
      const { data: existingUser } = await supabase
        .from("beta_signups")
        .select("email")
        .eq("email", email)
        .single();

      if (existingUser) {
        setSubmitError(
          "This email is already registered. Please check your email or try a different address."
        );
        setIsSubmitting(false);
        return;
      }

      // Save to beta_signups table only
      const { error: dbError } = await supabase.from("beta_signups").insert({
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        email: email,
        phone_number: phone,
        country: country,
        organisation_size: organisationSize,
        hear_about: hearAbout,
        questions: questions,
      });

      if (dbError) {
        // Handle duplicate email error
        if (dbError.code === "23505") {
          setSubmitError(
            "This email is already registered. Please check your email or try a different address."
          );
        } else {
          setSubmitError(
            `Failed to save your information: ${dbError.message}. Please try again.`
          );
        }
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        country: countryOptions[0],
        organisationSize: organisationSizeOptions[0],
        hearAbout: hearAboutOptions[0],
        questions: "",
      });
    } catch (error) {
      console.error("Unexpected error during signup:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="signup-page">
      <SignupConfirmationModal
        isOpen={submitSuccess}
        onClose={() => setSubmitSuccess(false)}
      />
      <section className="signup-hero">
        <div className="signup-hero__content">
          <div className="signup-hero__intro">
            <h1 className="signup-hero__eyebrow">Join the Beta</h1>
            <p className="signup-hero__headline">
              Be among the first to experience Matchero
            </p>
            <p className="signup-hero__body">
              Get early access,{" "}
              <span className="semibold">shape the future</span> of recruitment,
              and help us make hiring faster, fairer, and more human.
            </p>

            <div className="signup-hero__accordion">
              <details open>
                <summary>
                  <span
                    className="signup-hero__accordion-indicator"
                    aria-hidden="true"
                  />
                  <span>Who it&apos;s for</span>
                </summary>
                <p>
                  Matchero Beta is built for recruiters, hiring managers, and HR
                  teams who want to simplify hiring—from sourcing and screening
                  to interviewing and onboarding.
                </p>
                <p>
                  If you&apos;re building or scaling teams and want to make
                  faster, fairer hiring decisions, this is for you.
                </p>
              </details>
              <details>
                <summary>
                  <span
                    className="signup-hero__accordion-indicator"
                    aria-hidden="true"
                  />
                  <span>What you&apos;ll get</span>
                </summary>
                <ul>
                  <li>
                    Early access to Matchero&apos;s AI-powered recruitment
                    platform
                  </li>
                  <li>
                    Opportunity to shape new features with direct product
                    feedback
                  </li>
                  <li>Exclusive updates before public launch</li>
                  <li>Priority onboarding once we go live</li>
                </ul>
              </details>
              <details>
                <summary>
                  <span
                    className="signup-hero__accordion-indicator"
                    aria-hidden="true"
                  />
                  <span>How it works</span>
                </summary>
                <p>
                  Sign up with your work details to request beta access.
                  We&apos;re reviewing applications in waves—if selected,
                  you&apos;ll receive an onboarding email with next steps and
                  login details.
                </p>
                <p>
                  No credit card, no commitments—just early access and
                  collaboration.
                </p>
              </details>
              <details>
                <summary>
                  <span
                    className="signup-hero__accordion-indicator"
                    aria-hidden="true"
                  />
                  <span>Why join early</span>
                </summary>
                <p>
                  Join a growing network of forward-thinking recruiters and
                  teams redefining hiring. Early users get influence over
                  feature development and priority access to future tools and
                  integrations.
                </p>
              </details>
            </div>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <h2 className="signup-form__title">Sign up below</h2>

            <div className="signup-form__grid">
              <label className="signup-form__field">
                <span className="signup-form__field-label">
                  First name{" "}
                  <span className="signup-form__required" aria-hidden="true">
                    *
                  </span>
                </span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  required
                />
              </label>
              <label className="signup-form__field">
                <span className="signup-form__field-label">
                  Last name{" "}
                  <span className="signup-form__required" aria-hidden="true">
                    *
                  </span>
                </span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  required
                />
              </label>

              <label className="signup-form__field signup-form__field--full">
                <span className="signup-form__field-label">Company name</span>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company or organisation"
                />
              </label>

              <label className="signup-form__field">
                <span className="signup-form__field-label">
                  Email address{" "}
                  <span className="signup-form__required" aria-hidden="true">
                    *
                  </span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                />
              </label>
              <label className="signup-form__field">
                <span className="signup-form__field-label">Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </label>

              <label className="signup-form__field">
                <span className="signup-form__field-label">
                  Country/region{" "}
                  <span className="signup-form__required" aria-hidden="true">
                    *
                  </span>
                </span>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  {countryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="signup-form__field">
                <span className="signup-form__field-label">
                  Organisation size{" "}
                  <span className="signup-form__required" aria-hidden="true">
                    *
                  </span>
                </span>
                <select
                  name="organisationSize"
                  value={formData.organisationSize}
                  onChange={handleChange}
                  required
                >
                  {organisationSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="signup-form__field signup-form__field--full">
                <span className="signup-form__field-label">
                  How did you hear about Matchero
                </span>
                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                >
                  {hearAboutOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="signup-form__field signup-form__field--full">
                <span className="signup-form__field-label">Any questions?</span>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  placeholder="Ask us anything you like"
                  rows={4}
                />
              </label>
            </div>

            <p className="signup-form__fine-print">
              We&apos;ll use the information you provide to contact you about
              joining Matchero&apos;s beta program and related product updates.
              We respect your privacy and will never share your details with
              third parties. You can opt out at any time. See our{" "}
              <a href="/privacy-policy">Privacy Policy</a> for details.
            </p>

            {submitError && (
              <div className="signup-form__feedback signup-form__feedback--error">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              className="signup-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join the beta today"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;


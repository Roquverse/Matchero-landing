import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const PricingForm: React.FC = () => {
  const [formData, setFormData] = useState({
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="pricing-form-card">
      <h1 className="pricing-title">Request pricing</h1>

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
          <Input
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />
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
            <option value="nigeria">Nigeria</option>
            <option value="kenya">Kenya</option>
            <option value="south-africa">South Africa</option>
            <option value="ghana">Ghana</option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States</option>
            <option value="other">Other</option>
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
        >
          Book your demo
        </Button>
      </form>
    </div>
  );
};

export default PricingForm;

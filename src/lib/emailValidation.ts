// Common personal email domains to reject
const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "yandex.com",
  "zoho.com",
  "gmx.com",
  "live.com",
  "msn.com",
  "rediffmail.com",
  "qq.com",
  "163.com",
  "126.com",
  "sina.com",
  "naver.com",
  "daum.net",
];

/**
 * Validates if an email is a business email (not a personal email domain)
 * @param email - The email address to validate
 * @returns Object with isValid boolean and error message if invalid
 */
export const validateBusinessEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email || !email.trim()) {
    return { isValid: false, error: "Email is required" };
  }

  const trimmedEmail = email.trim().toLowerCase();

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }

  // Extract domain
  const domain = trimmedEmail.split("@")[1];

  // Check if domain is in personal email list
  if (PERSONAL_EMAIL_DOMAINS.includes(domain)) {
    return {
      isValid: false,
      error: "Please use a business email address (personal emails like Gmail, Yahoo, etc. are not accepted)",
    };
  }

  return { isValid: true };
};

/**
 * Checks if email domain is a common personal email provider
 * @param email - The email address to check
 * @returns boolean indicating if it's a personal email
 */
export const isPersonalEmail = (email: string): boolean => {
  const trimmedEmail = email.trim().toLowerCase();
  const domain = trimmedEmail.split("@")[1];
  return PERSONAL_EMAIL_DOMAINS.includes(domain || "");
};


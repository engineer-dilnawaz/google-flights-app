export const validateLoginForm = ({
  emailOrPhone,
  password,
}: {
  emailOrPhone: string;
  password: string;
}) => {
  const errors: {
    emailOrPhone?: string;
    password?: string;
  } = {};

  if (!emailOrPhone.trim()) {
    errors.emailOrPhone = "Email or phone is required.";
  }

  if (!password.trim()) {
    errors.password = "Password is required.";
  }

  return errors;
};

export const validateSignUpForm = ({
  name,
  emailOrPhone,
  password,
  termsAccepted,
}: {
  name: string;
  emailOrPhone: string;
  password: string;
  termsAccepted: boolean;
}) => {
  const errors: {
    name?: string;
    emailOrPhone?: string;
    password?: string;
    termsAccepted?: string;
  } = {};

  if (!name.trim()) {
    errors.name = "Name is required.";
  }

  if (!emailOrPhone.trim()) {
    errors.emailOrPhone = "Email or phone is required.";
  }

  if (!password.trim()) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (!termsAccepted) {
    errors.termsAccepted = "You must accept the terms.";
  }

  return errors;
};

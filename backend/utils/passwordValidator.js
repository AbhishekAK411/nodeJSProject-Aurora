//! Regex Pattern
//* const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,15}$/;

export const validator = (password) => {
  if (password.length < 8) {
    throw new Error("Password should be at least 8 characters.");
  }
  if (!/[A-Z]/.test(password)) {
    throw new Error(
      "Password should contain at least one uppercase character."
    );
  }
  if (!/[a-z]/.test(password)) {
    throw new Error(
      "Password should contain at least one lowercase character."
    );
  }
  if (!/\d/.test(password)) {
    throw new Error("Password should contain at least one digit.");
  }
  if (!/[!@#$%^&*]/.test(password)) {
    throw new Error("Password should contain at least one special character.");
  }
};
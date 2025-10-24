import React, { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (value) => {
    let strengthValue = "";
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (value.length === 0) strengthValue = "";
    else if (value.length < 6) strengthValue = "Weak";
    else if (hasUpper && hasLower && (hasNumber || hasSpecial)) strengthValue = "Strong";
    else strengthValue = "Medium";

    setStrength(strengthValue);
  };

  const getStrengthColor = () => {
    switch (strength) {
      case "Weak":
        return "#e74c3c"; // Red
      case "Medium":
        return "#f1c40f"; // Yellow
      case "Strong":
        return "#2ecc71"; // Green
      default:
        return "#ccc"; // Gray
    }
  };

  return (
    <div className="checker-container">
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        className="password-input"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => {
          const val = e.target.value;
          setPassword(val);
          checkStrength(val);
        }}
      />

      {strength && (
        <>
          <div className="strength-bar">
            <div
              className="strength-fill"
              style={{
                width:
                  strength === "Weak"
                    ? "33%"
                    : strength === "Medium"
                    ? "66%"
                    : "100%",
                backgroundColor: getStrengthColor(),
              }}
            ></div>
          </div>
          <p className="strength-text" style={{ color: getStrengthColor() }}>
            Strength: {strength}
          </p>
        </>
      )}

      <ul className="password-tips">
        <li>Use at least 8 characters</li>
        <li>Include uppercase and lowercase letters</li>
        <li>Add numbers and special symbols</li>
      </ul>
    </div>
  );
};

export default PasswordStrengthChecker;

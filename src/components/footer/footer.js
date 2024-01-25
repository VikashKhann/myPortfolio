import React from "react";
import "./footer.css";
const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "darkMode" : "lightMode"}`}>
      Copy Right &#169; 2023 Vikash Khanna. All Rights Received.
    </footer>
  );
};

export default Footer;

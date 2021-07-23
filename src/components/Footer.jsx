import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="App-footer">
      <p>© {currentYear} - All right reserved.</p>
    </footer>
  );
}

export default Footer;
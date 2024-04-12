import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <section className="links flex">
        <a href="#about_section">about</a>
        <a href="#project_section">projects</a>
        <a href="#contact_section">speaking</a>
        <a href="#about_section">uses</a>
      </section>
        <p className="copy_write">© 2024 spencer sharp. All rights reserve</p>
    </footer>
  );
};

export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-3 sm:footer-horizontal footer-center bg-base-100 shadow-sm text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Skill
          Shelf Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

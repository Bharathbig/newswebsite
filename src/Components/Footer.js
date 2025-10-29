 import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-1">&copy; 2025 BTV MEDIA NEWS. All rights reserved.</p>
        <small>
          Follow us on{" "}
          <a href="#" className="text-warning text-decoration-none">
            YouTube
          </a>
          ,{" "}
          <a href="#" className="text-warning text-decoration-none">
            Facebook
          </a>
          , and{" "}
          <a href="#" className="text-warning text-decoration-none">
            Instagram
          </a>
        </small>
      </footer>
    </>
  );
};

export default Footer;



import React from 'react';
import Newslogo from '../Images/Newslogo.svg'; // High-quality SVG/PNG

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-sm py-3 custom-navbar">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Left side: Logo */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img
              src={Newslogo}
              alt="News Logo"
              className="news-logo"
            />
            <span className="d-lg-none fw-bold fs-5 text-white">BTV News</span>
          </a>

          {/* Center: Title & Subtitle (hidden on mobile) */}
          <div className="mx-auto text-center d-none d-lg-flex flex-column align-items-center">
            <h1 className="mb-0 fw-bold site-title">BTV MEDIA NEWS</h1>
            <p className="mb-0 site-subtitle">Your Trusted Daily Source for Truth & Trends</p>
          </div>

          {/* Right side: Toggler */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold text-uppercase nav-list d-flex gap-3">
            <li className="nav-item">
              <a className="nav-link active d-flex align-items-center gap-2" href="#">
                <i className="bi bi-house-door"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-broadcast"></i>News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-cpu"></i>Tech
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-briefcase"></i>Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-trophy"></i>Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-film"></i>Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-envelope"></i>Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-people"></i>Reporters
              </a>
            </li>
          </ul>
        </div>

      </nav>

      {/* Custom styles */}
      <style jsx>{`
        .custom-navbar {
          background: linear-gradient(to right, #001F3F, #0074D9);
        }

        .news-logo {
          width: 70px;
          height: auto;
          object-fit: contain;
        }

        .site-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.1rem;
          color: #ffffff;
          letter-spacing: 2px;
        }

        .site-subtitle {
          font-family: 'Open Sans', sans-serif;
          font-size: 0.9rem;
          color: #d0d0d0;
          letter-spacing: 1px;
        }

        .nav-list .nav-link {
          color: #ffffff !important;
          padding: 8px 12px;
          transition: background 0.3s ease, color 0.3s ease;
          border-radius: 5px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .nav-list .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.15);
          color: #ffd700 !important;
        }

        .nav-list .nav-link i {
          font-size: 1.1rem;
        }

        /* Reduce gaps on smaller screens */
        @media (max-width: 991px) {
          .site-title, .site-subtitle {
            display: none;
          }

          .news-logo {
            width: 50px;
          }

          .nav-list {
            gap: 1rem;
          }
        }
      `}</style>

      {/* Google Fonts & Bootstrap Icons */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />
    </header>
  );
};

export default Header;

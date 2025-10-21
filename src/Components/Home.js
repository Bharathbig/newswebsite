import React from 'react';

const featuredNews = [
  {
    id: 1,
    title: 'Breaking: New Tech Revolutionizes AI Industry',
    summary: 'AI breakthroughs continue as new models enhance machine learning capabilities.',
    image: 'https://source.unsplash.com/600x400/?technology,ai',
    category: 'Tech',
  },
  {
    id: 2,
    title: 'Local Sports Team Wins Championship',
    summary: 'An incredible comeback leads the local team to victory in the finals.',
    image: 'https://source.unsplash.com/600x400/?sports,football',
    category: 'Sports',
  },
  {
    id: 3,
    title: 'Job Market Trends 2025: What to Expect',
    summary: 'Experts predict evolving industries and emerging roles to watch this year.',
    image: 'https://source.unsplash.com/600x400/?jobs,office',
    category: 'Jobs',
  },
  {
    id: 4,
    title: 'Entertainment Spotlight: Upcoming Movie Releases',
    summary: 'A look at the most anticipated films hitting theaters this season.',
    image: 'https://source.unsplash.com/600x400/?cinema,movie',
    category: 'Entertainment',
  },
];

const HomePage = () => {
  return (
    <main className="homepage">
      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5 px-3">
        <h2>Welcome to BTV MEDIA NEWS</h2>
        <p className="lead mt-3">Stay informed with the latest updates in Tech, Sports, Jobs, and Entertainment</p>
        <a href="#featured" className="btn btn-warning btn-lg mt-4">Explore Featured News</a>
      </section>

      {/* Featured News Grid */}
      <section id="featured" className="featured-news container my-5">
        <h3 className="mb-4 text-center">Featured News</h3>
        <div className="row g-4">
          {featuredNews.map(({ id, title, summary, image, category }) => (
            <div key={id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-primary mb-2 align-self-start">{category}</span>
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text flex-grow-1">{summary}</p>
                  <a href="#" className="btn btn-outline-primary mt-auto align-self-start">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-1">&copy; 2025 BTV MEDIA NEWS. All rights reserved.</p>
        <small>Follow us on <a href="#" className="text-warning text-decoration-none">Twitter</a>, <a href="#" className="text-warning text-decoration-none">Facebook</a>, and <a href="#" className="text-warning text-decoration-none">Instagram</a></small>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #003366, #0055a5);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.4);
        }

        .card-img-top {
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          height: 180px;
          object-fit: cover;
        }

        .footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 767px) {
          .card-img-top {
            height: 140px;
          }
        }
      `}</style>
    </main>
  );
};

export default HomePage;

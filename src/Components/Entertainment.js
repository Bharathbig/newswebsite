import React, { useEffect, useState } from "react";

const Entertainment = () => {
  const [entertainmentNews, setEntertainmentNews] = useState([
    {
      id: 1,
      title: "‘Dune: Part Three’ Officially Announced by Legendary Pictures",
      image:
        "https://images.unsplash.com/photo-1608178398319-48f814d0750c?auto=format&fit=crop&w=1200&q=80",
      category: "Movies",
      date: "October 30, 2025",
      description:
        "Following the success of Dune: Part Two, director Denis Villeneuve confirmed that production for Dune: Part Three is officially underway. Fans can expect even grander visuals and a deeper dive into Arrakis.",
    },
    {
      id: 2,
      title: "Taylor Swift’s World Tour Breaks All-Time Streaming Record",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      category: "Music",
      date: "October 29, 2025",
      description:
        "Taylor Swift’s record-breaking global tour becomes the most streamed concert event in history, drawing millions of fans worldwide and setting new benchmarks for live performance broadcasting.",
    },
    {
      id: 3,
      title: "Netflix to Launch India’s First Interactive Drama Series",
      image:
        "https://images.unsplash.com/photo-1598899134739-24c46f58b8c1?auto=format&fit=crop&w=1200&q=80",
      category: "Streaming",
      date: "October 28, 2025",
      description:
        "Netflix India is experimenting with interactive storytelling, allowing audiences to shape the plot and character arcs through on-screen choices — a first for Indian streaming content.",
    },
    {
      id: 4,
      title: "Oscar Buzz Builds Around Christopher Nolan’s New Sci-Fi Thriller",
      image:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
      category: "Hollywood",
      date: "October 27, 2025",
      description:
        "Critics are already hailing Nolan’s latest movie as a visual masterpiece and a strong contender for multiple Academy Awards, including Best Director and Best Cinematography.",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="entertainment-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">Entertainment Buzz</h2>
          <p className="text-muted mb-0">
            Discover the latest updates from movies, music, and pop culture.
          </p>
        </div>

        <div className="row g-4">
          {entertainmentNews.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="card entertainment-card h-100 shadow-sm border-0">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-warning text-dark mb-2">
                    {item.category}
                  </span>
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-muted small mb-2">
                    <i className="bi bi-calendar-date me-1"></i>
                    {item.date}
                  </p>
                  <p className="card-text flex-grow-1">{item.description}</p>
                  <a href="#" className="btn btn-outline-warning mt-auto text-dark fw-semibold">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-title {
          color: #b8860b;
          letter-spacing: 1px;
        }

        .entertainment-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }

        .entertainment-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .entertainment-card img {
          height: 220px;
          object-fit: cover;
        }

        .card-title {
          color: #b8860b;
        }

        .btn-outline-warning:hover {
          background-color: #b8860b;
          color: #fff !important;
          border-color: #b8860b;
        }
      `}</style>
    </section>
  );
};

export default Entertainment;

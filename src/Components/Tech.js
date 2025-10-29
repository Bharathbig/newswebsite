import React, { useEffect, useState } from "react";

const Tech = () => {
  const [techNews, setTechNews] = useState([
    {
      id: 1,
      title: "AI Revolutionizes Healthcare Diagnostics",
      image:
        "https://images.unsplash.com/photo-1581093588401-22f63627a1d2?auto=format&fit=crop&w=1200&q=80",
      category: "AI & Healthcare",
      date: "October 30, 2025",
      description:
        "AI-powered tools are now outperforming human doctors in detecting early-stage diseases, marking a paradigm shift in healthcare technology.",
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough Promises Faster Encryption",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      category: "Quantum Tech",
      date: "October 29, 2025",
      description:
        "Researchers announced a breakthrough quantum chip design that can process cryptographic algorithms 100x faster than current systems.",
    },
    {
      id: 3,
      title: "Next-Gen Smartphones to Feature Built-in AI Companions",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      category: "Mobile",
      date: "October 28, 2025",
      description:
        "Tech companies are integrating personal AI companions directly into phones, enabling offline reasoning and real-time learning capabilities.",
    },
    {
      id: 4,
      title: "Startups Race to Build Eco-Friendly Data Centers",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
      category: "Green Tech",
      date: "October 27, 2025",
      description:
        "A wave of innovation is reshaping data infrastructure, with startups building solar-powered, carbon-neutral server farms.",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="tech-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">Tech Updates</h2>
          <p className="text-muted mb-0">
            Discover the latest innovations and trends in technology shaping the
            future.
          </p>
        </div>

        <div className="row g-4">
          {techNews.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="card tech-card h-100 shadow-sm border-0">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-info mb-2">{item.category}</span>
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-muted small mb-2">
                    <i className="bi bi-calendar-date me-1"></i>
                    {item.date}
                  </p>
                  <p className="card-text flex-grow-1">{item.description}</p>
                  <a href="#" className="btn btn-outline-info mt-auto">
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
          color: #004085;
          letter-spacing: 1px;
        }

        .tech-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }

        .tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .tech-card img {
          height: 220px;
          object-fit: cover;
        }

        .card-title {
          color: #001f3f;
        }

        .btn-outline-info {
          color: #004085;
          border-color: #004085;
        }

        .btn-outline-info:hover {
          background-color: #004085;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Tech;

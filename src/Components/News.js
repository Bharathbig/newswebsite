import React, { useEffect, useState } from "react";

const News = () => {
  // Example static news data — you can replace this with API data later
  const [latestNews, setLatestNews] = useState([
    {
      id: 1,
      title: "Global Summit 2025: World Leaders Pledge Climate Action",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
      category: "World",
      date: "October 30, 2025",
      description:
        "In a historic gathering, world leaders committed to aggressive carbon reduction targets aiming to achieve net-zero emissions by 2040.",
    },
    {
      id: 2,
      title: "Tech Giants Unveil Breakthrough in AI-Powered Search",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      category: "Technology",
      date: "October 29, 2025",
      description:
        "A new AI-powered search engine redefines how information is accessed — delivering context-aware, conversational answers.",
    },
    {
      id: 3,
      title: "Stock Markets Rally as Inflation Eases",
      image:
        "https://images.unsplash.com/photo-1569025690938-a00729c9e1c6?auto=format&fit=crop&w=1200&q=80",
      category: "Business",
      date: "October 28, 2025",
      description:
        "Global markets surged today following reports of cooling inflation and optimistic forecasts for economic recovery.",
    },
    {
      id: 4,
      title: "New Space Telescope Captures Stunning Deep-Space Images",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
      category: "Science",
      date: "October 27, 2025",
      description:
        "NASA’s latest space telescope transmitted breathtaking images of distant galaxies, providing new insights into cosmic evolution.",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <section className="news-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">Latest News</h2>
          <p className="text-muted mb-0">
            Stay updated with the most recent happenings around the globe.
          </p>
        </div>

        <div className="row g-4">
          {latestNews.map((news) => (
            <div className="col-md-6 col-lg-4" key={news.id}>
              <div className="card news-card h-100 shadow-sm border-0">
                <img
                  src={news.image}
                  className="card-img-top"
                  alt={news.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-primary mb-2">{news.category}</span>
                  <h5 className="card-title fw-bold">{news.title}</h5>
                  <p className="card-text text-muted small mb-2">
                    <i className="bi bi-calendar-date me-1"></i>
                    {news.date}
                  </p>
                  <p className="card-text flex-grow-1">{news.description}</p>
                  <a href="#" className="btn btn-outline-primary mt-auto">
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
          color: #001f3f;
          letter-spacing: 1px;
        }

        .news-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }

        .news-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .news-card img {
          height: 220px;
          object-fit: cover;
        }

        .card-title {
          color: #001f3f;
        }

        .btn-outline-primary {
          color: #001f3f;
          border-color: #001f3f;
        }

        .btn-outline-primary:hover {
          background-color: #001f3f;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default News;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsElements = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch live news using NewsAPI (replace YOUR_API_KEY_HERE)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=8&apiKey=YOUR_API_KEY_HERE`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className="news-page container py-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Latest Headlines</h2>

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3 text-muted">Fetching the latest news...</p>
        </div>
      ) : (
        <div className="row g-4">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                <img
                  src={article.urlToImage || "https://via.placeholder.com/400x250"}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">
                    {article.title ? article.title.slice(0, 70) : "Untitled"}
                  </h5>
                  <p className="card-text text-muted flex-grow-1">
                    {article.description
                      ? article.description.slice(0, 120)
                      : "No description available."}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-auto rounded-pill"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .news-page {
          min-height: 100vh;
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .card-img-top {
          height: 200px;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .card-img-top {
            height: 160px;
          }
        }
      `}</style>
    </main>
  );
};

export default NewsElements;

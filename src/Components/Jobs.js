import React, { useEffect, useState } from "react";

const Jobs = () => {
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      title: "Frontend Developer (React.js)",
      company: "TechNova Solutions",
      location: "Bangalore, India",
      date: "October 30, 2025",
      image:
        "https://images.unsplash.com/photo-1581091870627-3c52a30a91b4?auto=format&fit=crop&w=1200&q=80",
      description:
        "We’re looking for a skilled React.js developer to join our growing engineering team and build engaging web experiences.",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "InsightEdge Analytics",
      location: "Mumbai, India",
      date: "October 29, 2025",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Join a fast-paced analytics startup and help uncover actionable business insights through data visualization and modeling.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "PixelWorks Studio",
      location: "Remote",
      date: "October 28, 2025",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
      description:
        "We’re hiring creative designers to craft delightful user experiences for mobile and web products.",
    },
    {
      id: 4,
      title: "Backend Engineer (Node.js)",
      company: "CloudSphere Technologies",
      location: "Hyderabad, India",
      date: "October 27, 2025",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      description:
        "Develop scalable APIs and cloud services using Node.js, Express, and MongoDB. Experience with AWS is a plus.",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="jobs-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">Job Openings</h2>
          <p className="text-muted mb-0">
            Explore the latest tech and media jobs available across industries.
          </p>
        </div>

        <div className="row g-4">
          {jobListings.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <div className="card job-card h-100 shadow-sm border-0">
                <img
                  src={job.image}
                  className="card-img-top"
                  alt={job.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-success mb-2">{job.company}</span>
                  <h5 className="card-title fw-bold">{job.title}</h5>
                  <p className="card-text text-muted small mb-1">
                    <i className="bi bi-geo-alt-fill me-1"></i>
                    {job.location}
                  </p>
                  <p className="card-text text-muted small mb-2">
                    <i className="bi bi-calendar-date me-1"></i>
                    {job.date}
                  </p>
                  <p className="card-text flex-grow-1">{job.description}</p>
                  <a href="#" className="btn btn-outline-success mt-auto">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-title {
          color: #155724;
          letter-spacing: 1px;
        }

        .job-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }

        .job-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .job-card img {
          height: 220px;
          object-fit: cover;
        }

        .card-title {
          color: #155724;
        }

        .btn-outline-success {
          color: #155724;
          border-color: #155724;
        }

        .btn-outline-success:hover {
          background-color: #155724;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Jobs;

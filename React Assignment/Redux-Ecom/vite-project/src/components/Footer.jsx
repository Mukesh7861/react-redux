
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="bg-body-tertiary text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <Link
            className="btn btn-floating text-white m-1"
            style={{ backgroundColor: "#3b5998" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>

          {/* Twitter */}
          <Link
            className="btn btn-floating text-white m-1"
            style={{ backgroundColor: "#55acee" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </Link>

          {/* Instagram */}
          <Link
            className="btn btn-floating text-white m-1"
            style={{ backgroundColor: "#ac2bac" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </Link>

          {/* LinkedIn */}
          <Link
            className="btn btn-floating text-white m-1"
            style={{ backgroundColor: "#000" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>

          {/* GitHub */}
          <Link
            className="btn btn-floating text-white m-1"
            style={{ backgroundColor: "#333333" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </Link>
        </section>
      </div>

      {/* Copyright Section */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)"}}
      >
        © 2025 Copyright:{" "}
        <Link className="text-body" to="https://github.com/MukeshMeena7861">
          MUKESHKUMARMEENA7861@gmail.com
        </Link>
      </div>
    </footer>
    </>
  );
};

export default Footer;

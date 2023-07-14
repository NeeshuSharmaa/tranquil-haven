import { Link } from "react-router-dom";
import "./NotFound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <img src="/assets/images/not-found.jpg" alt="404" />
      <Link to="/">
        <button>
          <FontAwesomeIcon icon={faArrowLeftLong} />
          <span>Go back Home</span>
        </button>
      </Link>
    </div>
  );
}

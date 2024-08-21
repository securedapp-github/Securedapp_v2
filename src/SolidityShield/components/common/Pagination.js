import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pagination.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  return (
    <div className="sss-pagination-container">
      <div className="sss-pagination">
        <div className="sss-pagination-items">Showing 5 from 1 - 10</div>
        <div className="sss-pagination-buttons">
          <div className="sss-pagination-button-container">
            <FontAwesomeIcon
              className="sss-pagination-button"
              icon={faChevronLeft}
            />
          </div>
          <div className="sss-pagination-button-container sss-pagination-current-button">
            <div className="sss-pagination-button">1</div>
          </div>
          <div className="sss-pagination-button-container">
            <div className="sss-pagination-button">2</div>
          </div>
          <div className="sss-pagination-button-container">
            <FontAwesomeIcon
              className="sss-pagination-button"
              icon={faChevronRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

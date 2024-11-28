
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const TopCategoryArea = () => {
  return (
    <section className="top_catagory_area d-md-flex clearfix">
      {/* Single Category */}
      <div
        className="single_catagory_area d-flex align-items-center bg-img"
        style={{ backgroundImage: "url(assets/img/bg-img/bg-2.jpg)" }}
      >
        <div className="catagory-content">
          <h6>On Accessories</h6>
          <h2>Sale 30%</h2>
          <Link to="/accessories" className="btn karl-btn">
            {" "}
            {/* Use Link here */}
            SHOP NOW
          </Link>
        </div>
      </div>

      {/* Single Category */}
      <div
        className="single_catagory_area d-flex align-items-center bg-img"
        style={{ backgroundImage: "url(assets/img/bg-img/bg-3.jpg)" }}
      >
        <div className="catagory-content">
          <h6>In Bags excepting the new collection</h6>
          <h2>Designer bags</h2>
          <Link to="/bags" className="btn karl-btn">
            {" "}
            {/* Use Link here */}
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCategoryArea;

import { useNavigate } from "react-router";
import styles from "./classes.module.css";

const JoinOurClub = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["join-our-club"]} data-aos="zoom-in">
      <div>
        <h2>Join Our Club</h2>
        <p>
          Get a chance to get customised suggestions along with regular support from Ela Gupta.
        </p>
        <button onClick={() => navigate("/contact")}>Start Now</button>
      </div>
    </div>
  );
};

export default JoinOurClub;

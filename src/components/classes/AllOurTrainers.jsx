import { Link } from "react-router-dom";

import styles from "./classes.module.css";
import { allOurTrainersData } from "../../data/data";

const AllOurTrainers = () => {
  return (
    <div className={`${styles["all-trainers"]} container sections-padding`}>
      <div className={styles["trainers-text"]}>
        <p className="paragraph">Our Classes and Trainings</p>
        <h2>We Trained You to Gain</h2>
      </div>
      <div className={styles.classes}>
        {allOurTrainersData.map((ele) => {
          return (
            <div key={ele.id} data-aos="fade-right">
              <img src={ele.image} alt="" />
              <h3>{ele.title}</h3>
              <p>Will be customised according to the body.</p>
              {/* <Link to={ele.ti}>Read More</Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOurTrainers;

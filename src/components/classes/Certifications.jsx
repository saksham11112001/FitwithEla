import { Link } from "react-router-dom";

import styles from "./classes.module.css";
import { allOurTrainersData } from "../../data/data";
import { certificateData } from "../../data/data";

const certifications = () => {
  return (
    <div className={`${styles["all-trainers"]} container sections-padding`}>
      <div className={styles["trainers-text"]}>
        <p className="paragraph">Certifications of the trainer</p>
        
      </div>
      <div className={styles.classes}>
        {certificateData.map((ele) => {
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

export default certifications;

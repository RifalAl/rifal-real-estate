import CountUp from "react-countup";
import styles from "./CountNumber.module.css";
const CountNumber = ({ start, end, duration, title }) => {
  return (
    <div className={`flex-col-center ${styles.stat}`}>
      <span className={`${styles["count-number"]}`}>
        <CountUp start={start} end={end} duration={duration} />
        <span className={`${styles["count-icon"]}`}>+</span>
      </span>
      <span className="secondary-text">{title}</span>
    </div>
  );
};

export default CountNumber;

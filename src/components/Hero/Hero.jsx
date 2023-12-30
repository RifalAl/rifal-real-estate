import CountNumber from "./CountNumber";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles["hero-wrapper"]}`}>
      <div
        className={`paddings inner-width flex-center ${styles["hero-container"]}`}
      >
        {/* //* left side */}
        <div className={`flex-col-start ${styles["hero-left"]}`}>
          <div className={`${styles["hero-title"]}`}>
            <div className={`${styles["orange-circle"]}`}></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div
            className={`flex-col-start secondary-text ${styles["hero-des"]}`}
          >
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className={`flex-center ${styles["search-bar"]}`}>
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className={`flex-center ${styles.stats}`}>
            <CountNumber
              start={8000}
              end={15000}
              duration={4}
              title="Premium Products"
            />
            <CountNumber
              start={1950}
              end={2000}
              duration={4}
              title="Happy Customers"
            />
            <CountNumber end={28} title="Awards Winnings" />
          </div>
        </div>
        {/* //*right side */}
        <div className={`flex-center ${styles["hero-right"]}`}>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className={`img-container`}
          >
            <img src="./hero-image.png" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

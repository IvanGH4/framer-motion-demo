import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/anims.module.css";

const variants = {
  even: {
    backgroundColor: "#fcf",
    color: "#383838",
    borderRadius: 20,
    rotate: 90,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  odd: {
    backgroundColor: "#a2e",
    color: "#dbff10",
    borderRadius: 0,
    rotate: 0,
    scale: 1.2,
    transition: {
      duration: 0.4,
    },
  },
};

const Animate = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2 className={styles.title}>Animate using variants</h2>
      <motion.div
        className={styles.circle}
        variants={variants}
        animate={counter % 2 === 0 ? "even" : "odd"}
      >
        {counter}
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        onClick={() => setCounter((prev) => prev + 1)}
        className={styles.btn}
      >
        Hit it!
      </motion.button>
    </>
  );
};

export default Animate;

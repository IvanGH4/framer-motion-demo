import React from "react";
import { useTransform, useMotionValue, motion } from "framer-motion";
import styles from "../styles/anims.module.css";

const Transform = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-200, 0, 200],
    [ "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
      "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
      "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
    ]
  );

  return (
    <motion.div className='container' style={{ background }}>
      <h2 className={styles.title}>Transform on drag</h2>
      <motion.div
        className={styles.box}
        style={{ x }}
        drag='x'
        dragConstraints={{ left: -200, right: 200 }}
        whileHover={{ scale: 1.1 }}
        whileDrag={{ scale: 0.9 }}
      />
    </motion.div>
  );
};

export default Transform;

import React from "react";
import { useTransform, useMotionValue, motion } from "framer-motion";
import styles from "../styles/anims.module.css";

const Transform = () => {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(
    x,
    [-200, 0, 200],
    ["#0f0", "#f00", "#00f"]
  );

  return (
    <div className='container'>
      <h2 className={styles.title}>Transform on drag</h2>
      <motion.div
        className={styles.box}
        style={{ x, backgroundColor }}
        drag='x'
        dragConstraints={{ left: -200, right: 200 }}
      />
    </div>
  );
};

export default Transform;

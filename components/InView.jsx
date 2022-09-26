import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "../styles/anims.module.css";

const InView = () => {
  const { ref, inView } = useInView({
    threshold: 0.35
  });

  return (
    <section ref={ref} className={styles.viewSection}>
      <motion.article
        initial={{ x: "-100vh", opacity: 0 }}
        animate={{ x: inView ? "0" : "-100vh", opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 90, delay: 0.2 }}
      >
        <h2>Something!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima
          ut dolores quas recusandae dolorem voluptatem velit asperiores
          mollitia quia!
        </p>
      </motion.article>
    </section>
  );
};

export default InView;

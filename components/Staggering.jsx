import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/anims.module.css";

const Staggering = () => {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://reqres.in/api/users");
      const results = await res.json();
      setUsers(results?.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Users
      </motion.h2>

      {/* With indices */}
      <ul className={styles.list}>
        {users && users.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{
              opacity: 0,
              translateX: idx % 2 === 0 ? -100 : 100,
              translateY: 50,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.3 }}
            className={styles.listItem}
          >
            {item.first_name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Staggering;

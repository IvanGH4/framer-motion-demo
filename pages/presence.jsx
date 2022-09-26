import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/anims.module.css";

const Presence = () => {
  const [cardData, setCardData] = useState(undefined);
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
    <div className='container'>
      <h2 className={styles.title}>Animate presence</h2>
      <div>
        {users?.map((item, idx) => (
          <div key={idx}>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className={styles.clickable}
              onClick={() => setCardData(item)}
            >
              {item.first_name} {item.last_name}
            </motion.h3>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {cardData && (
          <motion.div
            key="card"
            className={styles.card}
            initial={{ scale: 0, y: '100vh', position: 'absolute' }}
            animate={{ opacity: 1, scale: 1, y: '-25%' }}
            exit={{ opacity: 0, scale: 0, y: '100vh' }}
          >
            <p>Id: {cardData.id}</p>
            <p>
              Full name: {cardData.first_name} {cardData.last_name}
            </p>
            <p>Email: {cardData.email}</p>
            <button onClick={() => setCardData(undefined)}>Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Presence;

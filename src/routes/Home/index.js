import React from 'react';
import styles from './style.scss';

const Home = () => (
  <section className={styles.home}>
    <div className={styles.content}>
      <h1 className={styles.title}>Melvin Hernandez</h1>
      <h2 className={styles.subtitle}>aspiring software developer {'&'} <br /> computer science educator</h2>
    </div>
  </section>
);

export default Home;

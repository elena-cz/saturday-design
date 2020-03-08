import React from 'react';
import styles from './tutorialSection.module.scss';

import Title from './title';

const tutorialsSection = () => (
  <section className={styles.section}>
    <Title text="tutorials" htag="h2" />

    <div className={styles.container}></div>
  </section>
);

export default tutorialSection;

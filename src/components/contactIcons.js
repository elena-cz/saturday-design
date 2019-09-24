import React from 'react';
import styles from './contactIcons.module.scss';

const ContactIcons = () => (
  <div className={styles.iconContainer}>
    <a
      className={`link-button ${styles.iconButton}`}
      href="https://www.linkedin.com/in/elenaczubiak"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <path d="M2 9H6V21H2z" />
        <circle cx={4} cy={4} r={2} />
      </svg>
    </a>
    <a
      className={`link-button ${styles.iconButton}`}
      href="https://github.com/elena-cz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    </a>

    <a
      className={`link-button ${styles.iconButton}`}
      href="mailto:elena@saturdaydesign.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6L12 13 2 6" />
      </svg>
    </a>
  </div>
);

export default ContactIcons;

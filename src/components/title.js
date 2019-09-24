import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ text, htag }) => (
  <div>
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {htag === 'h1' ? <h1>{text}</h1> : <h2>{text}</h2>}

      <div className={`${htag}-underline`} />
    </div>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  htag: PropTypes.string,
};

Title.defaultProps = {
  htag: 'h1',
};

export default Title;

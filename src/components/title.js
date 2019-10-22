import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ text, htag, center }) => (
  <div
    style={
      center
        ? {
            display: 'flex',
            justifyContent: 'center',
          }
        : {}
    }
  >
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {htag === 'h2' ? (
        <h2>
          <a id={text}></a>
          {text}
        </h2>
      ) : (
        <h3>
          <a id={text}></a>
          {text}
        </h3>
      )}

      <div className={`${htag}-underline`} />
    </div>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  htag: PropTypes.string,
  center: PropTypes.bool,
};

Title.defaultProps = {
  htag: 'h2',
  center: false,
};

export default Title;

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './nav.module.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      enableOutline: false,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    // Detect a keyboard user from a tab key press
    const isTabEvent = e.keyCode === 9;

    if (isTabEvent) {
      this.setState({ enableOutline: true });
    }
  };

  toggleNav = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  linkItem = page => (
    <Link
      to={`/#${page}`}
      className="link-button no-border-button"
      onClick={this.toggleNav}
    >
      {page}
    </Link>
  );

  render() {
    const { page } = this.props;
    const { isOpen, enableOutline } = this.state;
    const { toggleNav, linkItem } = this;

    return (
      <nav className={styles.nav}>
        <button
          className={`hamburger hamburger--collapse ${styles.toggleButton} ${
            isOpen ? 'is-active' : ''
          } ${enableOutline ? '' : 'no-outline-on-focus'}`}
          type="button"
          onClick={toggleNav}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>

        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          {linkItem('projects')}
          {linkItem('about')}
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  page: PropTypes.string,
};

Nav.defaultProps = {
  page: 'home',
};

export default Nav;

import React from 'react';
import PropTypes from 'prop-types';

import Name from './Name';
import Address from './Address';
import Favorites from './Favorites';

const propTypes = {};
const defaultProps = {};

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="landing-container">
        <div className="landing-header">Yup</div>
        <span className="landing-settingsTitle">Yup Settings</span>
        <Name />
        <Address />
        <Favorites />
      </div>
    );
  }
}

Landing.propTypes = propTypes;
Landing.defaultProps = defaultProps;

export default Landing;

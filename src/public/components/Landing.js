import React from 'react';
import Name from './Name';
import Address from './Address';
import Favorites from './Favorites';

const Landing = () => (
  <div className="landing-container">
    <div className="landing-header">Motorcycle Magazine</div>
    <span className="landing-settingsTitle">Motorcycle Magazine Settings</span>
    <Name />
    <Address />
    <Favorites />
  </div>
);

export default Landing;

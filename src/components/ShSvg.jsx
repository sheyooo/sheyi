import React from 'react';

import js from './../assets/technologies/js.svg';
import nodejs from './../assets/technologies/nodejs.svg';

const svgDict = {
  js: js,
  nodejs: nodejs
};

export default (props) => (
  <img style={{width: '100%'}} src={svgDict[props.icon]} alt={props.icon} />
);

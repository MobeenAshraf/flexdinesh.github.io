import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/MobeenAshraf" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/6215574/mobeen" style={ { color: colorPrimary } }><i className="fab fa-stack-overflow"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mobeen-ashraf/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
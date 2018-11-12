import React from 'react';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

import './shcard.scss';

import ShSvg from './../components/ShSvg';

export default class ShCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFullScreen: false
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  handleClick = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    }, () => {
      if (this.state.isFullScreen) {
        disableBodyScroll();
      } else {
        clearAllBodyScrollLocks();
      }
    });
  }

  render() {
    const props = this.props;
    let containerClass = 'p-3 flex flex-col projects-card';
    let iconContainerClass = 'w-1/4 sm:w-1/6 md:w-1/6';

    if (this.state.isFullScreen) {
      containerClass += ' full-screen';
      // iconContainerClass = 'w-1/4 sm:w-1/6 md:w-1/12';
    }

    return (
      <div onClick={this.handleClick} style={{height: '100%'}} className={containerClass}>
        <div>
          <b>{props.companyName} ({props.companyLocation})</b>
          <p>{props.role}</p>
          <small>{props.timeline}</small>
        </div>
        <div className="projects-card__divider"></div>
        <p className="flex-1 overflow-auto projects-card__description">{props.description}</p>
        {/* <div className="projects-card__divider"></div> */}
        <div className="projects-card__technologies">
          <div className="flex flex-wrap -mx-2">
            {
              props.technologies.map(icon => (
                <div className={iconContainerClass + ' px-2'} key={icon}>
                  <ShSvg icon={icon} />
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
    );
  }

}
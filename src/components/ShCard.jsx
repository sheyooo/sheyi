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
    const state = this.state;
    const props = this.props;
    let containerClass = 'p-3 flex flex-col projects-card';
    let iconContainerClass = 'w-1/4 sm:w-1/6 md:w-1/6'; 

    if (state.isFullScreen) {
      containerClass += ' full-screen';
      // iconContainerClass = 'w-1/4 sm:w-1/6 md:w-1/12';
    }

    return (
      <div style={{height: '100%'}} className={containerClass}>
        <div>
          <b>{props.companyName} ({props.companyLocation})</b>
          <p>{props.role}</p>
          <small>{props.timeline}</small>
        </div>
        <div className="projects-card__divider"></div>
        <div className="projects-card__content flex flex-col flex-grow">
          <p className="projects-card__description">{props.description}</p>

          <div className="projects-card__technologies">
            <div className="flex flex-wrap">
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

        <div onClick={this.handleClick} className="projects-card__expand-button -mx-3 -mb-3">
          <div className="flex justify-around">
            <div style={{width: 40}} className="w-1/4 pt-3">
              <ShSvg icon={state.isFullScreen ? 'cancel' : 'threeDotsHorizontal'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
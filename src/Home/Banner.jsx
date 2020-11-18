import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
// import { Button } from 'antd';
import { Element } from 'rc-scroll-anim';
import BannerImage from './BannerImage';
import { assets } from './data';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ?
              <img width="100%" src={`${assets}/image/home/intro-landscape-3a409.svg`} alt="" />
              :
              <BannerImage />}
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 key="h1">Eighth Fund</h1>
            <p className="main-info" key="p">
              Eighth Fund is a Financial Services company built for
              Americans who were raised in the 90s and 2000s.
              We put emphasis on transparency, simplicity, and output.
              Right now we offer youth trading services, wealth management, and savings accounts.
            </p>
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;

import React from "react";
import PropTypes from "prop-types";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
// import { Button } from 'antd';
// import { Element } from 'rc-scroll-anim';
// import BannerImage from './BannerImage';
// import { assets } from './data';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    // navToShadow: PropTypes.func,
  };
  static defaultProps = {
    className: "banner",
  };
  render() {
    const { className, isMobile } = this.props;
    return (
      <div className={className} style={{alignContent: "center", justifyContent: "center"}}>
        <QueueAnim type={isMobile ? "bottom" : "right"} delay={300}>
          <img
            src="https://res.cloudinary.com/standard-crypto/image/upload/v1617483065/Vector_rpcjz8.svg"
            alt="Standard"
            style={{
              width: "70vw",
              marginLeft: "15vw",
              marginRight: "15vw",
              marginTop: "40vh",
              marginBottom: "10vh",
            }}
          />
          <h3 className='main-info' style={{
            textAlign: "center"
          }}>
            Building the future.
          </h3>
        </QueueAnim>
      </div>
    );
  }
}

export default Banner;

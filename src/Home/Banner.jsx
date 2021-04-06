import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
// import { Button } from 'antd';
// import { Element } from 'rc-scroll-anim';
// import BannerImage from './BannerImage';
// import { assets } from './data';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    // navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    // const { className, isMobile, navToShadow } = this.props;
    const { className, isMobile } = this.props;
    return (
      // <Element component="section" className={`${className}-wrapper page`}
      // onChange={navToShadow}>
      //   <div className={className}>
      //     {/* <div className={`${className}-img-wrapper`}>
      //       {isMobile ?
      //         <img width="100%" src={`${assets}/image/home/intro-landscape-3a409.svg`} alt="" />
      //         :
      //         <BannerImage />}
      //     </div> */}
      //     <QueueAnim
      //       type={isMobile ? 'bottom' : 'right'}
      //       className={`${className}-text-wrapper`}
      //       delay={300}
      //     >
      //       <img src="https://res.cloudinary.com/standard-crypto/image/upload/v1617483065/Vector_rpcjz8.svg" alt="Standard" style={{width: "70vw"}}/>
      //       {/* <p className="main-info" key="p">Standard Crypto is
      // developing decentralized financial services to give consumers the fastest,
      // cheapest and most diverse
      // suite of financial options in history.</p> */}
      //     </QueueAnim>
      //   </div>
      // </Element>
      <div className={className}>
        {/* <div className={`${className}-img-wrapper`}>
          {isMobile ?
            <img width="100%" src={`${assets}/image/home/intro-landscape-3a409.svg`} alt="" />
            :
            <BannerImage />}
        </div> */}
        <QueueAnim
          type={isMobile ? 'bottom' : 'right'}
          delay={300}
        >
          <img
            src="https://res.cloudinary.com/standard-crypto/image/upload/v1617483065/Vector_rpcjz8.svg"
            alt="Standard"
            style={{
            width: '70vw',
            marginLeft: '15vw',
            marginRight: '15vw',
            marginTop: '40vh',
          }} />
          {/* <p className="main-info" key="p">Standard Crypto is developing decentralized
          financial services to give consumers the fastest,
          cheapest and most diverse suite of financial options in history.</p> */}
        </QueueAnim>
      </div>
    );
  }
}

export default Banner;

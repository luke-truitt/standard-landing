import React from "react";
import DocumentTitle from "react-document-title";
import { enquireScreen } from "enquire-js";
// import Header from './Header';
import Banner from "./Banner";
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
// import Page4 from './Page4';
// import Page5 from './Page5';
// import Footer from './Footer';
import "./static/style";
import { Button } from "antd";

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isMobile,
    // showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  navToShadow = (e) => {
    console.log(e);
    //   this.setState({ showShadow: e.mode === 'leave' });
  };
  render() {
    return [
      <Banner
        key="banner"
        isMobile={this.state.isMobile}
        navToShadow={this.navToShadow}
      />,
      <DocumentTitle title="Standard" />,
    ];
  }
}
export default Home;

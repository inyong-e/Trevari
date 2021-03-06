import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MeetingsPage from "./pages/MeetingsPage";
import MainTop from "./components/Common/MainTop";
import MainFooter from "./components/Common/MainFooter";
import styled, { css } from "styled-components";
import FAQPage from "./pages/FAQPage";

interface State {
  scrollPic: number;
  tabShow: boolean;
}
class MainViews extends React.Component<{}, State> {
  state: State = {
    scrollPic: 1,
    tabShow: true,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = e => {
    const scrollPic = e.srcElement.scrollingElement.scrollTop;

    var tabShow = true;
    if (scrollPic > 100 && this.state.scrollPic < scrollPic) {
      tabShow = false;
    }
    this.setState({
      scrollPic,
      tabShow,
    });
  };

  render() {
    return (
      <div>
        <Header show={this.state.tabShow}>
          <MainTop
            categoryList={[
              "트레바리 알아보기",
              "멤버십 신청",
              "독서모임",
              "이벤트",
              "채용공고",
              "로그인",
            ]}
          />
        </Header>
        <Content style={{ paddingTop: "64px" }}>
          <BrowserRouter>
            <Route exact path="/" component={MeetingsPage} />
            <Route exact path="/cs" component={FAQPage} />
          </BrowserRouter>
        </Content>
        <Footer>
          <MainFooter />
        </Footer>
      </div>
    );
  }
}

const Header = styled.div`
  background-color: white;
  border-bottom: 1px solid rgb(233, 233, 233);
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 20px 10%;
  transition: all 0.5s ease 0.1s;
  ${props => {
    return props.show
      ? css`
          margin-top: 0;
        `
      : css`
          margin-top: -100px;
        `;
  }}
`;

const Content = styled.div`
  padding-top: 64px;
`;

const Footer = styled.div`
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
`;

export default MainViews;

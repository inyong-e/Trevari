import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MeetingsPage from "./pages/MeetingsPage";
import MainTop from './components/Common/MainTop';
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;
const MainViews = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white", borderBottom: "1px solid rgb(233,233,233)", padding:'0 10%' }} >
        <MainTop categoryList={["트레바리 알아보기", "멤버십 신청", "독서모임", "이벤트","채용공고", "로그인" ]} />
      </Header>
      <Content>
        <BrowserRouter>
          <Route exact path="/meetings" component={MeetingsPage} />
          <Route exact path="/events" component={MeetingsPage} />
        </BrowserRouter>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MainViews;

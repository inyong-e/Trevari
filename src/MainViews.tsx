import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MeetingsPage from "./pages/MeetingsPage";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;
const MainViews = () => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "white",
          border: "1px solid rgb(233,233,233)"
        }}
      >
        <HeadComponent
          categoryList={[
            "트레바리 알아보기",
            "멤버십 신청",
            "독서모임",
            "이벤트",
            "채용공고",
            "로그인"
          ]}
        />
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

interface Props {
  categoryList: String[];
}

const HeadComponent: React.SFC<Props> = ({ categoryList }) => {
  const categorys = categoryList.map(category => (
    <div
      style={{ padding: "0 10px", float: "left", color: "rgb(130,130,130)" }}
    >
      {category}
    </div>
  ));
  return (
    <div>
      <img
        src={require("../resource/logo.png")}
        style={{ height: "22px", marginLeft: "10%", cursor: "pointer" }}
      />
      <div style={{ float: "right" }}>{categorys}</div>
    </div>
  );
};

export default MainViews;

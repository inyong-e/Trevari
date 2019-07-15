import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MeetingsPage from "./pages/MeetingsPage";
const MainViews = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={MeetingsPage} />
      <Route exact path="/u" component={MeetingsPage} />
    </BrowserRouter>
  );
};

const Header = () => (
  <div
    style={{
      display: "flex",
      width: "100%",
      height: "61px",
      verticalAlign: "middle"
    }}
  >
    <img
      src={require("../resource/logo.png")}
      style={{ height: "20px", margin: "1rem" }}
    />
    <div style={{ float: "right", verticalAlign: "middle" }}>독서모임</div>
  </div>
);

export default MainViews;

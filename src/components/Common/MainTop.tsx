import * as React from "react";

interface Props {
  categoryList: String[];
}

const MainTop: React.SFC<Props> = ({ categoryList }) => {
  const categorys = categoryList.map(category => (
    <div style={{ padding: "0 10px", float: "left", color: "rgb(130,130,130)" }} >
      {category}
    </div>
  ));
  
  return (
    <div>
      <img src={require("../../../resource/logo.png")} style={{ height: "22px", marginLeft: "10%", cursor: "pointer" }} />
      <div style={{ float: "right" }}>{categorys}</div>
    </div>
    
  );
};

export default MainTop;

import * as React from "react";
import styled from 'styled-components';

interface Props {
  categoryList: String[];
}

const MainTop: React.SFC<Props> = ({ categoryList }) => {
  const ImageSrc = require("../../../resource/logo.png");
  const categorys = categoryList.map(category => (
    <WrapperCategory>
      {category}
    </WrapperCategory>
  ));
  
  return (
    <div>
      <ImageNav src={ImageSrc} />
      <WrapperCategorys>{categorys}</WrapperCategorys>
    </div>
    
  );
};

export default MainTop;



const WrapperCategory = styled.div`
  margin: 0 10px;
  float: left;
  color: rgb(130,130,130);
  cursor: pointer;
  &:hover {
    color: #ff8906;
  }
`
const WrapperCategorys = styled.div`
  float: right;
`
const ImageNav = styled.img`
  height: 22px;
  cursor: pointer;
`

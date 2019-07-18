import * as React from "react";
import styled,{css} from 'styled-components';

interface Props {
  categoryList: String[];
}
interface State {
  clickBar : boolean;
}
class MainTop extends React.Component<Props> {
  state:State={
    clickBar:false
  }
  clickBar = () => {
    this.setState({
      clickBar:!this.state.clickBar
    })
  }

  render(){
    const ImageSrc = require('../../../resource/logo.png');
    const ImageBar = require('../../../resource/Bar.png');
    const categorys = this.props.categoryList.map(category => (
      <WrapperCategory>{category}</WrapperCategory>
  ));
    return (
      <div>
        <a href='./'><Image src={ImageSrc}/></a>
        <div style={{float:'right'}}><WrapperBar src={ImageBar} onClick={this.clickBar}/></div>
        <WrapperCategorys clickBar={this.state.clickBar}>{categorys}</WrapperCategorys>
      </div>
    );
  }
}

export default MainTop;

const WrapperBar = styled.img`
  float: right;
  height: 22px;
  cursor: pointer;
  display: none;
  @media (max-width:800px){
    display: block;
  }
`
const Bar = styled.div`
  width: 30px;
  height: 6px;
  margin-bottom: 3px;
  background-color: #ff8906;
  border-radius: 10px;
`
const WrapperCategory = styled.div`
  margin: 0 10px;
  float: left;
  color: rgb(130,130,130);
  cursor: pointer;
  &:hover {
    color: #ff8906;
  }
  @media (max-width:800px){
    float: none;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 0.5px solid lightGray;
  }
`
const WrapperCategorys = styled.div`
  float: right;
  @media (max-width:800px){
    float: none;
    transition: all 0.5s ease .1s;
    ${props => {
      return props.clickBar ? css `margin-top: 10px` : css `margin-top: -300px`;
    }}
  }
`
const Image = styled.img`
  height: 22px;
  cursor: pointer;
`

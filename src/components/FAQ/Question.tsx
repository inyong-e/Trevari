import * as React from 'react';
import {QueData} from '../../interface/common';
interface Props {
  Que : QueData;
}
interface State {
  isAnswer:boolean;
}

class Question extends React.Component<Props,State>{

  render(){
    const {Category, Question, Answer} = this.props.Que;
   return(
     <div>
       <div style={{margin:'10px 0', fontSize:'1rem', borderBottom:'1px dashed lightGray', paddingBottom:'15px', cursor:'pointer'}}>
         <span style={{color:'#ff8906', fontWeight:'bold', margin:'0 15px 0 0',float:'left'}}>Q</span>
         <span style={{width:'80px', float:'left', fontWeight:'bold'}}>[{Category}]</span>
         <span>{Question}</span>
       </div>
       <div style={{padding:'15px 0 40px 110px', fontSize:'1rem', borderBottom:'1px dashed lightGray'}}>
         <span>{Answer}</span>
       </div>

     </div>
   ) 
  }
}
export default Question;
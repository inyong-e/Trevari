import * as React from 'react';
import  {CardDesc} from '../../store/common';
import {Card} from 'antd';
interface Props{
  CardDesc:CardDesc
}

export const MeetingCard:React.SFC<Props> = ({CardDesc}) => (
  <Card style={{margin:'20px 10px', height:'400px', cursor:'pointer'}}>
    <div style={{ height:'200px', marginBottom:'5px', position:'relative'}}>
    <div style={{backgroundColor:'#ff8906',width:'100%',position:'absolute', opacity:0.9, color:'white',textAlign:'center',fontSize:'1rem'}}>{CardDesc.hostName}</div>
      <img src={CardDesc.imageSrc} style={{width:'100%',height:'100%'}}/>
    </div>

    <div>
      <div style={{fontSize:'1.1rem', fontWeight:'bold'}}>{CardDesc.hostGroup}</div>
      <div style={{fontSize:'1.1rem', fontWeight:'bold', color:'rgb(53,119,176)'}}>{CardDesc.title}</div>
      <div>{CardDesc.address}<br />{CardDesc.Date}</div>
    </div>
    
  </Card>
)
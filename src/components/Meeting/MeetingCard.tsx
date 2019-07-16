import * as React from 'react';
import  {CardDesc} from '../../store/MeetingReducer';
import {Card} from 'antd';

interface Props{
  CardDesc:CardDesc
}

export const MeetingCard:React.SFC<Props> = ({CardDesc}) => (
  <div style={{margin:'10px'}}>
    <div style={{ height:'200px', marginBottom:'5px', position:'relative'}}>
    <div style={{backgroundColor:'#ff8906',width:'100%',position:'absolute', opacity:0.85, color:'white',textAlign:'center',fontSize:'1rem'}}>그룹장 트레바리</div>
      <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' style={{width:'100%',height:'100%'}}/>
      
    </div>

    <div>
      <div style={{fontSize:'1.1rem', fontWeight:'bold'}}>이콘-임당</div>
      <div style={{fontSize:'1.1rem', fontWeight:'bold', color:'rgb(53,119,176)'}}>긴축 : 그 위험한 생각의 역사</div>
      <div>강남 아지트<br />2019년 07월 17일 수요일 오후 07시 40분</div>
    </div>
    
  </div>
)
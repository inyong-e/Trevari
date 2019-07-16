import * as React from 'react';
import {Input} from 'antd';

interface Props {
  setKeyword(Keyword:string): void;
}

export const MeetingSearch:React.SFC<Props> = ({setKeyword}) => (
    <div style={{marginBottom:'55px', padding:'25px 13% 0 13%'}}>
      <p>내 일정에 맞는 놀러가기 클럽을 찾으신다면?</p>
        <div style={{width:'250px', background:'#ff8906', color:'white', border:0, textAlign:'center', padding:'6px 0', borderRadius:'3px', fontSize:'1rem', float:'left'}}>독서모임 캘린더 바로가기</div>
        <div style={{float:'right'}}>
          <Input size="large" placeholder="클럽명을 입력하세요" style={{width:'300px'}} onChange={e=>setKeyword(e.target.value)}/>
        </div>
    </div>
)
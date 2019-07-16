import * as React from 'react';
import {Button} from 'antd';

export default () => (
  <div style={{margin:'0 10%'}}>
    <div style={{display:'flex', width:'100%'}}>
      <h2 >세상을 더 지적으로 사람들을 더 친하게 📚</h2> 
      <div style={{textAlign:'right', width:'50%'}}><Button style={{borderColor:'#ff8906', color:'#ff8906'}}>자주 묻는 질문 & 공지사항</Button></div>
    </div>
    <h4><br/>블로그<br/><br/>채용공고<br/><br/>이용약관<br/><br/>개인정보처리방침</h4>
    <br/>
    <h5 style={{color:'Gray'}}>
      주식회사 트레바리|대표:윤수영|사업자 등록번호:326-86-01375|주소:서울특별시 성동구 아차산로 68, 075호
      <br/>
      전화: 070-7799-9708 | 공식 문의채널: contact@trevari.co.kr | 통신판매업신고: 제2019-서울성동-138호
    </h5>
  </div>
)
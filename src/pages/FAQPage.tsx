import * as React from 'react';
import styled from 'styled-components';
import Description from '../components/FAQ/Description';
import QuestionField from '../components/FAQ/QuestionField';
import {QueData} from '../interface/common';

interface State {
  selectCate:string;
  QueData : QueData[];
}

class FAQPage extends React.Component{

  state:State = {
    selectCate: '북클럽',
    QueData
  }
  selectCategory = (selectCate:string) => {
    this.setState({selectCate});
  }
  render(){
    console.log(this.state.selectCate);
    const {selectCate, QueData} = this.state;
    return(
      <WrapperFAQ>
        <Description categorys={['북클럽','신청/환불','독후감','놀러가기','이벤트','아지트']} selectCategory={this.selectCategory} selectCate={selectCate}/>
        <br/><br/>
        <QuestionField QueData={QueData} selectCate={selectCate}/>
      </WrapperFAQ>
    )
  }
}

export default FAQPage;



const WrapperFAQ = styled.div`
  margin: 20px 10%;
  padding: 5% 0;
  background: white;
`
const Bold = styled.div`
  margin-top: 20px;
  color: #ff8906;
  font-weight: bold;
`

const secondComment = [
  {subTitle: '1.원활한 토론 관리', list: [`최대한 많은 멤버분들이 고루고루 자신의 생각을 나눌 수 있도록, 토론 중 발언권을 분배하고 타임라인을 관리합니다. 발언권이 지나치게 편중될 경우, 파트너 님이 stop을 외칠 수도 있습니다. 원활한 토론을 하기 위함이니 우리 모두 상처받지 말아요!`]},
  {subTitle: '2. 모임 전후 각종 행정업무', list: [`모임이 원활하게 진행될 수 있도록 클럽 단톡방 내에서 각종 투표를 실시하고, 중요한 공지, 변동 사항, 가이드 자료 등을 전달합니다. 궁금한 점은 파트너 님께 문의하시면 답변해주실 거예요.`,`contact@trevari.co.kr로 문의주시면 크루가 직접 답변해드립니다.`]},
  {subTitle: '3. 멤버로서의 파트너', list: [`파트너가 모임 관리자로서의 역할만을 하는 것은 아니에요. 멤버와 동일하게 토론에 적극적으로 참여하고, 번개에도 함께할 수 있습니다. 파트너도 결국 한 명의 멤버라는 사실! 한 시즌 동안 예쁜 추억을 같이 쌓아 보아요.`]},
  {subTitle: '4. 클럽 유형별 추가 역할', list: [`'트레바리가 디자인한 클럽'의 파트너: 사전 스터디한 내용을 바탕으로 모임을 리드합니다. 매 모임 발제를 직접 진행하고, 각종 사례 혹은 경험을 활용하여 지식의 흡수를 돕습니다.`,`'클럽장이 있는 클럽'의 파트너: 클럽장과 멤버를 이어주는 다리 역할을 수행합니다. 클럽장의 사정으로 모임 진행이 어렵게 되는 등의 각종 특수 상황에 대응합니다.`]}
]

const QueData = [
  {Category:'북클럽',Question:'트레바리는 젊은 사람들만 가는 곳이라고 하던데 맞나요?', Answer:()=>(<div>나이의 많고 적음과 무관하게 '더 좋은 사람이 되고 싶고 다양한 생각에 열려 있다'면 누구나 오셔도 됩니다😘</div>)},
  {Category:'북클럽',Question:'파트너는 어떤 역할을 하나요?', Answer:()=>(<div>트레바리의 모든 북클럽에는 '파트너'가 한 분씩 계십니다. 트레바리의 '크루'(직원)와는 달리 생계(?)는 다른 곳에서 해결하시지만, 트레바리와 같은 곳을 바라봐 주시는 든든한 분들이랍니다! 한 시즌 동안 아래의 업무를 담당해주시며 멤버분들이 트레바리를 더욱 잘 즐길 수 있도록 도와주실 거예요.<br/><br/>{secondComment.map(comment=>(<div><Bold>{comment.subTitle}</Bold><ul> {comment.list.map(desc=> (<li>{desc}</li>) )} </ul></div>))}</div>)},
  {Category:'북클럽',Question:'독서모임일이 언제인지 헷갈려요. (모임일 세는 법!)', Answer:()=>(<div><Bold>[모일일 세는 법!]</Bold><br/>첫번째 목요일 = O월에 있는 목요일들 중 첫 번째!<br/>두번째 목요일 = O월에 있는 목요일들 중 두 번째!<br/>세번째 목요일 = O월에 있는 목요일들 중 세 번째!<br/><Bold>*직접 세는게 귀찮으시다면? 트레바리 구글 캘린더를 등록해두시고 일정을 편하게 확인하세요!</Bold><br/><a>압구정 아지트 캘린더 바로기기</a><br/><a>성수 아지트 캘린더 바로가기</a></div>)},
  {Category:'북클럽',Question:'멤버 구성은 어떻게 되나요?', Answer:()=>(<div>정말 다양한 직업과 연령대의 멤버분들이 활동하고 계세요! 나와 다른 배경을 가진 멤버들의 다양한 이야기를 듣는 즐거움이 있습니다!</div>)},
  {Category:'북클럽',Question:'한 달에 한 번만 모이나요?', Answer:()=>(<div>아지트에서 열리는 정규 독서모임은 월 1회입니다.<br/>하지만 매달 정기적으로 번개 모임이 열리기 때문에 멤버분들과 함께 할 수 있는 시간은 월 2회라고 생각해주셔도 무방할 것 같아요. :)<br/>이외에도 강연, 체험 등 다양한 형태의 ‘이벤트’, 편하게 놀러 올 수 있는 ‘트레바리 압구정 아지트 지하 바 b1’ 등 다양한 혜택이 준비되어 있습니다!</div>)},

  {Category:'신청/환불',Question:'어떤 결제수단이 있나요? (결제수단 유의사항)', Answer:()=>(<div><Bold>[카드결제]</Bold>-결제 완료 즉시 실시간 결제 확인 및 신청 완료!<br/><Bold>[Toss결제]</Bold>-결제 완료 즉시 실시간 결제 확인 및 신청 완료!<br/>-본인 명의의 계좌와 휴대전화만 있으면 Toss앱 없이도 손쉽게 결제할 수 있습니다.<Bold>[가상계좌]</Bold>-신청 단계에서 '가상계좌'를 선택하신 후 안내사항을 꼭 확인해주세요.<br/>-계좌이체 입금확인 시점 이전에 클럽이 마감되는 경우, 이미 이체하신 금액은 최대 3영업일 이내로 환불해드립니다.</div>)},
  {Category:'신청/환불',Question:'페이스북의 문제로 로그인이 안 될 때는 어떡하나요? (해킹, 비활성화 등)', Answer:()=>(<div>로그인 화면에서 '페이스북 계정 로그인에 어려움을 겪고 계신가요?'를 클릭해주세요.<br/>입력하신 전화번호로 임시 비밀번호가 발급됩니다. <Bold>추후 페이스북 이메일과 임시비밀번호로 로그인하실 수 있습니다.</Bold> (아래 이미지를 참고해주세요.)<br/><img src={require('../../resource/FAQ_cap2.png')}/></div>)},
  {Category:'신청/환불',Question:'등록확인증은 어떻게 발급받을 수 있나요?', Answer:()=>(<div>발급 받으시고자 하는 <b>시즌명 / 클럽명</b>을 contact@trevari.co.kr 로 알려주세요 :)<br/>회사 지원금 등으로 증빙이 필요한 경우에는 사업자등록증 등 서류도 전송해드립니다. <b>필요하신 서류 종류를 알려주세요!</b><br/><a>*등록확인증 예시 보기(click!)</a></div>)},
  {Category:'신청/환불',Question:'1907시즌 멤버들에게도 1909시즌 우선 신청 기회가 주어지나요?', Answer:()=>(<div>네, 우선 신청 기회가 부여됩니다.</div>)},

  {Category:'독후감',Question:'페어클럽에 내 짝이 독후감을 안 썼어요. 이런 경우에 혼자서라도 참석이 가능한가요?', Answer:()=>(<div>네, 가능합니다.</div>)},
  {Category:'독후감',Question:'독후감 공지 문자는 왜, 언제 발송되나요?', Answer:()=>(<div><Bold>독후감 제출 마감 일주일 전, 3일 전, 당일에 각각 안내 문자를 발송해 멤버분들의 독서습관 형성에 도움을 드리고 있어요.</Bold><br/>한 권의 책을 곱씹고 소화하는 충분한 시간을 가지길, 한 편의 글을 쓰며 최소 일주일 동안 나만의 생각을 만들어 가길, 이를 통해 서로에게 도움이 되는 가치 있는 대화를 나눌 수 있길 바랍니다.<br/>좀 더 여유롭게 책 읽기와 글쓰기를 즐겨봐요! 분명 더 가치 있는 시간이 될 거예요 :)</div>)},
  {Category:'독후감',Question:'독후감은 제출은 어떻게 하나요?', Answer:()=>(<div><Bold>[독후감 제출 방법]</Bold><Bold>방법1</Bold>로그인 후 '마이페이지'의 내 클럽 리스트에서 '독후감 읽고, 쓰러가기' 버튼을 클릭합니다. (모임 페이지로 이동)<br/>정해진 분량을 넘긴 후 '제출하기' 버튼을 누르면 제출 완료!<br/><Bold>방법2</Bold>작성 중 틈틈이 임시저장 버튼을 눌러주시면 좋습니다. (제목과 본문이 모두 입력되어야 임시저장이 가능합니다!)<br/>정해진 분량을 넘긴 후 '제출하기' 버튼을 누르면 제출 완료!<img src={require('../../resource/FAQ_cap1.png')}/></div>)},
  
  {Category:'놀러가기',Question:'페어클럽에 혼자 놀러갈 수 있나요?', Answer:()=>(<div>네, 가능합니다.</div>)},
  {Category:'놀러가기',Question:'퀴즈클럽에 놀러가려면 퀴즈를 풀어야 하나요?', Answer:()=>(<div>아니요! 그냥 일반 놀러가기와 똑같이 독후감만 쓰시고 참석 여부 문자를 기다려주세요!</div>)},
  {Category:'놀러가기',Question:'놀러가기 성공 여부는 언제 알 수 있나요?', Answer:()=>(<div>독후감 마감 다음 날(=모임 전 날) 오전 11시에, 놀러가기 성공 여부가 문자로 전송됩니다!</div>)},
  
  {Category:'이벤트',Question:'이벤트 신청을 어떻게 하나요?', Answer:()=>(<div>홈페이지에서 확인하세요!</div>)},
  {Category:'이벤트',Question:'이벤트가 무엇인가요?', Answer:()=>(<div>실제 트레바리 홈페이지에서 확인하세요!!</div>)},
  {Category:'아지트',Question:'임시 데이터 만드시느라 힘드시죠..?', Answer:()=>(<div>그래요! 이제 그만 만들래요!</div>)},
]
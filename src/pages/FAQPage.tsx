import * as React from 'react';
import styled from 'styled-components';
import Description from '../components/FAQ/Description';
import QuestionField from '../components/FAQ/QuestionField';
import {QueData} from '../interface/common';

interface State {
  selectCate:string;
  QueData : QueData[];
}

export default class FAQPage extends React.Component{

  state:State = {
    selectCate: '북클럽',
    QueData:[
      {Category:'북클럽',Question:'트레바리는 젊은 사람들만 가는 곳이라고 하던데 맞나요?',Answer:`나이의 많고 적음과 무관하게 '더 좋은 사람이 되고 싶고 다양한 생각에 열려 있다'면 누구나 오셔도 됩니다😘`},
      {Category:'북클럽',Question:'파트너는 어떤 역할을 하나요?',Answer:`트레바리의 모든 불클럽에는 '파트너'가 한 분씩 계십니다. 트레바리의 '크루'(직원)와는 달리 생계(?)는 다른 곳에서 해결하시지만, 트레바리와 같은 곳을 바라봐 주시는 든든한 분들이랍니다! 한 시즌 동안 아래의 업무를 담당해주시며 멤버분들이 트레바리를 더욱 잘 즐길 수 있도록 도와주실 거예요.`},
      {Category:'북클럽',Question:'멤버 구성은 어떻게 되나요?',Answer:`정말 다양한 직업과 연령대의 멤버분들이 활동하고 계세요! 나와 다른 배경을 가진 멤버들의 다양한 이야기를 듣는 즐거움이 있습니다!`},
      {Category:'북클럽',Question:'클럽장은 어떤 역할을 하나요?',Answer:`전문적으로 이끌어주시는 분이 계시면 더 좋을 클럽에는 '클럽장'을 모시고 있어요. 주로 과학관장님, 교수님, 작가님, 특정 기업 대표님 등 해당 분야 전문가분들을 모십니다.
      이렇게 모신 ‘클럽장’님들은 해당 클럽의 커리큘럼을 직접 짜주십니다. 같이 읽으면 좋을 책, 아티클, 영상/이미지 자료를 추천해주실 뿐만 아니라, 클럽 어떤 식으로 운영되면 좋을지까지 같이 고민해주신답니다. 
      나아가 모임 당일 양질의 대화가 이뤄질 수 있도록 토론 주제를 준비하고, 대화를 이끌어가주시고 계세요. :)`},
      {Category:'북클럽',Question:'한달에 한 번만 모이나요?',Answer:`아지트에서 열리는 정규 독서모임은 월 1회입니다.
      하지만 매달 정기적으로 번개 모임이 열리기 때문에 멤버분들과 함께 할 수 있는 시간은 월 2회라고 생각해주셔도 무방할 것 같아요. :)
      이외에도 강연, 체험 등 다양한 형태의 ‘이벤트’, 편하게 놀러 올 수 있는 ‘트레바리 압구정 아지트 지하 바 b1’ 등 다양한 혜택이 준비되어 있습니다!`},

      {Category:'신청/환불',Question:'1907시즌 멤버들에게도 1909시즌 우선 신청 기회가 주어지나요?',Answer:`네, 우선 신청 기회가 부여됩니다.`},
      {Category:'신청/환불',Question:'이번 시즌 멤버십을 다음 시즌으로 이월(연기)할 수 있나요?',Answer:`트레바리 멤버십은 이월할 수 없으며, 신청한 시즌에만 이용이 가능합니다.`},
      {Category:'신청/환불',Question:'트레바리 멤버십을 양도할 수 있나요?',Answer:`트레바리 멤버십은 양도가 불가능합니다.`},
      {Category:'신청/환불',Question:'환불은 어떻게 하나요?',Answer:`트레바리 홈페이지의 마이페이지 > 내 클럽 목록에서 환불 신청하실 수 있습니다. 신청해주시면 최대 5영업일 내로 환불 완료됩니다. :)
      *환불 기간이 지난 경우 환불 버튼이 보이지 않아요.`},
      {Category:'신청/환불',Question:'마감된 클럽은 신청할 수 없나요?',Answer:`마감 상태인 클럽은 신청하실 수 없습니다.
      신청 기간 중 환불 혹은 정원 증원으로 인해 빈 자리가 생기는 경우, 멤버십 신청 페이지를 통해 마감 상태가 해제된 것을 확인하시고 신청하실 수 있어요!
      별도 대기 시스템은 운영하고 있지 않습니다.`},
    

    ]
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

const WrapperFAQ = styled.div`
  margin: 20px 10%;
  padding: 5% 0;
  background: white;
`
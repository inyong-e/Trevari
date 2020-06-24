import * as React from "react";
import { MeetingSearch } from "../components/Meeting/MeetingSearch";
import { MeetingCardField } from "../components/Meeting/MeetingCardField";
import { CardDesc } from "../interface/common";
import styled from "styled-components";

interface State {
  Keyword: string;
  Cards: CardDesc[];
}
export default class MeetingsPage extends React.Component<{}, State> {
  RealTimeOut: ReturnType<typeof setTimeout>;
  constructor(props) {
    super(props);
    this.RealTimeOut = null;
    this.state = {
      Keyword: "",
      Cards: [
        {
          id: 1,
          title:
            "이동진의 부메랑 인터뷰 그 영화의 비밀, 여자는 남자의 미래다, 옥희의 영화",
          hostGroup: "북씨-블랙",
          address: "강남 아지트",
          imageSrc: "../../resource/pic4.png",
          Date: "2019년 07월 15일 월요일 오후 07시 40분",
          hostName: "그룹장 워니님",
        },
        {
          id: 2,
          title: "긴축 : 그 위험한 생각의 역사",
          hostGroup: "이콘-임당",
          address: "강남 아지트",
          imageSrc: "../../resource/pic1.png",
          Date: "2019년 07월 17일 수요일 오후 07시 40분",
          hostName: "그룹장 이뇽님",
        },
        {
          id: 3,
          title: "무례함의 비용",
          hostGroup: "교육읽기-33",
          address: "압구정 아지트",
          imageSrc: "../../resource/pic2.png",
          Date: "2019년 07월 16일 수요일 오후 07시 40분",
          hostName: "",
        },
        {
          id: 4,
          title: "내 운명은 고객이 결정한다",
          hostGroup: "스타텁-33",
          address: "압구정 아지트",
          imageSrc: "../../resource/pic3.png",
          Date: "2019년 07월 16일 화요일 오후 07시 40분",
          hostName: "",
        },
        {
          id: 5,
          title: "여행의 이유(반양장본)",
          hostGroup: "체험독서-34",
          address: "강남 아지트",
          imageSrc: "../../resource/pic5.png",
          Date: "2019년 07월 12일 일요일 오후 07시 40분",
          hostName: "",
        },
        {
          id: 6,
          title: "긴축 : 그 위험한 생각의 역사",
          hostGroup: "이콘-임당",
          address: "강남 아지트",
          imageSrc: "../../resource/pic1.png",
          Date: "2019년 07월 11일 토요일 오후 07시 40분",
          hostName: "트레바리가 디자인한 클럽",
        },
      ],
    };
  }

  setKeyword = Keyword => {
    const bind = this;
    if (this.RealTimeOut) clearTimeout(this.RealTimeOut);

    this.RealTimeOut = setTimeout(() => {
      bind.setState({ Keyword });
    }, 400);
  };
  render() {
    return (
      <SearchSpace>
        <MeetingSearch setKeyword={this.setKeyword} />
        <CardFiledSpace>
          <MeetingCardField
            Cards={this.state.Cards}
            Keyword={this.state.Keyword}
          />
        </CardFiledSpace>
      </SearchSpace>
    );
  }
}

const SearchSpace = styled.div`
  background: white;
`;
const CardFiledSpace = styled.div`
  padding: 0 6%;
`;

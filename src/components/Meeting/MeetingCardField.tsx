import * as React from "react";
import { CardDesc } from "../../interface/common";
import { MeetingCard } from "./MeetingCard";
import styled from "styled-components";

interface Props {
  Keyword: string;
  Cards: CardDesc[];
}

export const MeetingCardField: React.SFC<Props> = ({ Cards, Keyword }) => {
  const CardList = Cards.filter(card => card.hostGroup.includes(Keyword)).map(
    card => (
      <WrapperCard>
        <MeetingCard CardDesc={card} />
      </WrapperCard>
    ),
  );

  return <div>{CardList.length ? CardList : <EmptyView />}</div>;
};

const EmptyView = () => <EmptySpace>검색 결과가 없습니다...😭</EmptySpace>;

const WrapperCard = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 33.3% @media (max-width: 800px) {
    width: 100%;
  }
`;

const EmptySpace = styled.div`
  padding: 10% 0;
  text-align: center;
  font-size: 1.2rem;
`;

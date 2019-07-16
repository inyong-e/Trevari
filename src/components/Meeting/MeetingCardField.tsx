import * as React from 'react';
import {CardDesc} from '../../store/common';
import {MeetingCard} from './MeetingCard';

interface Props{
  Keyword:string,
  Cards: CardDesc[]
}

export const MeetingCardField:React.SFC<Props> = ({Cards, Keyword}) => {

  const CardList = Cards.filter(card=> card.hostGroup.includes(Keyword)).map(card => (
    <div style={{display:'inline-block', verticalAlign:'top' ,width:'33.3%'}}>
      <MeetingCard CardDesc={card}  />
    </div>
  ));

  return(
    <div>
      {CardList.length ? CardList : (<EmptyView />)}
    </div>
  );
}

const EmptyView = () => (
  <div style={{paddingTop:'10%', paddingBottom:'10%',textAlign:'center', fontSize:'1.2rem'}}>
    검색 결과가 없습니다...😭
  </div>
)
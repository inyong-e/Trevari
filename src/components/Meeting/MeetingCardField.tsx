import * as React from 'react';
import {Cards} from '../../store/MeetingReducer';
import {MeetingCard} from './MeetingCard';

export const MeetingCardField:React.SFC<Cards> = ({Cards}) => {

  const CardList = Cards.map(card => (
    <div style={{display:'inline-block', width:'33.3%'}}>
      <MeetingCard CardDesc={card}  />
    </div>
  ));

  return(
    <div>
      {CardList}
    </div>
  );
}

import * as React from 'react';
import {Cards} from '../../store/MeetingReducer';
import {MeetingCard} from './MeetingCard';

export const MeetingCardField:React.SFC<Cards> = ({Cards}) => {

  const CardList = Cards.map(card => (
    <div>
      <MeetingCard CardDesc={card}  />
    </div>
  ));

  return(
    <div>
      {CardList}
    </div>
  );
}

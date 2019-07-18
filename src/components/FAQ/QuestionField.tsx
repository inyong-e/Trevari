import * as React from 'react';
import {QueData} from '../../interface/common';
import Question from './Question';
interface Props {
  selectCate:string;
  QueData : QueData[];
}

const QuestionField:React.SFC<Props> = ({QueData, selectCate}) => (
  <div style={{margin:'0 5%'}}>
    {QueData.filter(Que => Que.Category === selectCate)
    .map(Que=>(
      <Question Que={Que}/>
    ))}
  </div>
)

export default QuestionField;
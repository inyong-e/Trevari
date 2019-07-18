import * as React from 'react';
import {QueData} from '../../interface/common';
import Question from './Question';
interface Props {
  QueData : QueData[];
}

const QuestionField:React.SFC<Props> = ({QueData}) => (
  <div style={{margin:'0 5%'}}>
    {QueData.map(Que=>(
      <Question Que={Que}/>
    ))}
  </div>
)

export default QuestionField;
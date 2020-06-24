import * as React from "react";
import { QueData } from "../../interface/common";
import styled, { css } from "styled-components";
interface Props {
  Que: QueData;
}
interface State {
  isAnswer: boolean;
}

class Question extends React.Component<Props, State> {
  state: State = {
    isAnswer: false,
  };
  clickQue = () => {
    this.setState({
      isAnswer: !this.state.isAnswer,
    });
  };
  render() {
    const { Category, Question, Answer } = this.props.Que;
    const { isAnswer } = this.state;
    return (
      <div>
        <QueWrapper onClick={this.clickQue}>
          <QMark>Q</QMark>
          <CateDesc>[{Category}]</CateDesc>
          <QueDesc isAnswer={isAnswer}>{Question}</QueDesc>
        </QueWrapper>
        <AnswerDesc isAnswer={isAnswer}>
          <span>
            <Answer />
          </span>
        </AnswerDesc>
      </div>
    );
  }
}
export default Question;

const QueWrapper = styled.div`
  margin: 10px 0;
  fint-size: 1rem;
  border-bottom: 1px dashed lightGray;
  padding-bottom: 15px;
  cursor: pointer;
`;

const QMark = styled.span`
  color: #ff8906;
  font-weight: bold;
  margin: 0 15px 0 0;
  float: left;
`;
const CateDesc = styled.span`
  width: 80px;
  float: left;
  font-weight: bold;
`;

const QueDesc = styled.span`
  ${props => {
    return props.isAnswer
      ? css`
          color: #ff8906;
          font-weight: bold;
        `
      : css`
          color: black;
        `;
  }}
`;

const AnswerDesc = styled.div`
  padding: 15px 0 40px 110px;
  font-size: 1rem;
  border-bottom: 1px dashed lightGray;
  ${props => {
    return props.isAnswer
      ? css`
          display: block;
        `
      : css`
          display: none;
        `;
  }}
  @media (max-width:800px) {
    padding: 15px 0 40px 20px;
  }
`;

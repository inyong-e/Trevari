import * as React from "react";
import styled from "styled-components";

interface Props {
  setKeyword(Keyword: string): void;
}

export const MeetingSearch: React.SFC<Props> = ({ setKeyword }) => (
  <Wrapper>
    <p>내 일정에 맞는 놀러가기 클럽을 찾으신다면?</p>
    <CalenderButton>독서모임 캘린더 바로가기</CalenderButton>
    <InputSpace>
      <Input
        size="large"
        placeholder="클럽명을 입력하세요"
        onChange={e => setKeyword(e.target.value)}
      />
    </InputSpace>
  </Wrapper>
);

const Input = styled.input`
  height: 40px;
  padding: 6px 11px;
  font-size: 16px;
  line-height: 40px;
  width: 100%;
  border: 1px solid lightGray;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  margin-bottom: 55px;
  padding: 25px 13% 0 13%;
`;

const CalenderButton = styled.div`
  width: 250px;
  background: #ff8906;
  color: white;
  border: 0;
  text-align: center;
  padding: 6px 0;
  border-radius: 3px;
  font-size: 1rem;
  float: left;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;
const InputSpace = styled.div`
  float: right;
  width: 300px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

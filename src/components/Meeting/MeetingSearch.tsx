import * as React from 'react';
import styled from 'styled-components';
import {Input} from 'antd';

interface Props {
  setKeyword(Keyword:string): void;
}

export const MeetingSearch:React.SFC<Props> = ({setKeyword}) => (
    <Wrapper>
      <p>내 일정에 맞는 놀러가기 클럽을 찾으신다면?</p>
        <CalenderButton>독서모임 캘린더 바로가기</CalenderButton>
        <InputSpace>
          <Input size="large" placeholder="클럽명을 입력하세요" style={{width:'300px'}} onChange={e=>setKeyword(e.target.value)}/>
        </InputSpace>
    </Wrapper>
)

const Wrapper = styled.div`
  margin-bottom: 55px;
  padding: 25px 13% 0 13%;
`

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
`
const InputSpace = styled.div`
  float : right;
`
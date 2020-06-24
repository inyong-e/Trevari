import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  categorys: string[];
  selectCate: string;
  selectCategory(selectCate: string): void;
}

const Description: React.SFC<Props> = ({
  categorys,
  selectCate,
  selectCategory,
}) => (
  <WrapperDesc>
    <h2>FAQ</h2>
    <br />
    <br />
    <h3>
      더 궁금하신 사항은 트레바리 고객센터(<a>contact@trevari.co.kr</a>)로
      문의주세요 :)
      <br />
      성함/휴대전화번호/클럽명을 함께 알려주시면 더 빠르게 확인 가능합니다!
    </h3>
    <br />
    <br />
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {categorys.map(category => (
        <CateButton
          selected={selectCate === category}
          onClick={() => selectCategory(category)}
        >
          {category}
        </CateButton>
      ))}
    </div>
  </WrapperDesc>
);

export default Description;

const WrapperDesc = styled.div`
  text-align: center;
  margin: 0 25%;

  @media (max-width: 800px) {
    margin: 0 5%;
  }
`;

const CateButton = styled.div`
  border: 1px solid #ff8906;
  margin: 5px;
  padding: 10px;
  border-radius: 0.4rem;
  cursor: pointer
  ${props => {
    return props.selected
      ? `background-color:#ff8906; color: white;`
      : `background-color:white; color: #ff8906`;
  }}
  flex: "1 0 30%"
`;

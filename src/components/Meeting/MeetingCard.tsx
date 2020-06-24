import * as React from "react";
import { CardDesc } from "../../interface/common";
import styled, { css } from "styled-components";

interface Props {
  CardDesc: CardDesc;
}

export const MeetingCard: React.SFC<Props> = ({ CardDesc }) => (
  <div style={{ margin: "20px 10px", height: "400px", cursor: "pointer" }}>
    <WrapperImage>
      <HostName>{CardDesc.hostName}</HostName>
      <Image src={CardDesc.imageSrc} />
    </WrapperImage>

    <div>
      <Description>{CardDesc.hostGroup}</Description>
      <Description Color>{CardDesc.title}</Description>
      <div>
        {CardDesc.address}
        <br />
        {CardDesc.Date}
      </div>
    </div>
  </div>
);

const WrapperImage = styled.div`
  height: 200px;
  margin-bottom: 5px;
  position: relative;
`;
const HostName = styled.div`
  background-color: #ff8906;
  width: 100%;
  position: absolute;
  opacity: 0.9;
  color: white;
  text-align: center;
  font-size: 1rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Description = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  ${props =>
    props.Color &&
    css`
      color: rgb(53, 119, 176);
    `}
`;

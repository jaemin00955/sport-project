import React from "react";
import styled from "styled-components";

export default function Banner({ url, height }) {
  return <BanImg alt="Banner" src={url} height={height} />;
}
const BanImg = styled.img`
  height: ${(props) => props.height};
  position: absolute;
  top: 100px;
  width: 100vw;
`;

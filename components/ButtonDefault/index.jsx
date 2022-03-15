import React from "react";
import styled from "styled-components";
import { Border1pxLightBackground } from "../../styledMixins";


function ButtonDefault(props) {
  const { className } = props;

  return (
    <a href="mint.cthulhuclubnft.com" target="_blank">
      <ButtonDefault1 className={`button-default ${className || ""}`}>
        <DiscoverMore className="discover-more">Go to Mint Page</DiscoverMore>
        <ChevronRight1 className="chevron-right-1" src="/img/chevron-right-1@2x.svg" />
      </ButtonDefault1>
    </a>
  );
}

const ButtonDefault1 = styled.div`
  ${Border1pxLightBackground}
  position: absolute;
  height: 108px;
  top: 376px;
  left: 385px;
  display: flex;
  padding: 0 7px;
  justify-content: flex-end;
  align-items: center;
  min-width: 195px;
  border-radius: 50px;
  cursor: pointer;

  &.button-default.button-default-1 {
    left: 545px;
    padding: 0 14px;
    min-width: 276px;
  }
`;

const DiscoverMore = styled.div`
  min-height: 32px;
  min-width: 122px;
  font-family: var(--font-family-inter);
  font-weight: 300;
  color: var(--light-background);
  font-size: 20px;
  text-align: center;
  letter-spacing: -2.1px;
  line-height: 32px;
  white-space: nowrap;
`;

const ChevronRight1 = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

const DiscoverMore1 = styled.div`
  .button-default.button-default-1 & {
    min-height: 42px;
    min-width: 196px;
    font-size: 26px;
    letter-spacing: 0;
    line-height: 41.6px;
  }
`;

export default ButtonDefault;

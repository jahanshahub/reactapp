import React from "react";
import styled from "styled-components";


function NFTList(props) {
  const { className } = props;

  return (
    <NFTList1 className={`nft-list ${className || ""}`}>
      <Rectangle8 className="rectangle-8" src="/img/rectangle-8@2x.svg" />
    </NFTList1>
  );
}

const NFTList1 = styled.div`
  height: 484px;
  display: flex;
  align-items: flex-end;
  min-width: 335px;

  &.nft-list.nft-list-1 {
    margin-left: 319px;
  }

  &.nft-list.nft-list-2 {
    position: absolute;
    height: 300px;
    top: 0;
    left: 0;
    min-width: 284px;
  }

  &.nft-list.nft-list-3 {
    position: absolute;
    height: 300px;
    top: 0;
    left: 0;
    min-width: 284px;
  }

  &.nft-list.nft-list-4 {
    position: absolute;
    height: 300px;
    top: 0;
    left: 0;
    min-width: 285px;
  }

  &.nft-list.nft-list-5 {
    min-width: 474px;
  }

  &.nft-list.nft-list-6 {
    margin-left: 452px;
    min-width: 474px;
  }

  &.nft-list.nft-list-7 {
    position: absolute;
    height: 300px;
    top: 0;
    left: 0;
    min-width: 403px;
  }

  &.nft-list.nft-list-8 {
    position: absolute;
    height: 300px;
    top: 0;
    left: 0;
    min-width: 403px;
  }

  &.nft-list.nft-list-9 {
    position: absolute;
    height: 300px;
    top: 0;
    left: 0;
    min-width: 403px;
  }

  &.nft-list.nft-list-10 {
    height: 212px;
    min-width: 123px;
  }

  &.nft-list.nft-list-11 {
    height: 212px;
    margin-left: 117px;
    min-width: 123px;
  }

  &.nft-list.nft-list-12 {
    position: absolute;
    height: 131px;
    top: 0;
    left: 0;
    min-width: 104px;
  }

  &.nft-list.nft-list-13 {
    position: absolute;
    height: 131px;
    top: 0;
    left: 0;
    min-width: 104px;
  }

  &.nft-list.nft-list-14 {
    position: absolute;
    height: 131px;
    top: 0;
    left: 0;
    min-width: 104px;
  }
`;

const Rectangle8 = styled.img`
  width: 75px;
  height: 75px;
  margin-left: 0px;
  margin-bottom: -0.22px;
`;

const Rectangle81 = styled.img`
  .nft-list.nft-list-2 & {
    width: 268px;
    height: 280px;
    margin-bottom: -0.49px;
  }
`;

const Rectangle82 = styled.img`
  .nft-list.nft-list-3 & {
    width: 268px;
    height: 280px;
    margin-bottom: -0.49px;
  }
`;

const Rectangle83 = styled.img`
  .nft-list.nft-list-4 & {
    width: 268px;
    height: 281px;
    margin-left: -2px;
    margin-bottom: -0.6px;
  }
`;

const Rectangle84 = styled.img`
  .nft-list.nft-list-5 & {
    width: 446px;
    margin-bottom: -0.21px;
  }
`;

const Rectangle85 = styled.img`
  .nft-list.nft-list-6 & {
    width: 446px;
    margin-bottom: -0.21px;
  }
`;

const Rectangle86 = styled.img`
  .nft-list.nft-list-7 & {
    width: 379px;
    height: 280px;
    margin-bottom: -0.49px;
  }
`;



const Rectangle89 = styled.img`
  .nft-list.nft-list-10 & {
    width: 116px;
    height: 199px;
    margin-bottom: -0.51px;
  }
`;

const Rectangle810 = styled.img`
  .nft-list.nft-list-11 & {
    width: 116px;
    height: 199px;
    margin-left: -2px;
    margin-bottom: -0.51px;
  }
`;

const Rectangle811 = styled.img`
  .nft-list.nft-list-12 & {
    width: 99px;
    height: 124px;
    margin-bottom: -0.01px;
  }
`;

const Rectangle812 = styled.img`
  .nft-list.nft-list-13 & {
    width: 99px;
    height: 124px;
    margin-bottom: -0.01px;
  }
`;

const Rectangle813 = styled.img`
  .nft-list.nft-list-14 & {
    width: 99px;
    height: 124px;
    margin-bottom: -0.06px;
  }
`;

export default NFTList;

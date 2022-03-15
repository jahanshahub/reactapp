import React from "react";
import NFTList3 from "../NFTList3";
import styled from "styled-components";


class Group67 extends React.Component {
  render() {
    const { nFTList2Props } = this.props;

    return (
      <Group671>
        <NFTList3 />
        <NFTList3 className={nFTList2Props.className} />
      </Group671>
    );
  }
}

const Group671 = styled.div`
  position: absolute;
  height: 484px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 989px;
`;

export default Group67;

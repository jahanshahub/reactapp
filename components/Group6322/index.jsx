import React from "react";
import styled from "styled-components";
import { InterLightWhite23px } from "../../styledMixins";


class Group6322 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Group63 className={`group-63-1 ${className || ""}`}>
        <MintOut1111Cth className="mint-out-1111-cth-1">{children}</MintOut1111Cth>
      </Group63>
    );
  }
}

const Group63 = styled.div`
  width: 390px;
  height: 284px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.group-63-1.group-64-1 {
    height: 527px;
    margin-left: 56px;
  }

  &.group-63-1.group-65-1 {
    height: 406px;
    margin-left: 56px;
  }
`;

const MintOut1111Cth = styled.div`
  ${InterLightWhite23px}
  height: 283.9024353027344px;
  margin-left: -2px;
  width: 388.067626953125px;
  letter-spacing: 0;
  line-height: 36.8px;
`;

const DeployCthulhuAtt = styled.div`
  ${InterLightWhite23px}

  .group-63-1.group-64-1  & {
    height: 527.2473754882812px;
  }
`;

const ReleaseSneakPeak = styled.div`
  ${InterLightWhite23px}

  .group-63-1.group-65-1  & {
    height: 405.5749206542969px;
  }
`;

export default Group6322;

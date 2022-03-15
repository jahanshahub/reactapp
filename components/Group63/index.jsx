import React from "react";
import styled from "styled-components";
import { InterLightWhite23px } from "../../styledMixins";


class Group63 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Group631 className={`group-63 ${className || ""}`}>
        <MintOut1111Cth className="mint-out-1111-cth">{children}</MintOut1111Cth>
      </Group631>
    );
  }
}

const Group631 = styled.div`
  width: 288px;
  height: 348px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.group-63.group-64 {
    height: 645px;
    margin-left: 41px;
  }

  &.group-63.group-65 {
    height: 497px;
    margin-left: 41px;
  }
`;

const MintOut1111Cth = styled.div`
  ${InterLightWhite23px}
  height: 347.56097412109375px;
  margin-left: -2px;
  width: 286.1811218261719px;
  letter-spacing: 0;
  line-height: 36.8px;
`;

const DeployCthulhuAtt = styled.div`
  ${InterLightWhite23px}

  .group-63.group-64  & {
    height: 645.4703979492188px;
  }
`;

const ReleaseSneakPeak = styled.div`
  ${InterLightWhite23px}

  .group-63.group-65  & {
    height: 496.51568603515625px;
  }
`;

export default Group63;

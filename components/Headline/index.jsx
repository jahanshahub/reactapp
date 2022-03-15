import React from "react";
import styled from "styled-components";
import { InterLightWhite16px, InterNormalWhite80px, InterNormalWhite129px } from "../../styledMixins";


function Headline(props) {
  const { className } = props;

  return (
    <Headline1 className={`headline ${className || ""}`}>
      <WelcomeToCthulhuClub className="welcome-to-cthulhu-club" id="welcome-to-cthulhu-club">
        Welcome to Cthulhu Club
      </WelcomeToCthulhuClub>
      <CthulhuWelcomesYou className="cthulhu-welcomes-you">
        Cthulhu welcomes you to the newest NFT craze in community building and passive income. Learn more about the
        Cthulhu Club and how you can join this exciting new community of Cthulhus!
      </CthulhuWelcomesYou>
      <Group48 className="group-48">
        <BuiltOn className="built-on">Built on</BuiltOn>
        <LogoBlack1 className="logo-black-1" src="/img/logo-black-1@2x.svg" />
      </Group48>
    </Headline1>
  );
}

const Headline1 = styled.div`
  position: absolute;
  width: 670px;
  top: 346px;
  left: 252px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 320px;

  &.headline.headline-1 {
    top: 439px;
    left: 343px;
  }
`;

const WelcomeToCthulhuClub = styled.div`
  ${InterNormalWhite80px}
  width: 634px;
  min-height: 198px;
  letter-spacing: 0;
`;

const CthulhuWelcomesYou = styled.p`
  ${InterLightWhite16px}
  width: 670px;
  min-height: 78px;
  margin-top: 50px;
  letter-spacing: 0;
  line-height: 25.6px;
`;

const Group48 = styled.div`
  width: 104px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 35px;
`;

const BuiltOn = styled.div`
  ${InterNormalWhite129px}
  width: 72px;
  min-height: 16px;
  letter-spacing: 0;
`;

const LogoBlack1 = styled.img`
  width: 102px;
  height: 12px;
  margin-top: 7px;
  margin-left: -0.44px;
`;

export default Headline;

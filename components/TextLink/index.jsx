import React from "react";
import styled from "styled-components";
import { MontserratSemiBoldWhite8px } from "../../styledMixins";


class TextLink extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <TextLink1 className={`text-link-10 ${className || ""}`}>
        <Roadmap className="roadmap-6">Roadmap</Roadmap>
      </TextLink1>
    );
  }
}

const TextLink1 = styled.div`
  width: 62px;
  height: 48px;
  display: flex;
  padding: 0 10px;
  align-items: center;
`;

const Roadmap = styled.div`
  ${MontserratSemiBoldWhite8px}
  min-height: 28px;
  min-width: 42px;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 28px;
  white-space: nowrap;
`;

export default TextLink;

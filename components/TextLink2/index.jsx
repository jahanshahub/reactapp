import React from "react";
import styled from "styled-components";
import { MontserratSemiBoldWhite8px } from "../../styledMixins";


class TextLink2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <TextLink className={`text-link-12 ${className || ""}`}>
        <FAQ className="faq-3">FAQ</FAQ>
      </TextLink>
    );
  }
}

const TextLink = styled.div`
  width: 56px;
  height: 48px;
  display: flex;
  padding: 0 10px;
  align-items: center;
`;

const FAQ = styled.div`
  ${MontserratSemiBoldWhite8px}
  min-height: 28px;
  min-width: 18px;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 28px;
  white-space: nowrap;
`;

export default TextLink2;

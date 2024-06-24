// 404ErrorPage.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the animation
const bgshadow = keyframes`
  0% {
    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);
  }
  45% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  55% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);
  }
`;

// Styled components
const ErrorContainer = styled.section`
  text-align: center;
  font-size: 106px;
  font-family: "Catamaran", sans-serif;
  font-weight: 800;
  margin: 70px 15px;
`;

const ErrorSpan = styled.span`
  display: inline-block;
  position: relative;
`;

const ErrorFour = styled(ErrorSpan)`
  width: 136px;
  height: 43px;
  border-radius: 999px;
  background: linear-gradient(
      140deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.07) 43%,
      transparent 44%,
      transparent 100%
    ),
    linear-gradient(
      105deg,
      transparent 0%,
      transparent 40%,
      rgba(0, 0, 0, 0.06) 41%,
      rgba(0, 0, 0, 0.07) 76%,
      transparent 77%,
      transparent 100%
    ),
    linear-gradient(to right, #d89ca4, #e27b7e);

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 999px;
  }

  &:before {
    width: 43px;
    height: 156px;
    left: 60px;
    bottom: -43px;
    background: linear-gradient(
        128deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.07) 40%,
        transparent 41%,
        transparent 100%
      ),
      linear-gradient(
        116deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.07) 50%,
        transparent 51%,
        transparent 100%
      ),
      linear-gradient(to top, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);
  }

  &:after {
    width: 137px;
    height: 43px;
    transform: rotate(-49.5deg);
    left: -18px;
    bottom: 36px;
    background: linear-gradient(
      to right,
      #99749d,
      #b895ab,
      #cc9aa6,
      #d7969e,
      #e0787f
    );
  }
`;

const ErrorZero = styled(ErrorSpan)`
  vertical-align: text-top;
  width: 156px;
  height: 156px;
  border-radius: 999px;
  background: linear-gradient(
      -45deg,
      transparent 0%,
      rgba(0, 0, 0, 0.06) 50%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(
      to top right,
      #99749d,
      #99749d,
      #b895ab,
      #cc9aa6,
      #d7969e,
      #ed8687,
      #ed8687
    );
  overflow: hidden;
  animation: ${bgshadow} 5s infinite;

  &:before {
    content: "";
    display: block;
    position: absolute;
    transform: rotate(45deg);
    width: 90px;
    height: 90px;
    background-color: transparent;
    left: 0px;
    bottom: 0px;
    background: linear-gradient(
        95deg,
        transparent 0%,
        transparent 8%,
        rgba(0, 0, 0, 0.07) 9%,
        transparent 50%,
        transparent 100%
      ),
      linear-gradient(
        85deg,
        transparent 0%,
        transparent 19%,
        rgba(0, 0, 0, 0.05) 20%,
        rgba(0, 0, 0, 0.07) 91%,
        transparent 92%,
        transparent 100%
      );
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 999px;
    width: 70px;
    height: 70px;
    left: 43px;
    bottom: 43px;
    background: #fdfaf5;
    box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ScreenReaderText = styled.span`
  position: absolute;
  top: -9999em;
  left: -9999em;
`;

const LinkContainer = styled.div`
  text-align: center;
`;

const MoreLink = styled.a`
  text-transform: uppercase;
  font-size: 13px;
  background-color: #de7e85;
  padding: 10px 15px;
  border-radius: 0;
  color: #fff;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 50px;
  letter-spacing: 1px;
`;

const ZoomArea = styled.p`
  max-width: 490px;
  margin: 30px auto 30px;
  font-size: 19px;
  text-align: center;
  color: white;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px 15px;
`;

const GlobalStyles = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700");
  @import url("https://fonts.googleapis.com/css?family=Catamaran:400,800");
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    background-color: #fdfaf5;
    margin-bottom: 50px;
  }
  html,
  button,
  input,
  select,
  textarea {
    font-family: "Montserrat", Helvetica, sans-serif;
    color: #bbb;
  }
`;

export const ErrorPage = () => {
  return (
    <GlobalStyles>
      <ZoomArea>
        <b>お探しのページが見つかりません。</b>
      </ZoomArea>
      <ErrorContainer>
        <ErrorFour>
          <ScreenReaderText>4</ScreenReaderText>
        </ErrorFour>
        <ErrorZero>
          <ScreenReaderText>0</ScreenReaderText>
        </ErrorZero>
        <ErrorFour>
          <ScreenReaderText>4</ScreenReaderText>
        </ErrorFour>
      </ErrorContainer>
    </GlobalStyles>
  );
};

export default ErrorPage;
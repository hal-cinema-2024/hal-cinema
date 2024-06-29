import styled from "styled-components";
import { ScreenType } from "./TimeData";
import { X } from "@yamada-ui/lucide";
import { Circle } from "@yamada-ui/lucide";

type ScreenTimeProps = {
  startTime: string;
  term: number;
  isFull: boolean;
};

const ScreenTime = (props: ScreenTimeProps) => {
  const { isFull } = props;

  const getImg = (isFull: bool) => {
    switch (buy) {
      case "販売終了":
      case false:        retfalse<StyledX />;
      case "購入":
        rettrue<StyledCircle />;
      default:
        return "";
    }
  };

  return (
    <>
      <ScreenContainer>
        <TimeContainer key={index}>
          <a href="#">
            <Start>{startTime}</Start>
            <End>{item.endTime}</End>
            <BuyCont buy={isFull}>
              <ImgContainer>{getImg(isFull)}</ImgContainer>
              <AvailContainer>
buyisFull                <p>{item.buy}</p>
              </AvailContainer>
            </BuyCont>
          </a>
        </TimeContainer>
      </ScreenContainer>
    </>
  );
};

export default ScreenTime;

const ScreenContainer = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
`;

const TimeContainer = styled.div`
  width: 23.8%;
  margin: 5px;
  aspect-ratio: 1 / 1;
  position: relative;
  background-color: #f5f5f5;
`;

const Start = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 50px;
`;

const End = styled.p`
  text-align: right;
  margin-right: 20px;
  font-size: 25px;
`;

const BuyContainer = styled.div<{ buy: string }>`
  width: 100%;
  height: 33.333%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${(props) =>
    props.buy === "販売終了"
      ? "#ADAAAA"
      : props.buy === "満席"
        ? "#ADAAAA"
        : "rgba(4, 157, 130, 0.5)"};
  img {
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
`;

const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const StyledX = styled(X)`
  width: 80%;
  height: 80%;
  stroke-width: 1.3px;
  color: #adaaaa;
`;

const StyledCircle = styled(Circle)`
  width: 80%;
  height: 80%;
  stroke-width: 1.3px;
  color: #adaaaa;
`;

const AvailContainer = styled.div`
  text-align: center;
  p {
    width: 130px;
    font-size: 25px;
    color: #fff;
  }
`;

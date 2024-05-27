import styled from "styled-components";
import { ScreenType } from "./TimeData";
import x from "/src/assets/x.svg";
import circle from "/src/assets/circle.svg";

type ScreenTimeProps = {
  screenData: ScreenType[];
};

const ScreenTime = (props: ScreenTimeProps) => {
  const { screenData } = props;

  const getImg = (buy: string) => {
    switch (buy) {
      case "販売終了":
      case "満席":
        return x;
      case "購入":
        return circle;
      default:
        return "";
    }
  };

  return (
    <>
      <ScreenContainer>
        {screenData.map((item: ScreenType, index) => (
          <TimeContainer key={index}>
            <a href="#">
              <Start>{item.startTime}</Start>
              <End>{item.endTime}</End>
              <BuyContainer buy={item.buy}>
                <img src={getImg(item.buy)} alt="" />
                <AvailContainer>
                  <p>{item.buy}</p>
                </AvailContainer>
              </BuyContainer>
            </a>
          </TimeContainer>
        ))}
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
  border: 1px solid #000;
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

const AvailContainer = styled.div`
  text-align: center;
  p {
    width: 130px;
    font-size: 25px;
    color: #fff;
  }
`;

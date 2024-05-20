import styled from "styled-components";
import { ScreenType, ScreenData } from "./TimeData";
import x from "/src/assets/x.svg";
import circle from "/src/assets/circle.svg";

const ScreenTime = () => {
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
        {ScreenData.map((item: ScreenType, index) => (
          <TimeContainer key={index}>
            <Start>{item.startTime}</Start>
            <End>{item.endTime}</End>
            <BuyContainer buy={item.buy}>
              <img src={getImg(item.buy)} alt="" />
              <AvailContainer>
                <p>{item.buy}</p>
              </AvailContainer>
            </BuyContainer>
          </TimeContainer>
        ))}
      </ScreenContainer>
    </>
  );
};

export default ScreenTime;

const ScreenContainer = styled.div`
  width: 850px;
  /* padding: 20px; */
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
`;

const TimeContainer = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
  /* background-color: #ddd; */
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

// const BuyContainer = styled.div<{ bg: string }>`
const BuyContainer = styled.div<{ buy: string }>`
  width: 100%;
  /* height: 70px; */
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
      ? "#ddd"
      : props.buy === "満席"
        ? "#ddd"
        : "rgba(4, 157, 130, 0.6)"};

  /* background-color: rgb(4 157 130 / 0.6); */
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

    /* background-color: pink; */
  }
`;

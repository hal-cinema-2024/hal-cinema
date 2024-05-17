import styled from "styled-components";

type Screen = {
  startTime: string;
  endTime: string;
  buy: string;
};

const screen: Screen[] = [
  {
    startTime: "10:40",
    endTime: "~ 13:10",
    buy: "‹óÈ",
  },
  {
    startTime: "18:20",
    endTime: "~ 20:50",
    buy: "–žÈ",
  },
  {
    startTime: "20:00",
    endTime: "~ 22:30",
    buy: "‹óÈ",
  },
];

const ScreenTime = () => {
  return (
    <>
      <ScreenContainer>
        {screen.map((item, index) => (
          <TimeContainer key={index}>
            <Start>{item.startTime}</Start>
            <End>{item.endTime}</End>
            <BuyContainer>
              <img src="src/assets/circle.svg" alt="" />
              <p>{item.buy}</p>
            </BuyContainer>
          </TimeContainer>
        ))}
      </ScreenContainer>
    </>
  );
};

export default ScreenTime;

const ScreenContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

const TimeContainer = styled.div`
  height: 250px;
  width: 250px;
  position: relative;
  background-color: #ddd;
`;

const Start = styled.p`
  text-align: center;
  font-size: 40px;
`;
const End = styled.p`
  text-align: right;
  margin-right: 50px;
  font-size: 20px;
`;

const BuyContainer = styled.div`
  width: 100%;
  /* height: 70px; */
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  text-align: center;
  background-color: #f5f5f5;
  img {
    width: 60px;
    background-color: #fff;
  }
  p {
    font-size: 25px;
  }
`;

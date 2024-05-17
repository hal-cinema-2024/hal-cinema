import styled from "styled-components";

type Screen = {
  startTime: string;
  endTime: string;
  buy: string;
  img: string;
};

const screen: Screen[] = [
  {
    startTime: "10:40",
    endTime: "~ 13:10",
    buy: "購入",
    img: "src/assets/circle.svg",
  },
  {
    startTime: "18:20",
    endTime: "~ 20:50",
    buy: "満席",
    img: "src/assets/x.svg",
  },
  {
    startTime: "20:00",
    endTime: "~ 22:30",
    buy: "購入",
    img: "src/assets/circle.svg",
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
              <img src={item.img} alt="" />
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
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

const TimeContainer = styled.div`
  height: 230px;
  width: 230px;
  position: relative;
  background-color: #ddd;
`;

const Start = styled.p`
  text-align: center;
  font-size: 50px;
`;

const End = styled.p`
  text-align: right;
  margin-right: 50px;
  font-size: 25px;
`;

const BuyContainer = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;

  background-color: red;
  img {
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
`;

const AvailContainer = styled.div`
  text-align: center;
  p {
    width: 100px;
    font-size: 25px;

    background-color: pink;
  }
`;

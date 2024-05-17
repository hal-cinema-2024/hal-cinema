import styled from "styled-components";

type Screen = {
  startTime: string;
  endTime: string;
  buy: string;
  img: string;
  // bg: string;
};

const screen: Screen[] = [
  {
    startTime: "10:40",
    endTime: "~ 13:10",
    buy: "販売終了",
    img: "src/assets/x.svg",
    // bg: "#ddd",
  },
  {
    startTime: "18:20",
    endTime: "~ 20:50",
    buy: "満席",
    img: "src/assets/x.svg",
    // bg: "#ddd",
  },
  {
    startTime: "20:00",
    endTime: "~ 22:30",
    buy: "販売",
    img: "src/assets/circle.svg",
    // bg: "rgb(4, 157, 130, 0.6)",
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
            <BuyContainer buy={item.buy}>
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
  width: 650px;
  padding: 20px;
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

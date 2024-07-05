import styled from "styled-components";
import { X } from "@yamada-ui/lucide";
import { Circle } from "@yamada-ui/lucide";
type ScreenTimeProps = {
  startTime: string;
  term: number;
  isFull: boolean;
};

const ScreenTime = (props: ScreenTimeProps) => {
  const { startTime, isFull, term } = props;

  const getImg = (isFull: boolean) => {
    switch (isFull) {
      case false:
        return <StyledX />;
      case true:
        return <StyledCircle />;
      default:
        return null;
    }
  };

  return (
    <>
      <ScreenContainer>
        <TimeContainer>
          <a href='#'>
            <Start>{startTime}〜</Start>
            <End>{term}分間</End>
            <BuyContainer isFull={isFull}>
              <ImgContainer>{getImg(isFull)}</ImgContainer>
              <AvailContainer>
                <p>{isFull ? "Full" : "Available"}</p>
              </AvailContainer>
            </BuyContainer>
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

const BuyContainer = styled.div<{ isFull: boolean }>`
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
    props.isFull ? "#ADAAAA" : "rgba(4, 157, 130, 0.5)"};
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

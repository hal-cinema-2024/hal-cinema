import styled from "styled-components";

type SlideType = {
  month: string;
  week: string;
  day: string;
};
type DateDisplayProps = {
  date: SlideType;
};

const DateDisp = (props: DateDisplayProps) => {
  const { date } = props;

  const month = date.month.padStart(2, "0");
  const day = date.day.padStart(2, "0");

  return (
    <DateDisplayContainer>
      2024年{month}月{day}日
    </DateDisplayContainer>
  );
};

export default DateDisp;

const DateDisplayContainer = styled.div`
  margin-top: 20px;
  font-size: 40px;
  color: #fff;
`;

import styled from "styled-components";
import ScreenTime from "./ScreenTime";
import { ScheduleMock } from "../../../../../mock/types/schedule";

type ScreenDataProps = {
  schedules: ScheduleMock[];
};

export const ScreenData = (props: ScreenDataProps) => {
  const { schedules } = props;

  return (
    <>
      <MovieContainer>
        {schedules.map((schedule: ScheduleMock, index) => (
          <div key={index}>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                margin: "10px 0",
                color: "#fff",
              }}
            >
              {schedule.theater} {schedule.movieName}
            </p>
            <ScreenTime
              key={index}
              startTime={schedule.startTime || ""}
              endTime={schedule.endTime || ""}
              isAvailable={schedule.isAvailable || false}
              scheduleId={schedule.id!.toString()}
            />
          </div>
        ))}
      </MovieContainer>
      <TimeContainer />
    </>
  );
};

const MovieContainer = styled.div`
  width: 100%;
  padding: 10px 5px;
`;

const TimeContainer = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
`;

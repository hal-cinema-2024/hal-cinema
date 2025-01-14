import { createLazyFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import Slideshow from "./-components/Slideshow";
import MovieBox from "./-components/MovieBox";
import { Suspense } from "react";
import { useSchedules } from "./../../../../mock/hooks/useSchedule";
import { SelectMovie } from "./-components/SelectMovie";

export const Route = createLazyFileRoute("/schedules/")({
  component: Index,
});
function Index() {
  const { schedules } = useSchedules();
  return (
    <SchedulesContainer>
      <Title>上映スケジュール</Title>
      <Slideshow />
      <SelectMovie />

      {schedules && (
        <Suspense fallback={<div>loading</div>}>
          <MovieBox schedules={schedules!} />
        </Suspense>
      )}
    </SchedulesContainer>
  );
}

const SchedulesContainer = styled.div`
  padding: 30px 0 100px;
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  padding-top: 4vh;
  margin-bottom: -2.5vh;
  font-size: 2rem;
  color: white;
`;

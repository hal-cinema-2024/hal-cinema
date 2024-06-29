export type TheaterSchedule = {
  [theaterId: string]: {
    scheduleId: string | undefined;
    startTime: string | undefined;
    term: number | undefined;
    isFull: boolean | undefined;
  }[];
};

export type TransformedData = {
  movieName: string | undefined;
  theaterSchedule: TheaterSchedule;
};

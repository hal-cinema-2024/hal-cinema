export type TheaterSchedule = {
  [theaterId: string]: {
    scheduleId: string;
    startTime: string;
    term: number;
    isFull: boolean;
  }[];
};

export type TransformedData = {
  movieName: string;
  theaterSchedule: TheaterSchedule;
};

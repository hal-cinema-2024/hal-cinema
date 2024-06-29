export type TheaterSchedule = {
  theaterId: string;
  schedules: {
    scheduleId: string;
    startTime: string;
    term: number;
    isFull: boolean;
  }[];
};

export type TransformedData = {
  movieName: string;
  theaterSchedule: TheaterSchedule[];
};

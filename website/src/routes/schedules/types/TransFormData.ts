export type TheaterSchedule = {
  theater: string;
  schedules: {
    scheduleId: string;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
  }[];
};

export type TransformedData = {
  movieName: string;
  theaterSchedule: TheaterSchedule[];
};

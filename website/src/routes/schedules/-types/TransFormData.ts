export type TheaterSchedule = {
  theater: string;
  schedules: {
    id: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
  }[];
};

export type TransformedData = {
  movieName: string;
  theaterSchedule: TheaterSchedule[];
};

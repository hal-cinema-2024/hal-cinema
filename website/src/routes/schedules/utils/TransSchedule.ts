import { ScheduleInterface } from "../../../../../fe-api/interfaces/schedule";
import { TheaterSchedule, TransformedData } from "../types/TransFormData";

export function transformData(data: ScheduleInterface[]): TransformedData[] {
  const groupedByMovie: {
    [movieName: string]: { [theater: string]: TheaterSchedule };
  } = {};

  data.forEach((item) => {
    if (item.movieName && item.theater) {
      if (!groupedByMovie[item.movieName]) {
        groupedByMovie[item.movieName] = {};
      }

      if (!groupedByMovie[item.movieName][item.theater]) {
        groupedByMovie[item.movieName][item.theater] = {
          theater: item.theater,
          schedules: [],
        };
      }

      groupedByMovie[item.movieName][item.theater].schedules.push({
        scheduleId: item.scheduleId || "",
        startTime: item.startTime || "",
        endTime: item.endTime || "",
        isAvailable: item.isAvailable || false,
      });
    }
  });

  return Object.keys(groupedByMovie).map((movieName) => ({
    movieName,
    theaterSchedule: Object.values(groupedByMovie[movieName]),
  }));
}

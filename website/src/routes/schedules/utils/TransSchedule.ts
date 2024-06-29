import { ScheduleInterface } from "../../../../../fe-api/interfaces/schedule";
import { TransformedData } from "../types/TransFormData";

export function transformData(data: ScheduleInterface[]): TransformedData[] {
  const result: { [movieName: string]: TransformedData } = {};

  data.forEach((item) => {
    const { movieName, theaterId, scheduleId, startTime, term, isFull } = item;

    // Skip invalid data
    if (!movieName || !theaterId) {
      return;
    }

    // Check if movieName exists in result, if not, create a new entry
    if (!result[movieName]) {
      result[movieName] = {
        movieName: movieName,
        theaterSchedule: {},
      };
    }

    // Check if theater exists in theaterSchedule, if not, create a new entry
    if (!result[movieName].theaterSchedule[theaterId]) {
      result[movieName].theaterSchedule[theaterId] = [];
    }

    // Add the schedule to the appropriate theater
    result[movieName].theaterSchedule[theaterId].push({
      scheduleId,
      startTime,
      term,
      isFull,
    });
  });

  return Object.values(result);
}

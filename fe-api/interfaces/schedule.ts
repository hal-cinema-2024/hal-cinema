import {
  V1GetScheduleResult,
  V1GetSchedulesResponse,
  V1CreateScheduleResponse,
  V1CreateScheduleRequest,
  V1DeleteScheduleResponse,
  V1UpdateScheduleResponse,
} from "../../api/@types/index.ts";

type UpdateScheduleRequestBodyInterface = V1CreateScheduleRequest;
export type {
  V1GetScheduleResult as ScheduleInterface,
  V1GetSchedulesResponse as GetSchedulesResponseInterface,
  V1CreateScheduleResponse as CreateScheduleResponseInterface,
  V1CreateScheduleRequest as CreateScheduleRequestBodyInterface,
  V1UpdateScheduleResponse as UpdateScheduleResponseInterface,
  UpdateScheduleRequestBodyInterface,
  V1DeleteScheduleResponse as DeleteScheduleResponseInterface,
};

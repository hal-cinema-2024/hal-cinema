import {
  V1Schedule,
  V1GetSchedulesResponse,
  V1CreateScheduleResponse,
  V1CreateScheduleRequest,
  V1DeleteScheduleResponse,
  V1UpdateScheduleResponse,
} from "../../../../api/@types/index.ts";

type UpdateScheduleRequestInterface = V1CreateScheduleRequest;
export type {
  V1Schedule as ScheduleInterface,
  V1GetSchedulesResponse as GetSchedulesResponseInterface,
  V1CreateScheduleResponse as CreateScheduleResponseInterface,
  V1CreateScheduleRequest as CreateScheduleRequestInterface,
  V1UpdateScheduleResponse as UpdateScheduleResponseInterface,
  UpdateScheduleRequestInterface,
  V1DeleteScheduleResponse as DeleteScheduleResponseInterface,
};

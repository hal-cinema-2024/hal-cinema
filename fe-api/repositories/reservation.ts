import { client } from "../utils/aspida";

import type {
  CreateSeatReservationResponseInterface,
  CreateSeatReservationRequestBodyInterface,
  DeleteSeatReservationResponseInterface,
} from "../interfaces/reservation";

export const createReservation = async (
  requestBody: CreateSeatReservationRequestBodyInterface
) => {
  try {
    const res: CreateSeatReservationResponseInterface =
      await client.v1.reservations.$post({
        body: requestBody,
      });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteReservation = async (theaterSeatId: string) => {
  try {
    const res: DeleteSeatReservationResponseInterface =
      await client.v1.reservations._theaterSeatId(theaterSeatId).$delete();
    return res;
  } catch (err) {
    console.log(err);
  }
};

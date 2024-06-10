import axios from "axios";
import qs from "qs";
import aspida from "@aspida/axios";
import api from "../../../api/$api";
export const client = api(
  aspida(axios, {
    paramsSerializer: (params) => qs.stringify(params, { indices: false }),
  })
);

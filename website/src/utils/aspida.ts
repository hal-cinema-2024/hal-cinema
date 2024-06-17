import axios from "axios";
import qs from "qs";
import aspida from "@aspida/axios";
import api from "../../../api/$api";
export const client = api(
  aspida(axios, {
    baseURL: "http://localhost:8080",
    paramsSerializer: (params) => qs.stringify(params),
    headers: {
      Origin: "http://localhost:3000",
    },
  })
);

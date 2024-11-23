import axios from "axios";
import aspida from "@aspida/axios";
import api from "../../api/$api";
import qs from "qs";
export const client = api(
  aspida(axios, {
    paramsSerializer: (params) => qs.stringify(params),
    headers: {
      Origin: "http://localhost:3000",
    },
  })
);

import axios from "npm:axios@1.4.0";

export const api = axios.create({
  baseURL: "http://boxlimon.com/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

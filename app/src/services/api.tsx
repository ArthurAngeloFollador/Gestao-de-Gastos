import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3050",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});

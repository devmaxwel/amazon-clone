import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5001/clone-d060f/us-central1/api",
});
import axios from "axios";

const requester = axios.create({
  baseURL: "https://disease.sh/v3/covid-19",
});
export default requester;

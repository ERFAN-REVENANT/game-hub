import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e7884e9b0f3c41fd8bcef1f5d6b5defc",
  },
});


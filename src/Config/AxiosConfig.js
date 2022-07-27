import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/comments",
  headers: {
    "Content-Type": "application/json",
    // token: localStorage.getItem("token") || "",
  },
});

export default http;
import axios from "axios";

const TOKEN = "ccua8d2ad3iei7t0rchgccua8d2ad3iei7t0rci0";
export default axios.create({
  // Creates an axios object in which all requests made from the axios objects will use this URL as baseURL
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
});

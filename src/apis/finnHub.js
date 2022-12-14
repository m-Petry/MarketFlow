import axios from "axios";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1" // Creates an axios object with a baseurl in which all requests made from the axios object will use this URL as a base
});

import axios from "axios";
const baseurl = "http://localhost:3001/persons";

const create = (phone) =>
  axios.post(baseurl, phone).then((response) => response.data);

export default {
  create,
};

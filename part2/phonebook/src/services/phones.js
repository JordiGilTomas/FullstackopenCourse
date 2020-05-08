import axios from "axios";
const baseurl = "http://localhost:3001/persons";

const getAll = () =>
  axios.get("http://localhost:3001/persons").then((response) => response.data);

const create = (phone) =>
  axios.post(baseurl, phone).then((response) => response.data);

const remove = (id) => {
  axios.delete(`${baseurl}/${id}`).then((response) => response.data);
};

export default {
  create,
  remove,
  getAll,
};

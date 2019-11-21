import axios from "axios";
const instance = axios.create();
instance.defaults.headers.common["Accept"] = "application/json";
const tokenRead = token => {
  instance.defaults.headers.common["Authorization"] = token;
};

const isAuthenticated = () => {
  return instance.defaults.headers.common["Authorization"];
};
export { instance, tokenRead, isAuthenticated };

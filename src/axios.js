import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    try {
      if (error.response.status === 401) {
        if (error.config.url.includes("auth/jwt/create")) {
          return Promise.reject(error);
        }
        // localStorage.removeItem("access");
        // localStorage.removeItem("refresh");
        // location.href = "/";
      }
      return Promise.reject(error);
    } catch (err) {
      console.log({ err, error });
    }
  }
);

export default axios;

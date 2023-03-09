import axios from "axios";
const $api = axios.create({
  baseURL: "http://localhost:3000",
});
// Request interceptor for API calls
$api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken")(
      (config.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      })
    );

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

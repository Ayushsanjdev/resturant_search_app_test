function callAPI(url, type, success, error, data, key) {
  const interceptor = Axios.interceptors.request.use(function (config) {
    if (key) {
      config.headers["x-api-key"] = key;
    } else {
      config.headers["X-Auth-Token"] = get("GSG_client_auth");
    }
    return config;
  });
  switch (type) {
    case "get":
      Axios.get(url)
        .then((data) => {
          success(data);
        })
        .catch((err) => {
          error(err);
        });
      break;
    case "post":
      Axios.post(url, data)
        .then((data) => {
          success(data);
        })
        .catch((err) => {
          error(err);
        });
      break;
    default:
      return;
  }
  Axios.interceptors.request.eject(interceptor); //Cleanup up old config AV
}
export {callAPI};
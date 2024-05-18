import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://localhost:5000/api",
  headers: { Accept: "application/vnd.github.v3+json" },
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = JSON.parse(sessionStorage.getItem("token"));

  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

export default apiClient;

import { hc } from "hono/client";
import { AppType } from "../../../server/app";

const api = hc<AppType>("/");
export default api.api;

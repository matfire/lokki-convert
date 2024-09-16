import { QueryClient } from "@tanstack/react-query";
import { Axios } from "axios";
import { Currency } from "@/utils/types.ts";

const client = new QueryClient();
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3333";
const axiosClient = new Axios({ baseURL: BASE_URL });

async function getCurrencies() {
  const res = await axiosClient.get<{ currencies: Array<Currency> }>(
    "/currencies",
  );
  return JSON.parse(res.data);
}

async function convert(data: { to: string; from: string; value: number }) {
  const res = await axiosClient.post("/convert", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

export default client;
export { getCurrencies, convert };

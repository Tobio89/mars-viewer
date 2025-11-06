import { useQuery } from "@tanstack/react-query";
import { url_prefix } from "src/const";

import type { VisualisationConfig } from "./types";

async function fetchConfig() {
  const url = url_prefix.config;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const useVisConfig = () => {
  const query = useQuery<VisualisationConfig>({
    queryKey: ["config"],
    queryFn: async () => fetchConfig(),
  });
  return query;
};

import { useQuery } from "@tanstack/react-query";
import { url_prefix } from "@consts/index";

async function fetchMetadata(tileName: string) {
  const url =
    tileName === "base"
      ? url_prefix.metadata.base
      : url_prefix.metadata.annotated;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const useMetadata = (tileName: string) => {
  const query = useQuery({
    queryKey: ["metadata", tileName],
    queryFn: async () => fetchMetadata(tileName),
  });
  return query;
};

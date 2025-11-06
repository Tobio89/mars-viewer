import { useQuery } from "@tanstack/react-query";
import { url_prefix } from "src/const";

async function fetchMarsData(dataCategory: string) {
  const url = `${url_prefix.data}/${dataCategory}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const useMarsData = (dataCategory: string) => {
  const query = useQuery({
    queryKey: ["mars-data", dataCategory],
    queryFn: async () => fetchMarsData(dataCategory),
  });
  return query;
};

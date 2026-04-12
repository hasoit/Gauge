import { useQuery } from "@tanstack/react-query";
import { fetchRPM } from "./rpm";

export const RPMDisplay = (min: number, max: number): number | undefined => {
  const { data } = useQuery<number>({
    queryKey: ["rpm"],
    queryFn: () => fetchRPM(min, max),
    refetchInterval: 1000
  });

  return data;
};

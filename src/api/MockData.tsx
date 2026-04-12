import { useQuery } from "@tanstack/react-query";
import { fetchRPM } from "./rpm";

export const RPMDisplay = (min: number, max: number, refreshRateMS: number = 100): number => {
  const { data } = useQuery<number>({
    queryKey: ["rpm"],
    queryFn: () => fetchRPM(min, max),
    refetchInterval: refreshRateMS
  });

  return data ?? 0;
};

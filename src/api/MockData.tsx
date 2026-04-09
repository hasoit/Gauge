import { useQuery } from "@tanstack/react-query";
import { fetchRPM } from "./rpm";

export const RPMDisplay = (): number | undefined => {
  const { data } = useQuery<number>({
    queryKey: ["rpm"],
    queryFn: fetchRPM,
    refetchInterval: 100
  });

  return data;
};

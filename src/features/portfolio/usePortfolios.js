import { useQuery } from "@tanstack/react-query";
import { getPortfolios } from "../../apiServices/apiPortfolios";

export default function usePortfolios() {
  const { isLoading, data } = useQuery({
    queryKey: ["portfiolios"],
    queryFn: getPortfolios,
    staleTime: 1000,
  });
  //   console.log("data from getPortfolios, usePortfolios", data);
  return { isLoading, data };
}

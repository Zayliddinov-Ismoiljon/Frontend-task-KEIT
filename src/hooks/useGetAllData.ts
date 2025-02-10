/** @format */

import i18next from "i18next";
import {  useQuery } from "@tanstack/react-query";
import { CLIENT_API } from "../services/client.request";

const useGetAllData = <T = any>({ queryKey, url, options, urlParams,}: {
  queryKey: Array<string | number | undefined |any>;
  url: string;
  options?: any;
  urlParams?: Record<string | number, any>;
}) => {
  const response = useQuery<T>({
    queryKey: [...queryKey, i18next.language],
    queryFn: () => CLIENT_API.getAll({ url, _params: urlParams }),
    ...options,
  });

  return { ...response };
};

export default useGetAllData;



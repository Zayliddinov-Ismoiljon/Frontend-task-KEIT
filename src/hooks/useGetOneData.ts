/** @format */

import i18next from "i18next";
import { useQuery } from "@tanstack/react-query";
import { CLIENT_API } from "../services/client.request";

const useGetOneData = <T = any>({ queryKey, url, options, urlParams,}: {
    queryKey: Array<string | number | undefined>;
    url: string;
    options?: any;
    urlParams?: Record<string | number, any>;
}) => {
    const response = useQuery<T>({
        queryKey: [...queryKey, i18next.language],
        queryFn: () => CLIENT_API.getOne({ url, _params: urlParams }),
        ...options,
    });

    return { ...response };
};

export default useGetOneData;
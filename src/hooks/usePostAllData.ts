import { useMutation } from "@tanstack/react-query";
import { CLIENT_API } from "../services/client.request";

const usePostAllData = <T = any>({ url, options }: { url: string; options?: any }) => {
  const response = useMutation<T, unknown, Record<string | number, any>>({
    mutationFn: (data) => CLIENT_API.postAll({ url, data }),
    ...options,
  });

  return { ...response };
};

export default usePostAllData;

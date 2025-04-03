import instance from "../config/axios";
import { Notification } from "../utils/notification";

export const delete_data = async (url: string, id: number | string, data?: any): Promise<any> => {
    const response = await instance(data ? { url: `${url}${id}&type=SOFT_DELETE`, method: "PUT", data: data } : { url: `${url}${id}&type=SOFT_DELETE`, method: "PUT" });

    if (response.status >= 200 && response.status < 300) {
        Notification('success', 'delete', response.data?.message)
    } else {
        Notification('error', 'delete', response.data?.message)
    }

    return response
}
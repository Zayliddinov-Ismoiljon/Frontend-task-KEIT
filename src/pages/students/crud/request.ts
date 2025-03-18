import i18next from "i18next";
import instance from "../../../config/axios";

export async function submitData(id: number | undefined, data: any) {
    const formdata = new FormData();
    for (const key in data) {
        if(key === "status"){
            formdata.append('status', data?.status ? "1" : "0")
        }else if(key === "name"){
            formdata.append(`name[${i18next?.language}]`, data[key])
        }else if(key === "description"){
            formdata.append(`description[${i18next?.language}]`, data[key])
        }else {
            formdata.append(key, data[key])
        }
    }

    const url = id ? `/edu-years/${id}` : `/edu-years`
    const response = await instance({ url, method: id? "PUT" : "POST", data: formdata });
    return response.data;
}

export async function changeStatus(data: number) {
    const response = await instance({ url: `/edu-years/${data}`, method: "PUT" });
    return response.data;
}
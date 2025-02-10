import instance from "../../../config/axios";

export async function submitData(id: number | undefined, _url: string, data: any) {
    const formdata = new FormData();
        for (const key in data) {
            if(data[key] != undefined || data[key] != null){
                if(key === "status"){
                    formdata.append('status', data?.status ? "1" : "0")
                }else if(key === "name"){
                    formdata.append(`name`, data[key])
                }else if(key === "description"){
                    formdata.append(`description`, data[key])
                }else {
                    formdata.append(key, data[key])
                }
            }
        }

    const url = id ? `${_url}/${id}` : `${_url}`
    const response = await instance({ url, method: id? "PUT" : "POST", data: formdata });
    return response.data;
}
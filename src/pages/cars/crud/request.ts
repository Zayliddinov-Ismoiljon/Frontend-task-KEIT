import instance from "../../../config/axios";

export async function submitData(data: any) {
  const url = `/car-value`;
  const response = await instance({
    url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });

  return response.data;
}

import instance from "../../../config/axios";

export async function updateData(data: any) {
  const url = `/car-value`;
  const response = await instance({
    url,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });

  return response.data;
}

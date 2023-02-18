import axiosInstance from "configs/axios";

const getSoldiers = async () => {
  const { data } = await axiosInstance({
    method: "get",
    url: "/soldiers",
  });
  return data;
};

export { getSoldiers };

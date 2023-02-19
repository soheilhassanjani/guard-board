import axiosInstance from "configs/axios";

const postAddNewSoldier = async (params) => {
  const { data } = await axiosInstance({
    method: "post",
    url: "/addNewSoldier",
    data: params,
  });
  return data;
};

const getSoldiers = async () => {
  const { data } = await axiosInstance({
    method: "get",
    url: "/soldiers",
  });
  return data;
};

const deleteSoldier = async (params) => {
  const { data } = await axiosInstance({
    method: "delete",
    url: "/deleteSoldier",
    data: params,
  });
  return data;
};
export { getSoldiers, postAddNewSoldier, deleteSoldier };

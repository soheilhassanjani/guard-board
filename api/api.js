import axiosInstance from "configs/axios";

const getSoldiers = async () => {
  const { data } = await axiosInstance({
    method: "get",
    url: "/soldiers",
  });
  return data;
};

const postAddNewSoldier = async (params) => {
  const { data } = await axiosInstance({
    method: "post",
    url: "/addNewSoldier",
    data: params,
  });
  return data;
};

const putUpdateSoldier = async (params) => {
  const { data } = await axiosInstance({
    method: "put",
    url: "/updateSoldier",
    data: params,
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

const getGuardBoards = async () => {
  const { data } = await axiosInstance({
    method: "get",
    url: "/guardBoards",
  });
  return data;
};

const postAddNewGuardBoard = async (params) => {
  const { data } = await axiosInstance({
    method: "post",
    url: "/addNewGuardBoard",
    data: params,
  });
  return data;
};

const putUpdateGuardBoard = async (params) => {
  const { data } = await axiosInstance({
    method: "put",
    url: "/updateGuardBoard",
    data: params,
  });
  return data;
};

const deleteGuardBoard = async (params) => {
  const { data } = await axiosInstance({
    method: "delete",
    url: "/deleteGuardBoard",
    data: params,
  });
  return data;
};

export {
  getSoldiers,
  postAddNewSoldier,
  putUpdateSoldier,
  deleteSoldier,
  getGuardBoards,
  postAddNewGuardBoard,
  putUpdateGuardBoard,
  deleteGuardBoard,
};

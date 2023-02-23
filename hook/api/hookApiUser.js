import * as api from "@api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetSoldiers = () => {
  return useQuery({
    queryKey: ["getSoldiers"],
    queryFn: () => api.getSoldiers(),
  });
};

const useGetSoldierById = (params) => {
  return useQuery({
    queryKey: ["getSoldierById"],
    queryFn: () => api.getSoldierById(params),
    enabled: !!params,
  });
};

const usePostAddNewSoldier = () => {
  const queryClient = useQueryClient();
  return useMutation(api.postAddNewSoldier, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getSoldiers"]);
      queryClient.invalidateQueries(["getSoldierById"]);
    },
  });
};

const usePutUpdateSoldier = () => {
  const queryClient = useQueryClient();
  return useMutation(api.putUpdateSoldier, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getSoldiers"]);
      queryClient.invalidateQueries(["getSoldierById"]);
    },
  });
};

const useDeleteSoldier = () => {
  const queryClient = useQueryClient();
  return useMutation(api.deleteSoldier, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getSoldiers"]);
      queryClient.invalidateQueries(["getSoldierById"]);
    },
  });
};

const useGetGuardBoards = () => {
  return useQuery({
    queryKey: ["getGuardBoards"],
    queryFn: () => api.getGuardBoards(),
  });
};

const useGetGuardBoardById = (params) => {
  return useQuery({
    queryKey: ["getGuardBoardById"],
    queryFn: () => api.getGuardBoardById(params),
    enabled: !!params,
  });
};

const usePostAddNewGuardBoard = () => {
  const queryClient = useQueryClient();
  return useMutation(api.postAddNewGuardBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getGuardBoards"]);
      queryClient.invalidateQueries(["getGuardBoardById"]);
    },
  });
};

const usePutUpdateGuardBoard = () => {
  const queryClient = useQueryClient();
  return useMutation(api.putUpdateGuardBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getGuardBoards"]);
      queryClient.invalidateQueries(["getGuardBoardById"]);
    },
  });
};

const useDeleteGuardBoard = () => {
  const queryClient = useQueryClient();
  return useMutation(api.deleteGuardBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getGuardBoards"]);
      queryClient.invalidateQueries(["getGuardBoardById"]);
    },
  });
};

export {
  useGetSoldiers,
  useGetSoldierById,
  usePostAddNewSoldier,
  usePutUpdateSoldier,
  useDeleteSoldier,
  useGetGuardBoards,
  useGetGuardBoardById,
  usePostAddNewGuardBoard,
  usePutUpdateGuardBoard,
  useDeleteGuardBoard,
};

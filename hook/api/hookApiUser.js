import * as api from "@api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetSoldiers = () => {
  return useQuery({
    queryKey: ["getSoldiers"],
    queryFn: () => api.getSoldiers(),
  });
};

const usePostAddNewSoldier = () => {
  const queryClient = useQueryClient();
  return useMutation(api.postAddNewSoldier, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getSoldiers"]);
    },
  });
};

const usePutUpdateSoldier = () => {
  const queryClient = useQueryClient();
  return useMutation(api.putUpdateSoldier, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getSoldiers"]);
    },
  });
};

const useDeleteSoldier = () => {
  const queryClient = useQueryClient();
  return useMutation(api.deleteSoldier, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getSoldiers"]);
    },
  });
};

const useGetGuardBoards = () => {
  return useQuery({
    queryKey: ["getGuardBoards"],
    queryFn: () => api.getGuardBoards(),
  });
};

const usePostAddNewGuardBoard = () => {
  const queryClient = useQueryClient();
  return useMutation(api.postAddNewGuardBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getGuardBoards"]);
    },
  });
};

const usePutUpdateGuardBoard = () => {
  const queryClient = useQueryClient();
  return useMutation(api.putUpdateGuardBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getGuardBoards"]);
    },
  });
};

const useDeleteGuardBoard = () => {
  const queryClient = useQueryClient();
  return useMutation(api.deleteGuardBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getGuardBoards"]);
    },
  });
};

export {
  useGetSoldiers,
  usePostAddNewSoldier,
  usePutUpdateSoldier,
  useDeleteSoldier,
  useGetGuardBoards,
  usePostAddNewGuardBoard,
  usePutUpdateGuardBoard,
  useDeleteGuardBoard,
};

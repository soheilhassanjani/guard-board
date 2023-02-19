import * as api from "@api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// const usePostUserRequestResetPassword = () => {
//   return useMutation(api.postUserRequestResetPassword);
// };

const usePostAddNewSoldier = () => {
  return useMutation(api.postAddNewSoldier);
};

// const useGetUserStatisticalDataForProfileView = () => {
//   return useQuery({
//     queryKey: ["getUserStatisticalDataForProfileView"],
//     queryFn: () => api.getUserStatisticalDataForProfileView(),
//   });
// };

const useGetSoldiers = () => {
  return useQuery({
    queryKey: ["getSoldiers"],
    queryFn: () => api.getSoldiers(),
  });
};

const useDeleteSoldier = () => {
  return useMutation(api.deleteSoldier);
};

// const useGetUserMe = () => {
//   return useQuery({
//     queryKey: ["getUserMe"],
//     queryFn: () => api.getUserMe(),
//   });
// };

// const usePutUserUpdateInfo = () => {
//   const queryClient = useQueryClient();
//   return useMutation(api.putUserUpdateInfo, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["getUserMe"]);
//       queryClient.invalidateQueries(["getUserStatisticalDataForProfileView"]);
//     },
//   });
// };

// const useGetUserNLastMedia = (params) => {
//   return useQuery({
//     queryKey: ["getUserNLastMedia", params],
//     queryFn: () => api.getUserNLastMedia(params),
//     enabled: !!params,
//   });
// };

export {
  // usePostUserRequestResetPassword,
  usePostAddNewSoldier,
  // useGetUserStatisticalDataForProfileView,
  useGetSoldiers,
  useDeleteSoldier,
  // useGetUserMe,
  // usePutUserUpdateInfo,
  // useGetUserNLastMedia,
};

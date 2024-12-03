import { API } from "@/services/endPoints";
import { QueryParams } from "@/types/api-request";
import {
  useDeleteData,
  useFetchData,
  useFetchDetails,
  usePostData,
  useUpdateData,
} from "@/hooks/api-request";
import { HeroApiResponse } from "../hero.types";

export const useHeroList = (params: QueryParams) => {
  return useFetchData<HeroApiResponse>({
    url: `${API.HERO.LIST}`,
    params: params,
  });
};

export const useCreateHero = () => {
  return usePostData({
    url: `${API.HERO.ADD}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Hero added successfully", data);
      },
      onError: (error) => {
        console.log("Hero addition failed", error);
      },
    },
  });
};

export const useUpdateHero = () => {
  return useUpdateData({
    url: `${API.HERO.UPDATE}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Hero updated successfully", data);
      },
      onError: (error) => {
        console.log("Hero update failed", error);
      },
    },
  });
};

export const useDeleteHero = () => {
  return useDeleteData({
    url: `${API.HERO.DELETE}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Hero deleted successfully", data);
      },
      onError: (error) => {
        console.log("Hero deletion failed", error);
      },
    },
  });
};

export const useHeroDetails = (id: number) => {
  return useFetchDetails({
    url: API.HERO.DELETE,
    id,
    queryOptions: {},
  });
};

import { AxiosResponse } from "axios";
import { IReviews } from "../interface/Reviews.interface";
import instance from "./config.service";

export const reviewsService = {
  fetchReviews: async (): Promise<AxiosResponse<IReviews[]>> =>
    await instance.get<IReviews[]>("/get-reviews"),
  createReview: async ({
    title,
    description,
  }: IReviews): Promise<AxiosResponse<IReviews>> => {
    return await instance.post<IReviews>("/create-review", {
      title,
      description,
    });
  },
  deleteReview: async (_id: string): Promise<AxiosResponse<void>> =>
    await instance.delete<void>("/delete-review", { data: { _id } }),
};

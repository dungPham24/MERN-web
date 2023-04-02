import { ApiConstant } from "const";
import { createApiRegistration } from "../api";

export const Alldoctor = data => createApiRegistration().get(ApiConstant.GET_ALL_DOCTOR, data);
export const postdetailsDoctor = data => createApiRegistration().post(ApiConstant.POST_DETAIL_DOCTOR, data);
export const detailsDoctor  = data => createApiRegistration().get(ApiConstant.GET_DETAILS_DOCTOR, data);
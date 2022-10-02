import { ApiConstant } from "const";
import { createApiRegistration } from "../api";

export const Alldoctor = data => createApiRegistration().get(ApiConstant.GET_ALL_DOCTOR, data);

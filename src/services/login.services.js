import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";

export const checkLogin = data => createApiRegistration().post(ApiConstant.GANTT_CHAT, data);

export const createUser = data => createApiRegistration().post(ApiConstant.CREATE_USER, data);

export const getTopdoctor = data => createApiRegistration().get(ApiConstant.GET_TOP_DOCTOR, data);

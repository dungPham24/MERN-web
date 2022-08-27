import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";

export const checkLogin = data => createApiRegistration().post(ApiConstant.GANTT_CHAT, data);

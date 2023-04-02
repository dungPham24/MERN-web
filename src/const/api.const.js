export const BASE_URL = "http://localhost:8083/api/";

export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const TIMEOUT = 10000;

export const STT_OK = 200;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;
export const STT_DUPLICATE_MESSAGE = 700;
export const STT_MAINTAIN = 503;
export const STT_SUCESS = 0;

export const GANTT_CHAT = "login";
export const CREATE_USER = "create/newUser";
export const GET_TOP_DOCTOR = "doctor/top";
export const GET_ALL_DOCTOR = "all/doctors";
export const POST_DETAIL_DOCTOR = "info/doctors";
export const GET_DETAILS_DOCTOR = "details/doctor"

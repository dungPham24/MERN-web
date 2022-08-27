import { ApiConstant, AppConstant } from "const";
import apisauce from "apisauce";
import Cookies from "js-cookie";

export const API_CONFIG_REG = {
  baseURL: ApiConstant.BASE_URL,
  headers: ApiConstant.HEADER_DEFAULT,
  timeout: ApiConstant.TIMEOUT,
};

export const createApiWithToken = (initConfig = API_CONFIG_REG, token) => {
  let appToken = Cookies.get(AppConstant.KEY_TOKEN);
  if (appToken) {
    initConfig.headers.Authorization = `Bearer ${appToken}`;
  }
  return apisauce.create(initConfig);
};

export const createApiRegistration = () => createApiWithToken(API_CONFIG_REG);

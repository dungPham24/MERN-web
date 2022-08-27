import { call, put, select } from "redux-saga/effects";
import { LoginService } from "../services";
import LoginAction from "../redux/login.redux";
// import { handlingLogin } from "../utils";

export function* checkLogin(action) {
  try {
    const { data } = action;

    let response = yield call(LoginService.checkLogin, data);
    console.log(response);
    // let dataLogin = response.data.data;

    // if (response.status === 200 && dataLogin) {
    //   handlingLogin(dataLogin);
    //   yield put(
    //     LoginAction.loginSuccess({
    //       isLoginSuccess: true,
    //     }),
    //   );
    // } else {
    //   yield put(LoginAction.loginFailure(response.data));
    // }
  } catch (error) {
    // yield put(LoginAction.loginFailure(error));
    console.log(error);
  }
}

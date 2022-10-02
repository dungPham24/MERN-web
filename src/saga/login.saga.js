import { call, put, select } from "redux-saga/effects";
import { LoginService } from "../services";
import LoginAction from "../redux/login.redux";
import { handlingLogin } from "utils";
import { ApiConstant } from "const";

export function* checkLogin(action) {
  try {
    const { data } = action;
    let response = yield call(LoginService.checkLogin, data);
    let dataLogin = response.data.user;
    if (response.status === ApiConstant.STT_OK && dataLogin) {
      handlingLogin(dataLogin);
      yield put(
        LoginAction.loginSuccess({
          isLoginSuccess: true,
        }),
      );
    } else {
      yield put(LoginAction.loginFailure(response.data));
    }
  } catch (error) {
    yield put(LoginAction.loginFailure(error));
    console.log(error);
  }
}

export function* createUser(action) {
  try {
    const { data } = action;
    let response = yield call(LoginService.createUser, data);
    console.log(response);
    if (response.status === ApiConstant.STT_OK) {
      console.log(response);
    } else {
      yield put(LoginAction.loginFailure(response.data));
    }
  } catch (error) {
    // yield put(LoginAction.loginFailure(error));
    console.log(error);
  }
}

export function* getTopDoctor(action) {
  const { data } = action;
  try {
    let response = yield call(LoginService.getTopdoctor, data);
    if (response.status === ApiConstant.STT_OK) {
      yield put(
        LoginAction.conversationSet({
          getDataTopDoctor: response.data.data,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

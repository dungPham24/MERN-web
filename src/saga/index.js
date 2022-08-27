import { takeLatest, all } from "redux-saga/effects";
///import redux
import { checkLogin } from "./login.saga";
import { LoginTypes } from "../redux/login.redux";

export default function* root() {
  yield all([takeLatest(LoginTypes.CHECK_LOGIN, checkLogin)]);
}

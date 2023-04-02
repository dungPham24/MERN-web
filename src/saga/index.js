import { takeLatest, all } from "redux-saga/effects";
///import redux
import { checkLogin, createUser, getTopDoctor } from "./login.saga";
import { LoginTypes } from "../redux/login.redux";
import { InformationTypes } from "redux/information.redux";
import { Alldoctor, detailsDoctor, postDetailsDoctor } from "./information.saga";

export default function* root() {
  yield all([
    takeLatest(LoginTypes.CHECK_LOGIN, checkLogin),
    takeLatest(LoginTypes.CREATE_USER, createUser),
    takeLatest(LoginTypes.GET_TOP_DOCTOR, getTopDoctor),

    takeLatest(InformationTypes.ALL_DOCTOR, Alldoctor),
    takeLatest(InformationTypes.POST_DETAILS_DOCTOR, postDetailsDoctor),
    takeLatest(InformationTypes.DETAILS_DOCTOR, detailsDoctor),
  ]);
}

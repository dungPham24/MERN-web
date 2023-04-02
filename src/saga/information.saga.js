import { call, put, select } from "redux-saga/effects";
import { ApiConstant } from "const";
import { InformationService } from "../services";
import InfomationRedux from "../redux/information.redux";

export function* Alldoctor(action) {
  try {
    const { data } = action;
    let response = yield call(InformationService.Alldoctor, data);

    if (response.status === ApiConstant.STT_OK) {
      yield put(
        InfomationRedux.conversationSet({
          allDoctors: response.data.data,
        }),
      );
    } else {
      yield put(InfomationRedux.loginFailure(response.data));
    }
  } catch (error) {
    yield put(InfomationRedux.loginFailure(error));
    console.log(error);
  }
}

export function* postDetailsDoctor(action) { 
  try {
    const { data } = action
    let response = yield call(InformationService.postdetailsDoctor, data)
    if (response.data.errCode === ApiConstant.STT_SUCESS) {
      yield put(
        InfomationRedux.conversationSet({
          successDetailsDoctor:true,
        }),
      );
   }
  } catch (error) {
    console.log(error);
  }

}

export function* detailsDoctor(action) {
  try {
    const { data } = action
    let response = yield call(InformationService.detailsDoctor, data)
    if (response.data.errCode === 0) {
      yield put(InfomationRedux.conversationSet({
        detailsDoctorData :response.data.data,
      }))
   }
  } catch (error) {
    console.log(error)
  }
}
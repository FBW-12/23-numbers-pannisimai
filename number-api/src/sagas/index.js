import { takeLatest, call, put } from "redux-saga/effects";
import { API_C_REQ, API_C_SUCC, API_C_FAIL } from "../actions/actionTypes";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest(API_C_REQ, workerSaga);
}

function fetchNum(number) {
  return axios({
    method: "get",
    url: `https://numbers-api-proxy.dci-fbw121.now.sh/?number=${number}`
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(() => fetchNum(action.number));
    const numbermsg = response.data.message;

    yield put({ type: API_C_SUCC, numbermsg });
  } catch (error) {
    yield put({ type: API_C_FAIL, error });
  }
}

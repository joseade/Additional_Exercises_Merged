import { all, takeLatest, call, put, fork } from "redux-saga/effects";
import axios from "axios";
import {
  searchImagesSucces,
  searchImagesError,
} from "../components/gallerySlice";

function* apiProcess({ payload }: { type: string; payload: string }) {
  try {
    const { data } = yield call(axios, payload);
    // const res = yield call(fetch, payload);
    // const data = yield call(res, res.json);
    // const { images } = data;
    yield put(searchImagesSucces(data.images));
  } catch (error) {
    console.log(error);
    yield put(searchImagesError("error"));
  }
}

function* onSearchImages() {
  yield takeLatest("gallery/searchImages", apiProcess);
}
const imagesSagas = [fork(onSearchImages)];

export default function* rootSaga() {
  yield all([...imagesSagas]);
}

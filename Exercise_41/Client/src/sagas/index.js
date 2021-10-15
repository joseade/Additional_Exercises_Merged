import { io } from "socket.io-client";
import { eventChannel } from "redux-saga";
import { take, put } from "redux-saga/effects";

const { REACT_APP_URL } = process.env;
const connect = () => {
  const socket = io(REACT_APP_URL);
  return socket;
};

export default function* dataSaga() {
  const socket = connect();
  const chan = new eventChannel((emit) => {
    const receivedData = (e) => {
      emit({ type: "NEW_DATA", payload: e });
    };

    socket.on("hello", receivedData);

    return () => {};
  });

  while (true) {
    let action = yield take(chan);
    yield put(action);
  }
}

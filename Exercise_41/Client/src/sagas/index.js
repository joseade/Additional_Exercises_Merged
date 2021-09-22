import { io } from "socket.io-client";
import { eventChannel } from "redux-saga";
import { take, put } from "redux-saga/effects";
const connect = () => {
  const socket = io("http://localhost:4000");
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

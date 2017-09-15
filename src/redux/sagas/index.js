import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

function* helloSaga() {
  console.log('Hello Sagas!')
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
  ])
}

import {fork} from "redux-saga/effects";
import { watchGetAllCards, watchAddNewCard} from './redux/sagas/flow';

export default function* rootSaga() {
    yield fork(watchGetAllCards);
    yield fork(watchAddNewCard);
}
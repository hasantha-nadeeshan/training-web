import {fork} from "redux-saga/effects";
import { watchGetAllCards, watchAddNewCard} from "./flow";

export default function* root() {
    yield fork(watchGetAllCards);
    yield fork(watchAddNewCard);
}
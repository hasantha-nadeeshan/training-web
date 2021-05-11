import { put, call, takeEvery} from "redux-saga/effects";
import {
    GET_CARDS,
    GET_CARDS_SUCCESS,
    ADD_CARD,
    ADD_CARD_SUCCESS 
} from '../actions/actions';

import {firestore} from '../../config/Firebase';

//geting data from firebase
async function getAllCardsAsync() {
    const res = []
    
    await firestore.collection("User")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                res.push({...doc.data(), id: doc.id})
            });
        });
    
    return res
}

function* callGetAllCardsSagas() {
    try {
        const res = yield call(getAllCardsAsync);
        yield put({type: GET_CARDS_SUCCESS, data: res});    
        
    } catch (error) {
        console.log(error);
    }

}
export function* watchGetAllCards() {
    yield takeEvery(GET_CARDS, callGetAllCardsSagas);
}

//sending data to firebase
async function addNewCardAsync(data) {
    let id = []
    await firestore.collection("User")
        .add({...data, CreatedDate: Date.now()})
        .then(function (docRef) {
            id = docRef.id
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

    return id
}

function* callAddNewCardSagas(action) {
    try {
        yield call(addNewCardAsync, action.data);
        yield put({type: ADD_CARD_SUCCESS});
        

    } catch (error) {
        console.log(error);
        
    }
}

export function* watchAddNewCard() {
    yield takeEvery(ADD_CARD, callAddNewCardSagas);
}


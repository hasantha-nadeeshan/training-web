import { put, call, takeEvery, take} from "redux-saga/effects";
import {
    GET_CARDS,
    GET_CARDS_SUCCESS,
    ADD_CARD,
    ADD_CARD_SUCCESS 
} from '../actions/actions';
import {eventChannel} from 'redux-saga';
import {firestore} from '../../config/Firebase';



function* callGetAllCardsSagas() {
    const ref= firestore.collection('User').orderBy("created","desc");
    const channel = eventChannel((emit)=>ref.onSnapshot(emit));
    while(true){
        try {
            const res = yield take(channel);
            const data = res.docs.map(doc=>{
                return doc.data()
            })
            yield put({type: GET_CARDS_SUCCESS, data: data});    
        } catch (error) {
            console.log(error);
        }
    }

}
export function* watchGetAllCards() {
    yield takeEvery(GET_CARDS, callGetAllCardsSagas);
}

//sending data to firebase
async function addNewCardAsync(data) {
    let id = []
    await firestore.collection("User")
        .add({...data, created: Date.now()})
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


import * as actionTypes from "../actions/actions";

const initialState ={
cards: [
        // {   title: 'My new website',
        //     body: 'English may not be the most spoken language.An article is any member of a class of dedicated words that are used with noun phrases to mark the identifiability of the referents of the noun phrases. The category of articles constitutes a part of speech. In English, both "the" and "a/an" are articles, which combine with a noun to form a noun phrase.',
        //     author: 'mario'
        // }
    ],
    loading:false,
    addSuc:false
};

function diaryCardReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.GET_CARDS:
            return{...state, loading:true}
        case actionTypes.GET_CARDS_SUCCESS:
            return{...state, cards:action.data, loading:false }
        case actionTypes.ADD_CARD :
            return {...state, addSuc: false}
        case actionTypes.ADD_CARD_SUCCESS :
            return {...state, addSuc: true}       
        default:
            
            return state            
    }
}
export default diaryCardReducer;
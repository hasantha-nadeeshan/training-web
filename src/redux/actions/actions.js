export const ADD_CARD ='ADD_CARD';
export const ADD_CARD_SUCCESS ='ADDCARDSUCCESS';


export const GET_CARDS ='GetCards';
export const GET_CARDS_SUCCESS ='GET_CARDS_SUCCESS';


export function getAllCards() {
    return {type: GET_CARDS}
}
export function addNewCard(data) {
    return {type: ADD_CARD, data}
}
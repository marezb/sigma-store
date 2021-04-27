export const initialState = {
    basket: [],
};

//Selector

export const getBasketTotal = basket =>
    basket?.reduce((sum, item) => sum + item.price, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            console.log('reducer | state', state);
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => {
                    console.log(
                        'reducer | action.uniqueID',
                        action.item.uniqueID,
                        action.item.title
                    );
                    console.log('reducer | item.uniqueID', item.uniqueID, item.title);
                    return item.uniqueID !== action.item.uniqueID;
                }),
            };
        default:
            return state;
    }
};

export default reducer;

export const initialState = {
    basket: [],
};

//Selector

export const getBasketTotal = basket =>
    basket?.reduce((sum, item) => sum + item.price, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            console.log('added to basket ', state.basket);
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;
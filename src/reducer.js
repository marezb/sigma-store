export const initialState = {
    basket: [],
    user: null,
};

//Selector

export const getBasketTotal = (basket) =>
    basket?.reduce((sum, item) => sum + item.price, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],
            };

        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                basket: state.basket.filter((item) => {
                    return item.uniqueID !== action.item.uniqueID;
                }),
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;

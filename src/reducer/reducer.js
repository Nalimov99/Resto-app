const initialState = {
    menu: [],
    isLoading: true,
    hasError: false, 
    cart: [],
    totalPrice: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                isLoading: false,
                hasError: false,
                errorMessage: ''
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                isLoading: true,
                hasError: false,
                errorMessage: ''
            }
        case 'MENU_ERROR':
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errorMessage: action.errorMessage
            }
        case 'ADD_TO_CART':
            const id = action.payload;
            
            const itemInd = state.cart.findIndex(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.cart.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qty: ++itemInState.qty
                }
                return {
                    ...state, 
                    cart: [
                        ...state.cart.slice(0, itemInd),
                        newItem,
                        ...state.cart.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }

            } 
            
            
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qty: 1
            };
            
            return {
                ...state,
                cart: [
                    ...state.cart,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };
        case 'REMOVE_FROM_CART':
            const {cart} = state
            const idx = state.cart.findIndex(item => item.id === action.payload)
            const newCartItem = state.cart[idx]
            if(newCartItem.qty > 1) {
                const item = {
                    ...newCartItem,
                    qty: newCartItem.qty - 1
                }
                return {
                    ...state,
                    cart: [...cart.slice(0, idx), item, ...cart.slice(idx+1)],
                    totalPrice: state.totalPrice - item.price
                }
            }
            
            const newCart = [...cart.slice(0, idx), ...cart.slice(idx+1)]
            const removedItemPrice = cart[idx].price
            return {
                ...state,
                cart: newCart,
                totalPrice: state.totalPrice - removedItemPrice
            }
        default:
            return state;
    }
}

export default reducer;
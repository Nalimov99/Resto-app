const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequsted = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = (errorMessage) => {
    return {
        type: 'MENU_ERROR',
        errorMessage: errorMessage
    }
}

const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}

const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequsted,
    menuError,
    addToCart,
    removeFromCart
}
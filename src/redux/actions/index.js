export const increment = () =>{
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () =>{
    return{
        type: 'DECREMENT'
    }
}

export const updateCart= (cart={})=>{
    return{
        type: 'UPDATE',
        payload: cart
    }
}
export const updateOrderMeta= (order_meta={})=>{
    return{
        type: 'UPDATE',
        payload: order_meta
    }
}

export const setRestaurant= (restaurant)=>{
    return{
        type: 'SET_RESTAURANT',
        payload: restaurant
    }
}

export const setMenu= (menu)=>{
    return{
        type: 'SET_MENU',
        payload: menu
    }
}
export const setOrder= (order)=>{
    return{
        type: 'UPDATE_ORDER',
        payload: order
    }
}
export const setOrderMeta= (order_meta)=>{
    return{
        type: 'UPDATE_META',
        payload: order_meta
    }
}


export const setTableNumber = (tablenum)=>{
    return{
        type:'SET_TABLENUM',
        payload: tablenum
    }
}

export const setUserSession= (user={})=>{
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const getUserSession= ()=>{
    return{
        type: 'GET'
    }
}

export const isLogged=(status)=>{
    return {
        type:'SIGN_IN',
        payload:status

    }
}
const menuReducer = (menu = null, action)=> {
    switch(action.type){
        case 'SET_MENU':
            return action.payload
        default:
            return menu
    }
}
export default menuReducer
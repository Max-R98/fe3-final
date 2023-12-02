export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTISTS':
            return {...state, list: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'REMOVE_FAV':
            return {...state, favs: state.favs.filter(fav => fav.id !== action.payload),}
        case 'CHANGE_THEME':
            return {...state, theme: ''}
        default:
            return state
    }
}
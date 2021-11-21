// constantes
const dataInicial = {
    dark:false,
    location:''
}
// types
const CHANGE_THEME = 'CHANGE_THEME'
const CHANGE_LOCATION = 'CHANGE_LOCATION'

// reducer
export default function themeReducer(state = dataInicial, action){
    switch(action.type){
        case CHANGE_THEME:
            return {...state, dark : action.payload }
        case CHANGE_LOCATION:
            return {...state, location : action.payload }
        default:
            return state
    }
}


// actions

export const changeThemeAction = (value) => (dispatch, getState) => {
    dispatch({
        type: CHANGE_THEME,
        payload: value
    })
}
export const changeLocationAction = (value) => (dispatch, getState) => {
    dispatch({
        type: CHANGE_LOCATION,
        payload: value
    })
}
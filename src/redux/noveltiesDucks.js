import axios from 'axios'

// constantes
const dataInicial = {
    novelties: [],
    novelty:{},
    grid_novelties: [],
    filtersNovelties:[],
    tags:[],
    loading: false,
    loading_grid: false,
}

// types
const LOADING = "LOADING";
const LOADING_GRID = "LOADING_GRID";
const GET_NOVELTY = 'GET_NOVELTY'
const GET_NOVELTIES = 'GET_NOVELTIES'

const GET_TAGS = 'GET_TAGS'

const GET_GRID_NOVELTIES = 'GET_GRID_NOVELTIES'
const CLEAN_NOVELTY = 'CLEAN_NOVELTY'
const CLEAN_GRID_NOVELTIES = 'CLEAN_GRID_NOVELTIES'
const UPDATE_FILTERS = 'UPDATE_FILTERS'
const GET_FAV_NOVELTY = "GET_FAV_NOVELTY";
const CLEAR_NOVELTY = "CLEAR_NOVELTY";
const DELETE_FAV_NOVELTY = "DELETE_FAV_NOVELTY";

// reducer
export default function developmentReducer(state = dataInicial, action){
    switch(action.type){
        case LOADING :
             return {...state,loading:true,};
        case LOADING_GRID :
             return {...state,loading_grid:true,};
        case GET_NOVELTY:
            return {...state, novelty : action.payload.data.data.post,loading:false,};
        case GET_NOVELTIES:
            return {...state, novelties : action.payload };
        case GET_TAGS:
            return {...state, tags : action.payload };
        case GET_GRID_NOVELTIES:
            return {...state, grid_novelties : action.payload.data.data.posts,loading_grid:false};
        case CLEAN_NOVELTY:
            return {...state, development : action.payload };
        case CLEAN_GRID_NOVELTIES:
            return {...state, grid_novelties : []};
        case UPDATE_FILTERS:
            return {...state, filtersNovelties : action.payload };
        case GET_FAV_NOVELTY:
            return { ...state, favorites: [...state.favorites, action.payload], loading:false};
        case CLEAR_NOVELTY:
            return { ...state, novelty: {}};
        case DELETE_FAV_NOVELTY:
            return { ...state, favorites: [] , loading:false};
        default:
            return state
    }
}

// actions
export const getNoveltieAction = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://dev.mediacore.com.ar/api/v1/posts/' + id,{
            headers:{
                'Authorization': 'Bearer ' + getState().settings.keys.mediacore
            },
        })
        console.log(res)
        dispatch({
            type: GET_NOVELTY,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}
export const getNoveltiesAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://dev.mediacore.com.ar/api/v1/posts/search?clients=' + getState().settings.client_id,{
            headers:{
                'Authorization': 'Bearer ' + getState().settings.keys.mediacore
            },
        })
        dispatch({
            type: GET_NOVELTIES,
            payload: res.data.data.posts
        })
    } catch (error) {
        console.log(error)
    }
}
export const getTagsAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://dev.mediacore.com.ar/api/v1/tags/search?clients=' + getState().settings.client_id,{
            headers:{
                'Authorization': 'Bearer ' + getState().settings.keys.mediacore
            },
        })
        console.log(res)
        dispatch({
            type: GET_TAGS,
            payload: res.data.data.tags.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const getFiltersNoveltiesAction = () => async (dispatch, getState) => {
    dispatch({type:CLEAN_GRID_NOVELTIES,action:[]})

    dispatch({type:LOADING_GRID,action:true})

    let filters = [] 
    getState().novelties.filtersNovelties.map(filter => {
        filters.push(filter.id)
    })
    let params = ''
    if(filters.length > 0){
        params = '&tags=' + filters.join(',')
    }
    try {
        const res = await axios.get('https://dev.mediacore.com.ar/api/v1/posts/search?clients=' + getState().settings.client_id + params,{
            headers:{
                'Authorization': 'Bearer ' + getState().settings.keys.mediacore
            },
        })
        dispatch({
            type: GET_GRID_NOVELTIES,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}

/*

CODIGO COMENTADO POR NO DEFINIR LAS VARIABLES DE "TYPE".


export const cleanDevelopmentAction = (id) => (dispatch, getState) => {
    switch (id){
        // ID 0 == DEVELOPMENT //////// ID 1 == GRID_DEVELOPMENTS // ALL
        case 0:{
            dispatch({
                type: CLEAN_DEVELOPMENT,
                payload: {}
            })
            break;
        }
        case 1:{
            dispatch({
                type: CLEAN_GRID_DEVELOPMENT,
                payload: {}
            })
            break;
            
        }
        case 2:{
            dispatch({
                type: CLEAN_DEVELOPMENT,
                payload: {}
            })
            dispatch({
                type: CLEAN_GRID_DEVELOPMENT,
                payload: {}
            })
            dispatch({
                type: UPDATE_FILTERS,
                payload: {status:'',type:'',location:''}
            })
            break;
        }
    }

}

*/

export const updateFiltersNovelties = (tags) => (dispatch, getState) => {
    console.log(tags)
    dispatch({
        type: UPDATE_FILTERS,
        payload: tags
    })
}

/*

CODIGO COMENTADO POR VARIABLES NO DECLARADAS "TYPE".

export const getFavoritesAction = (id) => async (dispatch, getState) => {

    dispatch({
      type: LOADING,
  })
    if(getState().developments.favorites.find(element => element.data.id.toString() === id.toString())){
      const new_favs = getState().developments.favorites.filter(element => element.data.id.toString() !== id.toString())
      dispatch({
        type: DELETE_FAV_PROPERTY,
        payload: new_favs
    })
    }
    try {
        const res = await axios.get(' https://api-mh.mediahaus.com.ar/api/v1/tokko/developments/' + id +'?cache=true' ,{
            headers:{
                'X-TOKKO-KEY': getState().settings.keys.tokko
            },
        })
        dispatch({
            type: GET_FAV_PROPERTY,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
  
}



export const clearFavoritesAction = (id) => async (dispatch, getState) => {
dispatch({
    type: CLEAR_FAV_PROPERTY,
})
}
*/
export const clearNoveltyAction = () => async (dispatch, getState) => {
dispatch({
    type: CLEAR_NOVELTY,
})
}
import axios from 'axios'

// constantes
const dataInicial = {
    developments: [],
    development:[],
    units_development:[],
    stateCodes : [
        {},
        {},
        {},
        {
            id:3,
            name:"En pozo"
        },
        { 
            id:4,
            name:"En Construcción"
        },
        {},
        {
            id:6,
            name:"Construcción Terminada"
        }
    ],
    loading:true,
    filtersDevelopment:{
        status:''
    },

}

// types
const GET_DEVELOPMENT = 'GET_DEVELOPMENT'
const GET_UNITS_DEVELOPMENT = 'GET_UNITS_DEVELOPMENT'
const GET_DEVELOPMENTS = 'GET_DEVELOPMENTS'
const CLEAN_DEVELOPMENT = 'CLEAN_DEVELOPMENT'
const CLEAN_UNITIES = 'CLEAN_UNITIES'
const UPDATE_FILTERS = 'UPDATE_FILTERS'
const LOADING = 'LOADING'

// reducer
export default function developmentReducer(state = dataInicial, action){
    switch(action.type){
        case LOADING:
            return {...state, loading : true }
        case GET_DEVELOPMENT:
            return {...state, development : action.payload }
        case GET_DEVELOPMENTS:
            return {...state, developments : action.payload, loading:false}
        case GET_UNITS_DEVELOPMENT:
            return {...state, units_development : action.payload }
        case CLEAN_DEVELOPMENT:
            return {...state, development : action.payload }
        case CLEAN_UNITIES:
            return {...state, units_development : action.payload }
        case UPDATE_FILTERS:
            return {...state, filtersDevelopment : action.payload }
        default:
            return state
    }
}

// actions
export const getDevelopmentAction = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://api-mh.mediahaus.com.ar/api/v1/tokko/developments/' + id +'?cache=true' ,{
            headers:{
                'X-TOKKO-KEY': getState().settings.keys.tokko
            },
        })
        dispatch({
            type: GET_DEVELOPMENT,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}
export const getUnitsDevelopmentAction = (id) => async (dispatch, getState) => {
    try {
        // const res = await axios.get('https://www.tokkobroker.com/api/v1/property/?development__id=' + id +'&key=' + getState().settings.keys.tokko +'&format=json')
        const res = await axios.get('https://tokkobroker.com/api/v1/property/search/?limit=400&lang=es_ar&key=' +  getState().settings.keys.tokko + '&data=%7B%22with_custom_tags%22:[],%22current_localization_id%22:0,%22current_localization_type%22:%22country%22,%22price_from%22:0,%22price_to%22:999999999,%22operation_types%22:[1,2,3],%22property_types%22:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24],%22currency%22:%22ANY%22,%22filters%22:[[%22development__id%22,%22op%22,%22'+ id +'%22]],%22only_available%22:false,%22development_id%22:'+ id + ',%22append_available%22:%22checked%22%7D' + '&format=json')
        dispatch({
            type: GET_UNITS_DEVELOPMENT,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}
export const getDevelopmentsAction = () => async (dispatch, getState) => {
    
    dispatch({type: LOADING})

    var status = ''
    if(getState().developments.filtersDevelopment.status){
        status = '&construction_status=' + getState().developments.filtersDevelopment.status
    }

    try {
        const res = await axios.get('https://api-mh.mediahaus.com.ar/api/v1/tokko/developments/search?cache=true' + status,{
            headers:{
                'X-TOKKO-KEY': getState().settings.keys.tokko
            },
        })
        dispatch({
            type: GET_DEVELOPMENTS,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}
export const cleanDevelopmentAction = () => (dispatch, getState) => {
    dispatch({
        type: CLEAN_DEVELOPMENT,
        payload: {}
    })
}
export const cleanUnitiesAction = () => (dispatch, getState) => {
    dispatch({
        type: CLEAN_UNITIES,
        payload: {}
    })
}
export const updateFiltersDevelopment = (status) => (dispatch, getState) => {
    const res = {
        status
    }
    dispatch({
        type: UPDATE_FILTERS,
        payload: res
    })
}

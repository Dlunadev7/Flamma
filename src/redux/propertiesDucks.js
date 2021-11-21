import axios from "axios";
import {useState} from 'react'
// constantes
const dataInicial = {
  properties: [],
  properties_featured: [],
  property: [],
  favorites:[],
  listed: false,
  loading:false,
  filters: {
    location: [],
    type: [],
    operation: '',
    environments: [],
    price: [],
    surface: [],
    environments_types: [],
    generals: [],
    services: [],
    specials: [],
  },
  orders:{
    order:'desc',
    order_by:'price'
  },
  listFilters: {
    location: [],
    type: [],
    operation: [],
    environments: [],
    price: [],
    surface: [],
    environments_types: [],
    generals: [],
    services: [],
    specials: [],
  },
  offset:12,
};

// types
const LOADING = "LOADING";
const CHANGE_TYPE = "CHANGE_TYPE";
const UPDATE_FILTERS = "UPDATE_FILTERS";
const UPDATE_ORDERS = "UPDATE_ORDERS";
const LIST_FILTERS = "LIST_FILTERS";
const GET_PROPERTY = "GET_PROPERTY";
const GET_FEATURED_PROPERTY = "GET_FEATURED_PROPERTY";
const GET_FAV_PROPERTY = "GET_FAV_PROPERTY";
const CLEAR_FAV_PROPERTY = "CLEAR_FAV_PROPERTY";
const DELETE_FAV_PROPERTY = "DELETE_FAV_PROPERTY";
const GET_PROPERTIES = "GET_PROPERTIES";
const GET_MORE_PROPERTIES = "GET_MORE_PROPERTIES";
const GET_FEATURED_PROPERTIES = "GET_FEATURED_PROPERTIES";
const CLEAR_PROPERTIES = "CLEAR_PROPERTIES";

// reducer
export default function propertiesReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case CHANGE_TYPE:
      return { ...state, listed: action.payload };
    case UPDATE_FILTERS:
      return { ...state, filters: action.payload};
    case UPDATE_ORDERS:
      return { ...state, orders: action.payload};
    case LIST_FILTERS:
      return { ...state, listFilters: action.payload };
    case GET_PROPERTY:
      return { ...state, property: action.payload, loading:false };
    case GET_FAV_PROPERTY:
      return { ...state, favorites: [...state.favorites, action.payload], loading:false};
    case DELETE_FAV_PROPERTY:
      return { ...state, favorites: [...state.favorites, action.payload], loading:false};
    case CLEAR_FAV_PROPERTY:
      return { ...state, favorites: [] , loading:false};
    case GET_PROPERTIES:
      return { ...state, properties: action.payload };
    case GET_MORE_PROPERTIES:
      return { ...state, properties: action.payload,offset: state.offset + 12,loading:false};
    case GET_FEATURED_PROPERTIES:
      return { ...state, properties_featured: action.payload };
    case CLEAR_PROPERTIES:
        return { ...state, properties: [] , loading:false};
    default:
      return state;
  }
}

// actions
export const changeTypeList = (type) => (dispatch, getState) => {
  dispatch({
    type: CHANGE_TYPE,
    payload: type,
  });
}
export const getListFilters = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://tokkobroker.com/api/v1/property/get_search_summary/?key=" +
        getState().settings.keys.tokko +
        "&lang=es_ar&format=json&data=%7B%0A%20%20%22price_from%22%3A%200,%0A%20%20%22price_to%22%3A%20999999999,%0A%20%20%22operation_types%22%3A%20%5B%5D,%0A%20%20%22property_types%22%3A%20%5B%5D%0A%7D",
      {}
    );
    dispatch({
      type: LIST_FILTERS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
}
// Filters
export const redux_updateFilters =  ( _filters ) =>
  (dispatch, getState) => {
    dispatch({
      type: UPDATE_FILTERS,
      payload: _filters,
    });
}
export const redux_updateOrders =  ( orders ) => (dispatch, getState) => {
    dispatch({
      type: UPDATE_ORDERS,
      payload: orders,
    });
}
//
export const getPropertyAction = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.get(' https://api-mh.mediahaus.com.ar/api/v1/tokko/properties/' + id +'?cache=true' ,{
            headers:{
                'X-TOKKO-KEY': getState().settings.keys.tokko
            },
        })
        dispatch({
            type: GET_PROPERTY,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}
export const getFavoritesAction = (id) => async (dispatch, getState) => {

  dispatch({
    type: LOADING,
})
  if(getState().properties.favorites.find(element => element.data.id.toString() === id.toString())){
    const new_favs = getState().properties.favorites.filter(element => element.data.id.toString() !== id.toString())
    dispatch({
      type: DELETE_FAV_PROPERTY,
      payload: new_favs
  })
  }
  try {
      const res = await axios.get(' https://api-mh.mediahaus.com.ar/api/v1/tokko/properties/' + id +'?cache=true' ,{
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
export const clearPropertiesAction = (id) => async (dispatch, getState) => {
  dispatch({
      type: CLEAR_PROPERTIES,
  })
}
export const getPropertiesAction = () => async (dispatch, getState) => {
    dispatch({
      type: LOADING,
  })
    const filters = getState().properties.filters
    const orders = getState().properties.orders
    var params_get = ''
    var tags_both = []
    const operation_id=[{name:'ventas',id:1},{name:'alquileres',id:2}]
    const environments =[{name:'monoambiente',id:1},{name:'2 ambientes',id:2},{name:'3 ambientes',id:3},{name:'4 ambientes',id:4}]
    if(filters.operation){
      params_get += "&operation=" +(operation_id.find(element => element.name === filters.operation.toLowerCase()).id)
    }
    if(filters.type.length > 0){
      params_get += "&tipo=" + filters.type.map((element)=>element.id)
    }
    if(filters.location.length > 0){
      params_get += "&localization-divisions=" + filters.location.map((element)=>element.id) + "&localization-type=division"
    }
    if(filters.services.length > 0){
      tags_both.push(filters.services.map((element)=>element.id))
    }
    if(filters.generals.length > 0){
      tags_both.push(filters.generals.map((element)=>element.id))
    }
    if(filters.environments_types.length > 0){
      tags_both.push(filters.environments_types.map((element)=>element.id))
    }
    if(filters.environments_types.length > 0 || filters.generals.length || filters.services.length > 0){
      params_get += "&tags=" + tags_both
    }
    if(filters.surface.type){
      var type_surface =''
      if(filters.surface.type.toLowerCase() == "cubierta"){type_surface="roofed"}
      else(type_surface=filters.surface.type)
      params_get += "&surface-type=" + type_surface + "&surface=" + filters.surface.surfaceMin + "-" + filters.surface.surfaceMax
    }
    if(filters.price.type){
      var price_type = ''
      switch(filters.price.type){
        case 'pesos' :{
          price_type = "ars"
          break
        }
        default : price_type='usd'
      }
      params_get += "&currency=" + price_type+ "&price=" + filters.price.priceMin + "-" + filters.price.priceMax
    }
    if(filters.environments.length > 0){
      var curenvironmets = []
      for (const iterator of filters.environments) {
        curenvironmets.push((environments.find(element => element.name === iterator.toLowerCase()).id))
      }
      params_get += "&rooms=" + (curenvironmets[0])

    }
    try {
        const res = await axios.get(' https://api-mh.mediahaus.com.ar/api/v1/tokko/properties/search?cache=false&save=false&limit=12&offset=0&order-by=' + orders.order_by + '&order=' + orders.order + '' + params_get,{
            headers:{
                'X-TOKKO-KEY': getState().settings.keys.tokko
            },
        })
        dispatch({
            type: GET_PROPERTIES,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAdd_PropertiesAction = () => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
})
  const filters = getState().properties.filters
  const orders = getState().properties.orders
  var params_get = ''
  var tags_both = []
  const operation_id=[{name:'ventas',id:1},{name:'alquileres',id:2}]
  const environments =[{name:'monoambiente',id:1},{name:'2 ambientes',id:2},{name:'3 ambientes',id:3},{name:'4 ambientes',id:4}]
  if(filters.operation){
    params_get += "&operation=" +(operation_id.find(element => element.name === filters.operation.toLowerCase()).id)
  }
  if(filters.type.length > 0){
    params_get += "&tipo=" + filters.type.map((element)=>element.id)
  }
  if(filters.location.length > 0){
    params_get += "&localization-divisions=" + filters.location.map((element)=>element.id) + "&localization-type=division"
  }
  if(filters.services.length > 0){
    tags_both.push(filters.services.map((element)=>element.id))
  }
  if(filters.generals.length > 0){
    tags_both.push(filters.generals.map((element)=>element.id))
  }
  if(filters.environments_types.length > 0){
    tags_both.push(filters.environments_types.map((element)=>element.id))
  }
  if(filters.environments_types.length > 0 || filters.generals.length || filters.services.length > 0){
    params_get += "&tags=" + tags_both
  }
  if(filters.surface.type){
    var type_surface =''
    if(filters.surface.type.toLowerCase() == "cubierta"){type_surface="roofed"}
    else(type_surface=filters.surface.type)
    params_get += "&surface-type=" + type_surface + "&surface=" + filters.surface.surfaceMin + "-" + filters.surface.surfaceMax
  }
  if(filters.price.type){
    var price_type = ''
    switch(filters.price.type){
      case 'pesos' :{
        price_type = "ars"
        break
      }
      default : price_type='usd'
    }
    params_get += "&currency=" + price_type+ "&price=" + filters.price.priceMin + "-" + filters.price.priceMax
  }
  if(filters.environments.length > 0){
    var curenvironmets = []
    for (const iterator of filters.environments) {
      curenvironmets.push((environments.find(element => element.name === iterator.toLowerCase()).id))
    }
    params_get += "&rooms=" + (curenvironmets[0])
  }
  try {
      const res = await axios.get('https://api-mh.mediahaus.com.ar/api/v1/tokko/properties/search?cache=false&save=false&limit=12&offset='+ getState().properties.offset + '&order-by=' + orders.order_by + '&order=' + orders.order  + params_get,{
          headers:{
              'X-TOKKO-KEY': getState().settings.keys.tokko
          },
      })
      var response = getState().properties.properties
      for (const iterator of res.data.objects) {
        response.data.objects.push(iterator)
      }
      dispatch({
          type: GET_MORE_PROPERTIES,
          payload: response
      })
  } catch (error) {
      console.log(error)
  }
}
  export const getPropertiesFeaturedAction = () => async (dispatch, getState) => {
    dispatch({
      type: LOADING,
  })

    try {
        const res = await axios.get(' https://api-mh.mediahaus.com.ar/api/v1/tokko/properties/search?cache=false&save=false&limit=20&offset=0&destacados=true',{
            headers:{
                'X-TOKKO-KEY': getState().settings.keys.tokko
            },
        })
        dispatch({
            type: GET_FEATURED_PROPERTIES,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}

 

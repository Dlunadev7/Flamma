import {useSelector,useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { changeLocationAction } from '../redux/themeDucks';
import { getFavoritesAction,clearFavoritesAction } from '../redux/propertiesDucks'
import {getFrontCover, getLocationProperty, getPrice, shortDirection, addFavorites, getfavorites} from '../functions/functions_property'
const Card = (props) =>{

    const dispatch = useDispatch();
    const listed = useSelector(store => store.properties.listed)
    const settings = useSelector(store => store.settings)
    const {data} = useSelector(store => store.properties.listFilters)

    const theme = useSelector(store => store.theme)
    const property = props.property;  
    
    const [listFavorites,setListFavorites] = useState(getfavorites("prop",settings.short_name))

    const checkActive = (id) => {
        setListFavorites(getfavorites("prop",settings.short_name))
        dispatch(clearFavoritesAction())
        for (const iterator of getfavorites("prop",settings.short_name)) {
            //Por cada uno de los favoritos, traigo su respectiva data de la api
            dispatch(getFavoritesAction(iterator))
        }
    } 

    return property.id && data ?(
        <div className={'property-card ' + (theme.dark ? ' dark ' : '') + (listed ? 'd-flex list align-items-center mb-3' : '')}>
            <Link to={settings.base_url + "propiedad/" + shortDirection(property.operations[0].operation_type , property.type.name, property.location.name , property.id , property.fake_address)} className="h-100" onClick={() => dispatch(changeLocationAction("propiedad"))}>
                <div className={'content-header ' + (listed ? 'w-100' : '')}>
                    <img src={property.photos.length > 0 ? getFrontCover(property.photos).original : 'https://lh3.googleusercontent.com/proxy/bcMgtS0S54N3bgrGvFkXnr9wsmhs73Nw-dHGUQib43pOCQMVSIUCfY-vFDjLsP_D2VvHs3SmVg519BTCUWwp19xnHwBOtZFy0-clslIpBhA2Bn0YQ_g'} alt="" />
                    <span className={'type-property position-absolute ' + (listed ? 'd-none' : '')}>{property.type.name}</span>
                </div>
            </Link>
            <div className="top-card">
                <button onClick={() => addFavorites(property.id,"prop",settings.short_name) + checkActive()} className={'btn-like ' + (listFavorites.find(element => element.toString() === property.id.toString()) ? 'active' : '') +  (listed ? 'd-none' : '')}><i className="icon-solid-like"></i></button>
                {property.operations.map((item,index) => (
                    <>
                        <span className={'operation-property ' + item.operation_type}> {index == 1 ? <p className="d-inline-block mb-0 mx-2">Y</p> : ''} {item.operation_type}</span>
                    </>
                ))} 
            </div>
            <div className="content-body">
                <div className={'list-items justify-content-between mt-3 mb-3 ' + (!listed ? 'd-none' : 'd-flex ')}>
                    <span className={'type-property'}>{property.type.name}</span>
                    <button className={'btn-like' }><i className="icon-solid-like"></i></button>
                </div>
                <Link to={settings.base_url + "propiedad/" + shortDirection(property.operations[0].operation_type , property.type.name, property.location.name , property.id , property.fake_address)} className="h-100" onClick={() => dispatch(changeLocationAction("propiedad"))}><h4 className="title">{property.fake_address}</h4></Link>
                <h5 className="location"><i className="icon-location-solid me-2"></i>{getLocationProperty(property.location.full_location)}</h5>
                <div className="details d-flex align-items-center justify-content-start">
                    <div className="details_item me-lg-4 me-3">
                        <i className="icon-bathtub me-lg-2 me-1"></i>
                        {property.bathroom_amount}
                    </div>
                    <div className="details_item me-lg-4 me-3">
                        <i className="icon-bed me-lg-2 me-1"></i>
                        {property.suite_amount}
                    </div>
                    <div className="details_item me-lg-4 me-3">
                        <i className="icon-car me-lg-2 me-1"></i>
                        {property.parking_lot_amount}
                    </div>
                    <div className="details_item me-lg-4">
                        <i className="icon-surface me-lg-2 me-1"></i>
                        {Intl.NumberFormat("de-DE").format(property.roofed_surface)} m2
                    </div>
                    {property.type.name.toLowerCase() === "terreno" ?
                    <div className="details_item me-lg-4 ms-3">
                        <i className="icon-surface-terreno me-lg-2 me-1"></i>
                        {Intl.NumberFormat("de-DE").format(property.surface)} m2
                    </div>
                    :''}
                </div>
                <div className="content-body_bottom d-flex justify-content-between">
                    <div className="d-block">
                        {console.log(property)}
                        {property.operations.map((element) => (
                            <h3 className={"price d-block w-100 " + (property.web_price ?  '' : 'min-size') + (property.operations[1] ? 'min-size' : '')}>{property.web_price ? getPrice(element.prices[0]) :  'Precio a consultar'}</h3>
                        )) }
                    </div>
                    <Link onClick={() => dispatch(changeLocationAction("propiedad"))} to={settings.base_url + "propiedad/" + shortDirection(property.operations[0].operation_type , property.type.name, property.location.name , property.id , property.fake_address)}  className="btn-square btn-more"><span>+</span></Link>
                </div>
            </div>
        </div>
    ) : (<div className="loading-section"><div className="lds-dual-ring"></div> </div> )
}

export default Card
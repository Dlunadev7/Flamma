import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams,useHistory } from "react-router"
import { getPropertyAction } from "../redux/propertiesDucks"
import {shortDirection} from '../functions/functions_property'

const Redirect = () =>{
    const {id} = useParams()
    const history = useHistory()
    const property = useSelector(store => store.properties.property).data
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getPropertyAction(id))
    }, [])
    return property ? (
        <div>
            {history.push("" + "/propiedad/" + shortDirection(property.operations[0].operation_type , property.type.name, property.location.name , property.id , property.fake_address))}        
        </div>
    ):(<div className="loading-section"><div className="lds-dual-ring"></div> </div> )
}

export default Redirect
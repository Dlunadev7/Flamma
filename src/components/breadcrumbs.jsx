import {useDispatch,useSelector} from 'react-redux'
import { changeLocationAction } from '../redux/themeDucks';
import { Link } from "react-router-dom";
import { getGroup_CustomTag } from '../functions/functions_dev';

const Breadcrumbs = props =>{
    const dispatch = useDispatch();
    const property = useSelector((store) => store.properties.property).data;
    const {data} = useSelector((store) => store.developments.development);

    return (
        <div className="breadcrumb-div">
            <nav aria-label="breadcrumb" className="mb-lg-4">
                <ol className="breadcrumb">
                    {props.props.map((item,index) =>(
                        <li className={'breadcrumb-item '}> { (item.active ?  item.name : <Link className={( property ? 'text-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') + ( data ? 'text-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '') } onClick={() => dispatch(changeLocationAction(item.location))} to={item.route}>{item.name}</Link>)} </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs
import { useEffect ,useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import {shortDirection} from '../../functions/functions_property'
import {get_shortDescription, getGroup_CustomTag,group_Unities} from '../../functions/functions_dev'

const Data = () => {
    // Store redux 
    const settings = useSelector(store => store.settings)
    const { data } = useSelector((store) => store.developments.development);
    const unities = useSelector((store) => store.developments.units_development).data;
    const [group,setGroup] = useState()
    const [load,setLoad] = useState(false)

    useEffect(() => {
        if(unities){
            setGroup(group_Unities(unities.objects))
            setLoad(true)
        }
    },[unities])

  // Render
  return unities ? (
    <section className={"container unities " + (unities.meta.total_count === 0 ? 'd-none' : '')} id="unidades">
        <div style={{textAlign: "center", marginBottom: "3em"}}>
            <h2>UNIDADES</h2>
            <p>Seleccione el tipo de unidad que está buscando</p>
            <header className=" section-header wow fadeInLeft " style={{width: "100px",marginBottom: "-50px"}}>
                <strong className="fade-title-left " style={{zIndex:"-99"}}>Unidades</strong>
            </header>
        </div>
        <div style={{marginTop: "7em"}}>
            {
                group && load ? 
                group.map((item,index) => (
                        <div className="unity collapsed" data-bs-toggle="collapse" data-bs-target={"#collapseExample"+index} aria-expanded="false" aria-controls={"collapseExample"+index} key={index} style={{zIndex:"5"}}>
                            <div className="head-row row">
                                <div className="col-lg-6 col-4">
                                    <span className="unity-font">{item.floor}</span>
                                </div>
                                <div className="col-lg-2 col-3" style={{textAlign:'center'}}>
                                    <span className="unity-font sub-title" style={{minWidth:'5rem',textAlign:"center"}}>Ambientes</span>
                                </div>
                                <div className="col-lg-3 col-4" style={{textAlign:"center"}}>
                                    <span className="unity-font sub-title" style={{minWidth:'5rem',textAlign:"center"}}>Superficie cubierta </span>
                                </div>
                                <div className="col-1" style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                                    <img src={settings.base_url + "img/img-icon/icon-arrow.svg"} alt="icono de flecha" />
                                </div>
                            </div>
                            <div className="close-deployable collapse pb-3" id={"collapseExample"+index}>
                            {/* .split(" ")[1] */}
                                    {/* {item.unities.sort(function(a, b){return a.address.localeCompare(b.address)}).map((element,index) => ( */}
                                    {item.unities.sort(function(a, b){return a.address.split(" ")[1] - b.address.split(" ")[1]}).map((element,index) => (
                                        (element.status === 2 ?
                                            <>
                                                <Link to={settings.base_url + "unidad/" + shortDirection(element.operation,element.type,element.location,element.id,element.address)}>
                                                    <div className={"unity-row row " + (element.status !== 2 ? 'disabled' : '')} >
                                                        <div className="col-lg-6 col-4">
                                                            <span className={"unity-yellow-font "  + ( data ? 'text-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>{element.address}</span>
                                                        </div>
                                                        <div className="col-lg-2 col-3" style={{textAlign:'center'}}>
                                                            <span className="unity-font" style={{minWidth:'5rem',textAlign:"center"}}>{element.rooms}<sup></sup></span>
                                                        </div>
                                                        <div className="col-lg-3 col-4" style={{textAlign:"center"}}>
                                                            <span className="unity-font" style={{minWidth:'5rem',textAlign:"center"}}>{element.surface}m<sup>2</sup></span>
                                                        </div>
                                                        <div className="col-1"></div>
                                                    </div>
                                                </Link>
                                            </>
                                        :
                                            <>
                                                <div to={settings.base_url + "unidad/" + shortDirection(element.operation,element.type,element.location,element.id,element.address)}>
                                                    <div className={"unity-row row disabled"} >
                                                        <div className="col-lg-6 col-4">
                                                            <span className={"unity-yellow-font "  + ( data ? 'text-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>{element.address}  </span>
                                                        </div>
                                                        <div className="col-lg-2 col-3" style={{textAlign:'center'}}>
                                                            <span className="unity-font" style={{minWidth:'5rem',textAlign:"center"}}>{element.rooms}<sup></sup></span>
                                                        </div>
                                                        <div className="col-lg-3 col-4" style={{textAlign:"center"}}>
                                                            <span className="unity-font" style={{minWidth:'5rem',textAlign:"center"}}>{element.surface}m<sup>2</sup></span>
                                                        </div>
                                                        <div className="col-1"></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    ))}
                            </div>
                        </div>
                    // console.log(item.floor)
                    ))
                : //Están cargando los desarrollos
                <>
                    <div class="loader relative">
                        <div class="page-lines">
                            <div class="container">
                            <div class="col-line col-xs-4">
                                <div class="line"></div>
                            </div>
                            <div class="col-line col-xs-4">
                                <div class="line"></div>
                            </div>
                            <div class="col-line col-xs-4">
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                            </div>
                        </div>
                        <div class="loader-brand">
                            <div class="sk-folding-cube">
                            <div class="sk-cube1 sk-cube"></div>
                            <div class="sk-cube2 sk-cube"></div>
                            <div class="sk-cube4 sk-cube"></div>
                            <div class="sk-cube3 sk-cube"></div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
        <p style={{color: "#fff" , marginTop: "3em", maxWidth: "550px"}}>* Las unidades inactivas  no están disponibles.</p>
    </section>
  ):''
};

export default Data;

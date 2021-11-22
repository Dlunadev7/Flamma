import { Link, useLocation, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getGroup_CustomTag} from '../functions/functions_dev'
import { useEffect } from "react";

const navbar_items = [
    {title:'Home', route:''},
    {title:'Desarrollos'},
    {title:'Nosotros'},
    {title:'Red-i'},
    {title:'Contacto'},
    // {title:'Novedades'},
]

function Header() {
    const dispatch = useDispatch();
    const settings = useSelector((store) => store.settings);
    const curLocation = (useLocation().pathname.split(settings.base_url)[1])
    const theme = useSelector((store) => store.theme);
    const {data} = useSelector((store) => store.developments.development);
    const unidad = useSelector((store) => store.properties.property).data;
    const unities = useSelector((store) => store.developments.units_development).data;
    const [open, setOpen] = useState(false);
    let history = useHistory()
    const [loading,setLoading] = useState(true)
    const view = curLocation ? curLocation.split("/")[0] : ''

    const checkView = (location,view) => {
        console.log(location)
        return (location !== '' ? location.toLowerCase() === view.toLowerCase() : '')
    }
    
    const scrollTo = (section) => {
        var rec = document.getElementById(section).getBoundingClientRect();
        return window.scroll({left:0, top:rec.top + window.scrollY - 200, behavior: 'smooth'});
    }

    useEffect(() => {

        var recaptchaCallback = function () {
            $('.g-recaptcha').each(function() {
                        var rc = grecaptcha.render(this, {
                        });
                       $(this).find('iframe:first')
                       .removeAttr('width')
                       .addClass('img-responsive')
                       .parent()
                       .css('width', 'auto');
                });
        };
    })
    
  return view !== "desarrollo" && view !== "unidad" && view!== "modulo" ? 
    <>
        <header id="top" className={
            curLocation === "" ? "header-home" :
            curLocation === "desarrollos" || curLocation === "contacto" ? 'header-desarrollos' : ''}>
            <Link style={{zIndex:'999999'}} to={settings.base_url} className="brand-panel">
                <Link to={settings.base_url} className="brand js-target-scroll">
                    <img src={settings.base_url + "img/logo_red.svg"} />
                </Link>
                {/* <div className="brand-name">RED</div> */}
                {/* <div className="slide-number">
                    <span className="current-number text-primary">0<span className="count">1</span></span>
                    <sup><span className="delimiter">/</span> 0<span className="total-count"></span></sup>
                </div> */}
            </Link>
            <div className={"vertical-panel " } id={(view === "novedades" || view ==="red-i" || view === "nosotros" ? 'd-only' : '')}></div>
            <div className="vertical-panel-content" id={(view === "novedades" || view ==="red-i" || view === "nosotros" ? 'd-only' : '')} >
                <div className="vertical-panel-info">
                    <div className="vertical-panel-title">Su proyecto nuestro compromiso</div>
                </div>
                <ul className="social-list">
                    <li>
                        <a href="https://www.linkedin.com/company/redrealestatedevelopers/" target="_blank" className="fa fa-linkedin"></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/redsa_red" target="_blank" className="fa fa-twitter"></a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/redrealestatedevelopers/" target="_blank" className="fa fa-facebook"></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/redrealestatedevelopers/" target="_blank" className="fa fa-instagram"></a>
                    </li>

                </ul>
            </div>
            <nav className={"navbar-desctop visible-md visible-lg "}>
                <div  style={{display: "flex", width:'90vw', justifyContent:'end', alignItems:'flex-start'}} className="container d-flex align-items-start w-100 justify-content-between">
                    <div id="d-only" style={{display: "none"}} className="d-flex align-items-start" >
                        <ul style={{display: "none"}} className="pt-2 mb-0 position-relative">
                            <li style={{display: "inline-block"}} className="item-social">
                                <a href="https://www.linkedin.com/company/redrealestatedevelopers/ " target="_blank " className="fa fa-linkedin "></a>
                            </li>
                            <li  style={{display: "inline-block"}} className="item-social d-inline-block ">
                                <a href="https://twitter.com/redsa_red " target="_blank " className="fa fa-twitter "></a>
                            </li>
                            <li  style={{display: "inline-block"}} className="item-social d-inline-block ">
                                <a href="https://www.facebook.com/redrealestatedevelopers/ " target="_blank " className="fa fa-facebook "></a>
                            </li>
                            <li  style={{display: "inline-block"}} className="item-social d-inline-block ">
                                <a href="https://www.instagram.com/redrealestatedevelopers/" target="_blank " className="fa fa-instagram "></a>
                            </li>
                        </ul>
                        <a href="#top" className="brand js-target-scroll">
                            <span className="text-primary ">RED</span>
                        </a>
                    </div>
                    <ul className="navbar-desctop-menu ">
                        {navbar_items.map((item, index) => (
                            <li className={checkView(curLocation,item.title) ? 'active' : ''} >
                                <Link to={settings.base_url + (item.route == '' ? item.route : item.title.toLowerCase())} onClick={() => setOpen(false)}>{item.title}</Link>
                            </li>
                        ))}
                        {/* <li>
                            <a href="# " className="inversores">Acceso clientes</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
            {/* <!-- Navigation Mobile --> */}
            <nav className="navbar-mobile " style={{justifyContent: 'space-between'}}>
                <a href="#top " className="brand js-target-scroll ">
                    <span className="text-primary ">RED</span>
                </a>
            <button type="button " className={"navbar-toggle collapsed "+ (open ? 'open' : '') } onClick={() => setOpen(!open)} data-toggle="collapse " data-target="#navbar-mobile ">
                <span className="sr-only ">Toggle navigation</span>
                <span className="icon-bar "></span>
                <span className="icon-bar "></span>
                <span className="icon-bar "></span>
            </button>
            </nav>
        </header>
    </>
    : view !== "modulo" ?
    <>
        <header id="top affix-top" class={"header-home "}>
            <nav class={"navbar-desctop visible-md visible-lg " + (open ? 'open ' : '')} style={{padding: "0"}}>
                <div style={{width: "100%",backgroundColor: "#282828"}}>
                    <div class="container pre-header" id="d-only">
                        <p>Un desarrollo de Real Estate Developers SA</p>
                        <Link className={view === "desarrollo" ? 'd-block' : "d-none"} to={settings.base_url + "desarrollos"}>Volver a RED</Link>
                        <Link className={view === "unidad" ? 'd-block' : "d-none"} to={settings.base_url + "desarrollo/" + (unidad ? unidad.development.id : '') + "/" + ( unidad ? (unidad.development.name).replace(/ /g,"-").toLowerCase() : '')} >Volver a {unidad ? unidad.development.name : ''}</Link>
                    </div>
                </div>
                <div className="bg-gray" style={{backgroundColor: "#28282877", padding: "7px"}}>
                    <div class={(view === 'unidad' ? 'container-fluider' :  "container")} style={{display: "flex", alignItems: "center", padding: "7px"}}>
                        <div style={{display: "flex",alignItems: "flex-start"}}>
                            <img id="d-only" style={{maxWidth:"15rem"}} className={view === "desarrollo" ? 'd-block' : "d-none"} height="70" src={settings.base_url + "img/logos/"+ ( data ? getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '') +".svg"} alt="" />
                            <img id="d-only"  className={view === "unidad" ? 'd-block' : "d-none"} height="70" src={settings.base_url + "img/logos/"+ ( unidad ? getGroup_CustomTag(unidad.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') +".svg"} alt="" />
                        </div>
                        {view !== "unidad" ?
                            <ul className={"navbar-desctop-menu "} style={{justifyContent: "center", marginLeft: "auto"}}>
                                <li>
                                    <a style={{margin: "0", cursor: "pointer"}} className="tab" onClick={(e) => scrollTo("proyectos") + e.preventDefault() + setOpen(false)}>El Proyecto</a>
                                </li>
                                <li className={ unities ? unities.meta.total_count === 0 ? 'd-none' : '' : ''}>
                                    <a style={{margin: "0", cursor: "pointer"}} className="tab" onClick={(e) => scrollTo("unidades") + e.preventDefault() + setOpen(false)}>Unidades</a>
                                </li>
                                <li>
                                    <a style={{margin: "0", cursor: "pointer"}} className="tab" onClick={(e) => scrollTo("ubicacion") + e.preventDefault() + setOpen(false)}>Ubicación</a>
                                </li>
                                <li>
                                    <a style={{margin: "0", cursor: "pointer"}} className="tab" onClick={(e) => scrollTo("contacto") + e.preventDefault() + setOpen(false)}>Contacto</a>
                                </li>
                            </ul>
                         : ''}
                    </div>
                    <div class="indicator">
                        <div class="indicator-line"></div>
                    </div>
                </div>  
            </nav>
            <nav className="navbar-mobile unity-nav ">
                <img style={{maxWidth:"10rem"}} className={(view === "desarrollo" ? 'd-block ' : "d-none ") } height="60" src={settings.base_url + "img/logos/"+ ( data ? getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '') +".svg"} alt="" />
                <img style={{maxWidth:"10rem"}} className={(view === "unidad" ? 'd-block ' : "d-none ") } height="60" src={settings.base_url + "img/logos/"+ ( unidad ? getGroup_CustomTag(unidad.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') +".svg"} alt="" />
                <a href="#top " className="brand js-target-scroll ">
                </a>
                <div style={{alignItems:"center",display: "flex"}}>
                    <Link onClick={() => setOpen(false)} style={{backgroundColor:"#b01b40",padding:".3rem .5rem",marginRight:"2rem",color:"white"}} className={(view === "desarrollo" ? 'd-block ' : "d-none ") +  (open ? 'openBack' : '')} to={settings.base_url + "desarrollos"}>Volver a RED</Link>
                    <Link onClick={() => setOpen(false)} style={{backgroundColor:"#b01b40",padding:".3rem .5rem",marginRight:"2rem",color:"white"}} className={(view === "unidad" ? 'd-block ' : "d-none ") +  (open ? 'openBack' : '')} to={settings.base_url + "desarrollo/" + (unidad ? unidad.development.id : '') + "/" + ( unidad ? (unidad.development.name).replace(/ /g,"-").toLowerCase() : '')}>Volver a {unidad ? unidad.development.name : ''}</Link>
                    <button type="button " className={"navbar-toggle collapsed " + (open ? ' open ' : '') + (view !== "unidad" ? 'd-block ' : "d-none ") } onClick={() => setOpen(!open)} data-toggle="collapse " data-target="#navbar-mobile ">
                        <span className="sr-only ">Toggle navigation</span>
                        <span className="icon-bar "></span>
                        <span className="icon-bar "></span>
                        <span className="icon-bar "></span>
                    </button>
                </div>

            </nav>
            {loading ? setLoading(false) : ''}
        </header>
    </>
:
    <header id="top affix-top" class={"header-home "}>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"1rem"}} className="container">
            <Link style={{right:"auto",marginTop:"1rem"}}  className={("btn-backto ") + (view === "modulo" ? 'd-block' : "d-none")} to={settings.base_url + "red-i"}>Volver a RED-i</Link>
        </div>
        <div className="container">
            <img className="logo-redi" style={{width:"20vw"}} src="../../img/redi_repira2.svg" alt="" />
        </div>
    </header>
}

export default Header;

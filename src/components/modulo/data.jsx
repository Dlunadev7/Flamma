import { useSelector,useDispatch } from "react-redux";
import React , { useState, useEffect} from 'react'
import BreadCrumbs from "../breadcrumbs";
import {changeLocationAction} from '../../redux/themeDucks'
import {Link} from 'react-router-dom'

const Data = () => {
  // Store redux 
  const settings = useSelector(store => store.settings)
  const { data } = useSelector((store) => store.developments.development);


    const dispatch = useDispatch();
    // Render
  return data ? (
    <section class="section " id="proyectos" style={{marginTop: "4.1em "}}>
      <div class="container">
        <div className="row">
          <div className="breadcrumb-div">
              <nav aria-label="breadcrumb" className="mb-lg-4">
                  <ol className="breadcrumb">
                    <li className={'breadcrumb-item '}> <Link style={{color:"#b01b40"}} className="" onClick={() => dispatch(changeLocationAction(""))} to={settings.base_url}>Home</Link> </li>
                    <li className={'breadcrumb-item '}> <Link style={{color:"#b01b40"}} className="" onClick={() => dispatch(changeLocationAction())} to={settings.base_url + "red-i"}>RED-i Respira</Link></li>
                    <li className={'breadcrumb-item '}> {data.name}</li>
                  </ol>
              </nav>
          </div>
        </div>
        <div className="row">
        <h3>{data.name}</h3>
          <div class="col-sm-12 col-md-8 " style={{paddingLeft: "0px", marginTop:"20px"}}>
            <h5 style={{fontSize:"1.1rem",lineHeight:"1.6"}}>{data.description}</h5>
          </div>
          <div class="col-sm-12 col-md-4 " style={{paddingLeft: "0px", marginTop:"20px"}}>
              <h3 class="col-about-title ">Los diferenciales</h3>
              <div class="service-item red-i">
                  <img alt=" " src="../../img/img-icon/icon-tilde.png " />
                  <h4>Segura</h4>
              </div>
              <div class="service-item red-i">
                  <img alt=" " width="88px " src="../../img/img-icon/icon-tilde.png " />
                  <h4>Simple</h4>
              </div>
              <div class="service-item red-i">
                  <img alt=" " width="88px " src="../../img/img-icon/icon-tilde.png " />
                  <h4>Rentabilidad superior</h4>
              </div>
                  <div class="service-item red-i">
                  <img alt=" " width="88px " src="../../img/img-icon/icon-tilde.png " />
                  <h4>Accesible</h4>
              </div>
                  <div class="service-item red-i">
                  <img alt=" " width="88px " src="../../img/img-icon/icon-tilde.png " />
                  <h4>Escalable</h4>
              </div>
          </div>
        </div>
      </div>
</section>
  ) : (
    <div className="loading-section">
      <div className="lds-dual-ring"></div>{" "}
    </div>
  );
};

export default Data;

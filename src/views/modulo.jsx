import React , {useEffect} from 'react'
import {useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { getDevelopmentAction } from '../redux/developmentsDucks';
import { getUnitsDevelopmentAction } from '../redux/developmentsDucks';

import Main from '../components/modulo/main'
import Data from '../components/modulo/data'
import Contacto from '../components/modulo/contact'




function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      return null;
}

function Emprendimiento(){
    const dispatch = useDispatch();
    const {id} = useParams(); 
    useEffect(() => {
        const getDev = () => {
            dispatch(getDevelopmentAction(id))
        }
        getDev()
    }, [])
        
    ScrollToTopOnMount()

  const {data} = useSelector((store) => store.developments.development);


    return data ? (
        <div className="Modulo">
             <div className="layout">
                <Main />
                <div className="content">
                    <Data />
                    <Contacto />
                </div>
            </div>
        </div>
    ):
    (
        <div className="loading-section">
          <div className="lds-dual-ring"></div>{" "}
        </div>
      );
}

export default Emprendimiento

import React , {useEffect} from 'react'
import {useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { getDevelopmentAction } from '../redux/developmentsDucks';
import { getUnitsDevelopmentAction } from '../redux/developmentsDucks';

import Main from '../components/emprendimiento/main'
import Data from '../components/emprendimiento/data'
import Projects from '../components/emprendimiento/projects'
import Details from '../components/emprendimiento/details'
import Video from '../components/emprendimiento/video'
import Unities from '../components/emprendimiento/unities'
import Contact from '../components/emprendimiento/contact'
import Location from '../components/emprendimiento/location'

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
            dispatch(getUnitsDevelopmentAction(id))
        }
        getDev()
    }, [])
        
    ScrollToTopOnMount()

    return(
        <div className="Emprendimiento">
             <div className="layout">
                {/* <Main /> */}
                <div className="content">
                    <Data />
                    <Projects />
                    <Details />
                    <Video />
                    <Unities />
                    <Location />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Emprendimiento

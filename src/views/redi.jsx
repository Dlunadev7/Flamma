import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDevelopmentsAction,cleanDevelopmentAction,cleanUnitiesAction} from '../redux/developmentsDucks';


// -- Componentes -- //

import Main from '../components/redi/main'
import About from '../components/redi/about'
import Projects from '../components/redi/projects'
import Contact from '../components/redi/contact'


function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      return null;
}


function Redi(){

    const dispatch = useDispatch();

    useEffect(() => {
        const getDevs = () => {
            dispatch(getDevelopmentsAction())
            dispatch(cleanDevelopmentAction())
            dispatch(cleanUnitiesAction())
        }
        getDevs()
    }, [])

    ScrollToTopOnMount()
    return(
        <div className="emprendimientos">
            <div className="layout">
                <Main />
                <div className="content">
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Redi

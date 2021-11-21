import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDevelopmentsAction,cleanDevelopmentAction,cleanUnitiesAction} from '../redux/developmentsDucks';


// -- Componentes -- //

// import Main from '../components/emprendimientos/main'
import About from '../components/emprendimientos/about'
import Projects from '../components/emprendimientos/projects'
import Contact from '../components/emprendimientos/contact'
import { Sidebar } from '../components/sidebar/Sidebar';
import { Main } from '../components/pages/desarrollo/Main'
import { SectionForm } from '../components/section-form/SectionForm';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      return null;
}


function Emprendimientos(){

    const dispatch = useDispatch();
    const filtersDevelopment = useSelector((store) => store.developments.filtersDevelopment);


    useEffect(() => {
        const getDevs = () => {
            dispatch(getDevelopmentsAction())
            dispatch(cleanDevelopmentAction())
            dispatch(cleanUnitiesAction())
        }
        getDevs()
    }, [filtersDevelopment])

    ScrollToTopOnMount()
    return(
        <div className="emprendimientos">
            <div className="layout d-flex" style={{ width: '100vw' }}>
                <Sidebar />
                <Main />
            </div>
            <div className="content">
                {/* <About /> */}
                <Projects />
                {/* <Contact /> */}
                <SectionForm />
            </div>
        </div>
    )
}

export default Emprendimientos

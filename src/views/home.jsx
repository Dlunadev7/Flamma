import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDevelopmentsAction } from '../redux/developmentsDucks';

// -- Componentes -- //

import Main from '../components/inicio/main'
import About from '../components/inicio/about'
import Projects from '../components/inicio/projects'
import Red_i from '../components/inicio/red-i'
import Blogs from '../components/inicio/blogs'
import Contact from '../components/form'
import { Sidebar } from '../components/sidebar/Sidebar';
import { SectionForm } from '../components/section-form/SectionForm';


function Inicio(){

    const dispatch = useDispatch();
    const settings = useSelector((store) => store.settings);
    const data_dev = useSelector((store) => store.developments.developments).data;

    useEffect(() => {
        const defaultSettings = () => {
            dispatch(getDevelopmentsAction())
            document.title = settings.seo.title
            window.scrollTo(0, 0);
        }
        defaultSettings()
    }, [])

    return (
        <div className="Inicio">
            <div className="layout d-flex">
                <Sidebar />
                <Main />
            </div>
            <div className="content">
                <About />
                <Projects />
                <SectionForm />
            </div>
        </div>
    )
}
export default Inicio

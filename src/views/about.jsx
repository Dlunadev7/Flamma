import React , {useEffect} from 'react'

// -- Componentes -- //

import Main from '../components/nosotros/main'
import About from '../components/nosotros/about'
import Experiencie from '../components/nosotros/experience'
import Team from '../components/nosotros/team'
import Contact from '../components/form'

import { Nosotros } from '../components/pages/nosotros/Nosotros'

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      return null;
}

function PageNosotros(){

    ScrollToTopOnMount()
    return(
        <Nosotros />
    )
}

export default PageNosotros;

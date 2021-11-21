import React , {useEffect} from 'react'


// -- Componentes -- //
import Main from '../components/contacto/main'
import Details from '../components/contacto/details'
import Objects from '../components/contacto/objects'
import Contact from '../components/form'
import { Contacto } from '../components/pages/contacto/Contacto'




function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      return null;
}


function PageContacto(){

    ScrollToTopOnMount()
    return(
      <Contacto />
    )
}

export default PageContacto;

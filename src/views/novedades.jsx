import React , {useEffect} from 'react'


// -- Componentes -- //
import Main from '../components/novedades/main'
import Blogs from '../components/novedades/blogs'
import Contact from '../components/form'


function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      return null;
}


function Novedades(){

    ScrollToTopOnMount()
    return(
        <div className="novedades">
          <div className="layout">
            <Main />
            <div className="content">
                <Blogs />
                <Contact />
            </div>
          </div>
        </div>
    )
}

export default Novedades

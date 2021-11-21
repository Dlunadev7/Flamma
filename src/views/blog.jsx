import React , {useEffect} from 'react'

// -- Componentes -- //

import Main from '../components/blog/main'
import Details from '../components/blog/details'
import Contact from '../components/form'


function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      return null;
}

function Blog(){

    ScrollToTopOnMount()
    return(
        <div className="nosotros">
            <div className="layout">
                <Main />
                <div className="content">
                <Details />
                <Contact />
                </div>
            </div>
        </div>
    )
}

export default Blog

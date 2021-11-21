import React , {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getPropertyAction}  from '../redux/propertiesDucks'
import {useParams } from "react-router-dom";


// -- Componentes -- //
import Main from '../components/propiedad/main'
import Data from '../components/propiedad/data'

function ScrollToTopOnMount() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      return null;
}

function Resultados(){
    const dispatch = useDispatch();
    const {id} = useParams(); 

    useEffect(() => {
        const getProperty = () => {
            dispatch(getPropertyAction(id))
        }
        getProperty()
    }, [])

    ScrollToTopOnMount()

    return(
        <div className="propiedad">
            <Main />
            <Data />
        </div>
    )
}

export default Resultados

import {useSelector} from 'react-redux'
import {get_cover, get_shortDescription } from "../../functions/functions_dev"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MainModulo = () =>{
    const {data} = useSelector(store => store.developments.development)
    
    return (
        <main >
            <div class="page-lines" id="d-only">
                <div class="container">
                    <div className="row">
                        <div class="col-line col-xs-4">
                        <div class="line"></div>
                        </div>
                        <div class="col-line col-xs-4">
                        <div class="line"></div>
                        </div>
                        <div class="col-line col-xs-4">
                        <div class="line"></div>
                        <div class="line"></div>
                        </div>
                    </div>
                </div>  
            </div>
        </main>
    )
}

export default MainModulo
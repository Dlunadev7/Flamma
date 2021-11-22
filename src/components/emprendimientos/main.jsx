import {useState} from 'react'
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import {shortLocation, getFeatured} from '../../functions/functions_dev'
import { useEffect } from 'react';

const Main = () => {
    const [active,setActive] = useState(0)
    const {data} = useSelector(store => store.developments.developments)
    const [featured,setFeatured] = useState() 
    const settings = useSelector(store => store.settings)


    useEffect(()=>{
        if(data){
            setFeatured(getFeatured(data))
        }
    },[data])
 

    return (
        <main class="main main-inner main-projects bg-projects bg-zoom-in-out w-100" data-stellar-background-ratio="0.6" style={{padding:" 34.2vmin 0 12vmin;",paddingBottom: "5vmin"}}>
            <div class="container">
                <header class="main-header">
                <h1>Nuestros <span class="text-primary ">desarrollos</span></h1>
                </header>
                <header class="section-header wow fadeInRight">
                    <strong class="fade-title-right ">Desarrollos</strong>
                </header>

            </div>

            {/* <!-- Lines --> */}

            <div class="page-lines">
                <div class="container">
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
        </main>
    ) 
    // : (    
    //     <div class="loader">
    //         <div class="page-lines">
    //             <div class="container">
    //                 <div class="col-line col-xs-4">
    //                     <div class="line"></div>
    //                 </div>
    //                 <div class="col-line col-xs-4">
    //                     <div class="line"></div>
    //                 </div>
    //                 <div class="col-line col-xs-4">
    //                     <div class="line"></div>
    //                     <div class="line"></div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="loader-brand">
    //             <div class="sk-folding-cube">
    //                 <div class="sk-cube1 sk-cube"></div>
    //                 <div class="sk-cube2 sk-cube"></div>
    //                 <div class="sk-cube4 sk-cube"></div>
    //                 <div class="sk-cube3 sk-cube"></div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Main
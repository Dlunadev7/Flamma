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
 

    return (
        <main class="main main-inner bg-redi bg-zoom-in-out" data-stellar-background-ratio="0.6">
        <div class="container">
          <header class="main-header">
            <img src="img/redi_respira.svg" alt="red-i" style={{maxWidth:"25em"}}/>
          </header>
            <header class="section-header wow fadeInRight ">
              <strong class="fade-title-right ">Trayectoria</strong>
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
}

export default Main
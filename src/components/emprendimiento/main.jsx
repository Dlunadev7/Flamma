import {useSelector} from 'react-redux'
import {get_cover, get_shortDescription } from "../../functions/functions_dev"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Main = () =>{
    const {data} = useSelector(store => store.developments.development)
    
    useEffect(() => {
        // $('.slide-number .total-count').text("...");
        
    },[data])

    const getDescription = (element) => {
        if(element.id ===39383){
            return element.description.split(".")[0] + ".";
        }
        else{
            return get_shortDescription(element.description).title
        }
    }

    return data ? (
        <main class="main">
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>

            <div className="rev_slider_wrapper">
                <div id="rev_slider" className="rev_slider fullscreenbanner">
                    <ul>
                        {data.photos.map((element) => (
                            <li data-transition="slotzoom-horizontal" data-slotamount="7" data-masterspeed="1000" data-slotamount="7" data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-fsmasterspeed="1000">
                            {/* <!-- Main image--> */}
                            <img src={(element).image} alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" />
                            {/* <!-- Layer 1 --> */}
                            <div className="slide-title tp-caption tp-resizeme" data-x="['right','right','right','right']" data-hoffset="['-18','-18','-18','-18']" data-y="['middle','middle','middle','middle']" data-voffset="['-35','-35', '-25']" data-fontsize="['50','45', '35']" data-lineheight="['80','75', '65']"
                                data-width="['1100','700','550']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                data-mask_in="x:50px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="500" data-splitin="chars" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">{data.name}
                            </div>
                            {/* <!-- Layer 2 --> */}
                            <div style={{marginTop:'0rem'}} className="slide-subtitle tp-caption tp-resizeme" data-x="['right','right','right','right']" data-hoffset="['0']" data-y="['middle','middle','middle','middle']" data-voffset="['75','105']" data-fontsize="['18']" data-whitespace="nowrap" data-transform_idle="o:1;"
                                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;" data-transform_out="opacity:0;s:1000;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                                data-splitout="none"><span className="project-title">{data.publication_title}
                                </span><br/> {getDescription(data)}
                            </div>
                        </li>
                        ))}
           
                    </ul>
                </div>
            </div>
        </main>
    ):
    <>
        <div class="loader">
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
            <div class="loader-brand">
                <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
                </div>
            </div>
        </div>
    </>
}

export default Main
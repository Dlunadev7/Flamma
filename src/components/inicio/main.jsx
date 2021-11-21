import React, {useState} from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {get_cover, get_shortDescription } from "../../functions/functions_dev"
import RevSlider, { Slide, Caption } from 'react-rev-slider';
import { ButtonGhost } from "../buttons/btnGhost/ButtonGhost";
import $ from 'jquery';
function Main() {

    const data_dev = useSelector((store) => store.developments.developments).data;
    const [index,setIndex] = useState()

    useEffect(() => {
        // $('.slide-number .total-count').text("...");
        if(data_dev){

        if (typeof $.fn.revolution !== 'undefined') {
      
            $("#rev_slider").revolution({
              sliderType:"standard",
              sliderLayout:"fullscreen",
              dottedOverlay:"none",
              delay:7000,
              navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                onHoverStop:"off",
                touch:{
                  touchenabled:"on",
                  swipe_threshold: 75,
                  swipe_min_touches: 1,
                  swipe_direction: "horizontal",
                  drag_block_vertical: false
                }
              },
              viewPort: {
                enable:true,
                outof:"pause",
                visible_area:"80%"
              },
              responsiveLevels:[2048,1750,1192],
              gridwidth:[1180,1180,980],
              gridheight:[550],
              lazyType:"none",
              shadow:0,
              spinner:"off",
              stopLoop:"on",
              stopAfterLoops:0,
              shuffle:"off",
              autoHeight:"on",
              fullScreenAlignForce:"off",
              fullScreenOffsetContainer: "",
              fullScreenOffset: "",
              disableProgressBar:"on",
              hideThumbsOnMobile:"off",
              hideSliderAtLimit:0,
              hideCaptionAtLimit:0,
              hideAllCaptionAtLilmit:0,
              debugMode:false,
              fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
              }
            });
          }
      
            $('.arrow-left').on('click', function(){
                 $("#rev_slider").revprev();
            });
        
          $('.arrow-right').on('click', function(){
              $("#rev_slider").revnext();
          });
      
          $('.slide-number .total-count').text($('#rev_slider li'));
      
          $('#rev_slider').bind("revolution.slide.onchange",function (e,data) {
              $('.slide-number .count').text(data.slideIndex);
          });
        }

    },[data_dev])

    const getDescription = (element) => {
        if(element.id ===39383){
            return element.description.split(".")[0] + ".";
        }
        else{
            return get_shortDescription(element.description).title
        }
    }


    return data_dev ?(
        <main className="main"  style={{ width: "calc(100% - 250px)" }}>
            <div className="arrow__container d-flex justify-content-between">
                <div className="icon-arrow_left arrow_left"></div>
                <div className="icon-arrow_right arrow_right"></div>
            </div>
            <div className="rev_slider_wrapper">
                <div id="rev_slider" className="rev_slider fullscreenbanner h-100">
                    <ul>
                        <div className="bg-slider-shadow"></div>
                        {
                                data_dev.objects.filter(element => element.is_starred_on_web).map((element,index) => (
                                    <li key={index} data-transition="slotzoom-horizontal" data-slotamount="8" data-masterspeed="1500" data-slotamount="8" data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-fsmasterspeed="5000">
                                        
                                        <img src={get_cover(element.photos).original} alt="" style={{zIndex:"3"}} data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" />

                                        <div>
                                        <div className="slide-title tp-caption tp-resizeme" data-x="['right','right','right','right']" data-hoffset="['-18','-18','-18','-18']" data-y="['middle','middle','middle','middle']" data-voffset="['-35','-35', '-25']" data-fontsize="['50','45', '35']" data-lineheight="['80','75', '65']"
                                            data-width="['1100','700','550']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:50px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="500" data-splitin="chars" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05"
                                            >
                                            {element.name}
                                        </div>
                
                                        <div className="slide-subtitle tp-caption tp-resizeme" data-x="['right','right','right','right']" data-hoffset="['0']" data-y="['middle','middle','middle','middle']" data-voffset="['75','105']" data-fontsize="['18']" data-whitespace="nowrap" data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;" data-transform_out="opacity:0;s:1000;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                                            data-splitout="none"
                                            ><span className="project-title">
                                                {element.publication_title.split(".")}
                                            </span><br/> 
                                            {getDescription(element)}
                                        </div>
                
                                        <div className="tp-caption" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['195','215']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;"
                                            data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);" data-transform_in="y:50px;opacity:0;s:1500;e:Power4.easeInOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                            data-mask_out="x:inherit;y:inherit;" data-start="1500" data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                            <Link to={"desarrollo/" + element.id  + "/" + element.name.replace(/ /g,"-").toLowerCase()} className="btn top-sliderbtn js-target-scroll">
                                                <ButtonGhost />
                                            </Link>
                                        </div>
                                        </div>
                                    </li>
                                ))
                        }   
                    </ul>
                </div>
            
            </div>
        </main>
  )
  :
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

export default Main;

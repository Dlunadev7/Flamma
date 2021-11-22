import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { getGroup_CustomTag } from '../../functions/functions_dev'
import $ from 'jquery';
const Projects = () =>{
    // const {data} = useSelector(store => store.developments.development)
    const {data} = useSelector(store => store.developments.development)
    const settings = useSelector(store => store.settings)
 
    useEffect(() => {
        $('.js-projects-gallery').each(function(){
            // $(this).magnificPopup({
            //     delegate: 'a',
            //     type: 'image',
            //     removalDelay: 300,
            //     tLoading: 'Loading image #%curr%...',
            //     gallery: {
            //        enabled: true,
            //        navigateByImgClick: true,
            //        preload:[0,1]
            //     },
            //     image: {
            //        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            //        titleSrc: function(item) {
            //           return item.el.attr('title') + '<small></small>';
            //        }
            //     }
    
            // });
        });
    })

    return data ? (
        <div class="js-projects-gallery" >
            <section class="clients section ">
                <div class=" ">
                    <div class="images-grid-section">
                        <div class="project one image-grid-element">
                            <a href={data.photos[0].original}  title={data.photos[0].description}>
                                <figure>
                                    <img alt="" src={data.photos[0].original} />
                                    <figcaption>
                                    <div class={"project-zoom " + ( data ? ' bg-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}></div>
                                            <h4 class="project-category">
                                            {data.photos[0].description}
                                        </h4>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>              
                        <div class="project two image-grid-element">
                            <a href={data.photos[1] ? data.photos[1].original : ''} title={data.photos[1] ? data.photos[1].description : ''} >
                                <figure>
                                    <img alt=""src={data.photos[1] ? data.photos[1].original : '' } />
                                    <figcaption>
                                        <div class={"project-zoom " + ( data ? ' bg-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}></div>
                                        <h4 class="project-category">
                                           {data.photos[1] ?  data.photos[1].description : ''}
                                        </h4>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>              
                        <div class="project three image-grid-element">
                            <a href={data.photos[2] ? data.photos[2].original : ''} title={data.photos[2] ? data.photos[2].description : '' }>
                            <figure>
                                <img alt="" src={data.photos[2] ? data.photos[2].original : ''} />
                                <figcaption>
                            
                                <h4 class="project-category">
                                    {data.photos[2] ? data.photos[2].description : ''} 
                                </h4>
                                <div class={"project-zoom " + ( data ? ' bg-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}></div>
                                </figcaption>
                            </figure>
                            </a>
                        </div>              
                        <div class="project four image-grid-element">
                            <a href={data.photos[3] ? data.photos[3].original : ''} title={data.photos[3] ? data.photos[3].description : ''} >
                            <figure>
                                <img alt="" src={data.photos[3] ? data.photos[3].original : ''}/>
                                <figcaption>
                            
                                <h4 class="project-category">
                                    {data.photos[3] ? data.photos[3].description : ''}
                                </h4>
                                <div class={"project-zoom " + ( data ? ' bg-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}></div>
                                </figcaption>
                            </figure>
                            </a>
                        </div>              
                    </div>              
                </div>
            </section>
        </div>
    ): 
        <>
        <div class="project image-grid-element"></div>
        <div class="project image-grid-element"></div>
        <div class="project image-grid-element"></div>
        <div class="project image-grid-element"></div>
        </>
}

export default Projects
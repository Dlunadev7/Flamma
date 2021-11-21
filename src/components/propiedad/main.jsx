import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SimpleReactLightbox ,{SRLWrapper} from 'simple-react-lightbox'
import MetaTags from 'react-meta-tags';
import {getFrontCover} from '../../functions/functions_property'
import { getGroup_CustomTag } from '../../functions/functions_dev';

const Main = () =>{
    const [idProperty,setIdProperty] = useState(window.location.pathname.split("/"))
    const [location,setLocation] = useState(window.location.pathname.split("/"))
    const dispatch = useDispatch();
    const settings = useSelector(store => store.settings)
    const property = useSelector(store => store.properties.property).data

    // const getFrontCover = (photos) =>{
    //     if(photos.length == 0){return null}
    //     if(photos.find(element => element.is_front_cover == true)){
    //         return (photos.find(element => element.is_front_cover == true))
    //     }
    //     else{
    //         return(photos[0])
    //     }
    // }

    const options = {
        settings: {
        	autoplaySpeed: 1500,
        	transitionSpeed: 900
        },
        buttons: {
        	iconColor: '#ffff'
        },
        caption: {
        	captionColor: '#fff',
        	captionFontFamily: 'Raleway, sans-serif',
        	captionFontWeight: '300',
        	captionTextTransform: 'uppercase'
        },
        progressBar: {
        	height: '20px',
        	fillColor: '#191919',
        	backgroundColor: 'white'
        }
    };

    useEffect(() => {
        setIdProperty(window.location.pathname.split("/")[6])
      },[]);

    return property ? (
        <section className="main"  style={{'backgroundImage':"url(" + (getFrontCover(property.photos) ? getFrontCover(property.photos).original : 'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1') +")"}}>
            <MetaTags>
                <title>{property.fake_address}, {property.type.name} en {property.operations[0].operation_type} - {settings.seo.title}</title>
                <meta name="description" content={settings.seo.description} />
            </MetaTags>
            <div className="container-fluider">
                <div className="content-main d-flex justify-content-lg-between text-start align-items-lg-end align-items-center justify-content-center">
                    <h2>
                        {property.publication_title} <br />
                    </h2>
                    <SimpleReactLightbox>
                        <SRLWrapper options={options}>
                        <a className={"btn-square d-flex justify-content-center align-items-center position-relative overflow-hidden " + ( property ? ' bg-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '')}><i className="icon-picture"></i><img  src={(getFrontCover(property.photos) ? getFrontCover(property.photos).original : 'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1')} className="position-absolute opacity-none" style={{width:'100%'},{height:'100%'},{opacity:'0'}} alt="" /></a>
                        {property.photos.filter(element => !element.is_blueprint).map((item,index) => (
                            index > 0 ?
                            <img className="d-none" src={item.original} alt="" />
                            :
                            ''
                        ))}
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>
            </div>
        </section>
    ):''
} 

export default Main
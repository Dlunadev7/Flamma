import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'
import MetaTags from 'react-meta-tags';
import TagManager from 'react-gtm-module';
import ReactPixel from 'react-facebook-pixel';

function Head(){
    const settings = useSelector(store => store.settings)
    const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
    };
    useEffect(() => {
        TagManager.initialize({gtmId: settings.keys.google})

        if(!localStorage.getItem("prop"+"_favorito_"+settings.short_name)){
            localStorage.setItem("prop"+"_favorito_"+settings.short_name,'');
        }
        if(!localStorage.getItem("dev"+"_favorito_"+settings.short_name)){
            localStorage.setItem("dev"+"_favorito_"+settings.short_name,'');
        }
    },[])
    return(
        <div>
            <MetaTags>
                <title> {settings.seo.title}</title>
                <meta name="description" content={settings.seo.description} />
            </MetaTags>
        </div>
    )
}

export default Head
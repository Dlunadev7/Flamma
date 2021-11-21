
import { useSelector } from "react-redux";
import { getVideo } from "../../functions/functions_dev";

const Video = () => {
  // Store redux 
  const settings = useSelector(store => store.settings)
  const { data } = useSelector((store) => store.developments.development);

  // Render
  return data ? 
    <>
      {getVideo(data.videos,"youtube") ? 
          <section style={{marginTop: "3em", position: "relative"}}>
              <div class="container" style={{margin: "auto", textAlign: "center"}}>
                  <h2 style={{textAlign: "center", marginBottom: "1em"}}>{getVideo(data.videos).title}</h2>
                  <iframe className="video-development" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="100%" height="600px" type="text/html" src={getVideo(data.videos).player_url + "?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0" + "&origin=https://youtubeembedcode.com"}><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://flickrembedslideshow.com">Flickr embed</a></small></div></iframe>
              </div>
              <header class="container section-header wow fadeInRight " style={{position:" absolute",top:"100px",right: "350px"}}>
                  <strong class="fade-title-right ">Video</strong>
              </header>
          </section>
          :
          ''
      }
    </>
     : (
      <div className="loading-section">
        <div className="lds-dual-ring"></div>{" "}
      </div>
    );
};

export default Video;

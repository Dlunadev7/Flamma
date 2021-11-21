import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Details = () => {
    const settings = useSelector((store) => store.settings);

    return(
        <section class="blog-details">
        <div class="container">
          <div class="row">
            <div class="col-primary col-md-8">
              <article class="post">
                <header class="post-header">
                <div className="flex">
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elitmagna aliqua.</h3>
                </div>
                  <div class="blog-meta">
                       <div class="author">
                    por <a href="#">Alejandro Reyser</a>
                  </div>
                    <div class="time">Julio 26, 2021</div>
                  </div>
                </header>
                <div class="post-thumbnail">
                  <img alt="" class="img-responsive" src={settings.base_url + "img/blog/1-760x514_nota.jpg"} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, habitasse diam neque urna vestibulum sagittis ut, quisque fringilla torquent quis turpis fusce. Orci ornare etiam placerat senectus posuere penatibus tempor neque, elementum leo vehicula interdum primis consequat litora, eros felis praesent fermentum sociis tristique parturient. Morbi nullam per varius natoque taciti ornare dignissim tincidunt, aenean nascetur ultrices habitant accumsan orci.

</p> 

                <p>Fringilla non egestas condimentum euismod odio iaculis nunc at lectus tempus erat, aptent luctus dapibus magna dui vel pulvinar montes vitae penatibus, pellentesque aliquet mauris congue accumsan lobortis primis nec fusce sollicitudin. Etiam libero orci eget phasellus diam faucibus placerat, venenatis conubia magnis egestas fusce fringilla massa torquent, vehicula ante aliquam nullam vel purus. Curae hendrerit mattis maecenas nec etiam consequat dapibus convallis, aliquet senectus dui mi tellus lobortis sapien imperdiet elementum, blandit nascetur proin velit himenaeos eleifend diam.</p>

                <p>Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.</p>

                <p>Mei eu mollis albucius, ex nisl contentiones vix. Duo persius volutpat at, cu iuvaret epicuri mei. Duo posse pertinacia no, ex dolor contentiones mea. Nec omnium utamur dignissim ne. Mundi lucilius salutandi an sea, ne sea aeque iudico comprehensam. Populo delicatissimi ad pri. Ex vitae accusam vivendum pro.</p>
                  <div class="blog-tags">
                    <span className="tag">Diseño</span>
                    <span className="tag">Construcción</span>
                    <span className="tag">Sustentabilidad</span>
                </div>
              </article>
            </div>
            <div class="col-secondary col-md-4">
              <div className="goBack">
                <Link className="btn" to={settings.base_url + "novedades"}>Volver a novedades</Link>
              </div>
              <div class="widget widget_recent_post">
                <h3 class="widget-title">Novedades destacadas</h3>
                <article class="recent-post">
                  <div class="recent-post-thumbnail">
                    <a href=""><img alt="" src={settings.base_url + "img/blog/1-149x108.jpg"} class="wp-post-image" /></a>
                  </div>
                  <div class="recent-post-body">
                    <h4 class="recent-post-title">
                      <a href="">Senserit mediocrem vis ex, et dicunt deleniti gubergren mei.</a>
                    </h4>
                    <div class="recent-post-time">Mayo 12</div>
                  </div>
                </article>
                <article class="recent-post">
                  <div class="recent-post-thumbnail">
                    <a href=""><img alt="" src={settings.base_url + "img/blog/2-149x108.jpg"} class="wp-post-image" /></a>
                  </div>
                  <div class="recent-post-body">
                    <h4 class="recent-post-title">
                      <a href="">Meis vocent signiferumque pri et. Facilis corpora recusabo ne quo. </a>
                    </h4>
                    <div class="recent-post-time">Enero 01</div>
                  </div>
                </article>
                <article class="recent-post">
                  <div class="recent-post-thumbnail">
                    <a href=""><img alt="" src={settings.base_url + "img/blog/3-149x108.jpg"} class="wp-post-image" /></a>
                  </div>
                  <div class="recent-post-body">
                    <h4 class="recent-post-title">
                      <a href="">Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum.</a>
                    </h4>
                    <div class="recent-post-time">Febrero 08</div>
                  </div>
                </article>
              </div>
              <div class="widget">
                {/* <div class="blog-tags">
                  <span className="tag">diseño</span>
                  <span className="tag">construcción</span>
                  <span className="tag">inversiones</span>
                  <span className="tag">arquitectura</span>
                  <span className="tag">sustentabilidad</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Details;
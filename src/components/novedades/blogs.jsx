import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Blogs = () => {
    const settings = useSelector((store) => store.settings);
    return (
        <section class="blog-list">
        <div class="container">
            <article class="blog">
                <div class="row">
                    <div class="blog-thumbnail col-md-8">
                        <div class="blog-thumbnail-bg col-md-8 visible-md visible-lg" style={{backgroundImage: "url(img/blog/1-760x514.jpg)"}}></div>
                        <div class="blog-thumbnail-img visible-xs visible-sm"><img alt="" class="img-responsive" src="/img/blog/1-760x514.jpg" /></div>
                    </div>
                    <div class="blog-info col-md-4">
                        <div class="blog-tags">
                            <span className="tag small" >Sustentabilidad</span>
                            <span className="tag small" >Construcción</span>
                            <span className="tag small" >Diseño</span>
                        </div>
                        <h3 class="blog-title">
                            <a href="">Lorem ipsum dolor sit amet, consectetur adipiscing elitmagna aliqua. </a>
                        </h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do.</p>
                        <div class="blog-meta">
                            <div class="author">
                                por <a href="#">Alejandro Reyser</a>
                            </div>
                            <div class="time">Julio, 26</div>
                        </div>
                        <div class="text-right"><Link to={settings.base_url + "novedades/blog/1"} class="read-more">Leer nota completa</Link></div>
                    </div>
                </div>
            </article>
            <article class="blog">
                <div class="row">
                    <div class="blog-thumbnail col-md-8">
                        <div class="blog-thumbnail-bg col-md-8 visible-md visible-lg" style={{backgroundImage: "url(img/blog/2-760x514.jpg)"}}></div>
                        <div class="blog-thumbnail-img visible-xs visible-sm"><img alt="" class="img-responsive" src="img/blog/2-760x514.jpg" /></div>
                    </div>
                    <div class="blog-info col-md-4">
                        <div class="blog-tags">
                            <span className="tag small" >Sustentabilidad</span>
                            <span className="tag small" >Construcción</span>
                            <span className="tag small" >Diseño</span>
                        </div>
                        <h3 class="blog-title">
                            <a href="">Lorem ipsum dolor sit amet, consectetur adipiscing elitmagna aliqua. </a>
                        </h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do.</p>
                        <div class="blog-meta">
                            <div class="author">
                                por <a href="#">Alejandro Reyser</a>
                            </div>
                            <div class="time">Julio, 26</div>
                        </div>
                        <div class="text-right"><Link to={settings.base_url + "novedades/blog/1"} class="read-more">Leer nota completa</Link></div>
                    </div>
                </div>
            </article>
            <article class="blog">
                <div class="row">
                    <div class="blog-thumbnail col-md-8">
                        <div class="blog-thumbnail-bg col-md-8 visible-md visible-lg" style={{backgroundImage: "url(img/blog/3-760x514.jpg)"}}></div>
                        <div class="blog-thumbnail-img visible-xs visible-sm"><img alt="" class="img-responsive" src="img/blog/3-760x514.jpg" /></div>
                    </div>
                    <div class="blog-info col-md-4">
                        <div class="blog-tags">
                            <span className="tag small" >Sustentabilidad</span>
                            <span className="tag small" >Construcción</span>
                            <span className="tag small" >Diseño</span>

                        </div>
                        <h3 class="blog-title">
                            <a href="">Lorem ipsum dolor sit amet, consectetur adipiscing elitmagna aliqua. </a>
                        </h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do.</p>
                        <div class="blog-meta">
                            <div class="author">
                                por <a href="#">Alejandro Reyser</a>
                            </div>
                            <div class="time">Julio, 26</div>
                        </div>
                        <div class="text-right"><Link to={settings.base_url + "novedades/blog/1"} class="read-more">Leer nota completa</Link></div>
                    </div>
                </div>
            </article>
        </div>
    </section>
    )
}

export default Blogs
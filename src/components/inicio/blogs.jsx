import React from 'react'
const Blogs = () => {
    return (
        <section className="blog-list ">
            <div className="container ">
                <header className="section-header ">
                    <h2 className="section-title "><span className="text-primary ">RED</span> Noticias</h2>
                </header>
                <header className="section-header wow fadeInRight ">
                    <strong className="fade-title-right ">Novedades</strong>
                </header>
                <div className="section-content ">
                    <article className="blog col-md-4 " style={{marginRight: "0px"}}>
                        <div className="row ">
                            <div className="blog-thumbnail col-md-4 ">
                                <div className="blog-thumbnail-bg col-md-4 visible-md visible-lg " style={{backgroundImage: "url(img/blog/1-760x514.jpg)"}}></div>
                                <div className="blog-thumbnail-img visible-xs visible-sm "><img alt=" " className="img-responsive " src="img/blog/1-760x514.jpg "/></div>
                            </div>
                            <div className="blog-info col-md-8 " style={{padding: "1em "}}>
                                <h3 className="blog-title ">
                                    <a href=" ">Nam libero tempore, cum soluta nobis est eligendi optio.</a>
                                </h3>
                                <p>Itaque earum rerum delectus, ut voluptatibus maiores alias consequatur.</p>
                                <div className="blog-meta ">
                                    <div className="time ">Junio 2021</div>
                                </div>
                                <div className="text-right "><a href=" " className="read-more ">Leer más</a></div>
                            </div>
                        </div>
                    </article>

                    <article className="blog col-md-4 " style={{marginRight: "0px"}}>
                        <div className="row ">
                            <div className="blog-thumbnail col-md-4 ">
                                <div className="blog-thumbnail-bg col-md-4 visible-md visible-lg " style={{backgroundImage: "url(img/blog/2-760x514.jpg)"}}></div>
                                <div className="blog-thumbnail-img visible-xs visible-sm "><img alt=" " className="img-responsive " src="img/blog/2-760x514.jpg " /></div>
                            </div>
                            <div className="blog-info col-md-8 " style={{padding: "1em "}}>
                                <h3 className="blog-title ">
                                    <a href=" ">At vero eos et accusamus et iusto odio dignissimos ducimus.</a>
                                </h3>
                                <p>Itaque earum rerum delectus, ut voluptatibus maiores alias consequatur.</p>
                                <div className="blog-meta ">
                                    <div className="time ">Julio 2021</div>
                                </div>
                                <div className="text-right "><a href=" " className="read-more ">Leer más</a></div>
                            </div>
                        </div>
                    </article>

                    <article className="blog col-md-4 " style={{marginRight: "0px"}}>
                        <div className="row ">
                            <div className="blog-thumbnail col-md-4 ">
                                <div className="blog-thumbnail-bg col-md-4 visible-md visible-lg " style={{backgroundImage: "url(img/blog/3-760x514.jpg)"}}></div>
                                <div className="blog-thumbnail-img visible-xs visible-sm "><img alt=" " className="img-responsive " src="img/blog/3-760x514.jpg " /></div>
                            </div>
                            <div className="blog-info col-md-8 " style={{padding: "1em "}}>

                                <h3 className="blog-title ">
                                    <a href=" "> Itaque earum rerum hic tenetur a sapiente delectus.</a>
                                </h3>
                                <p>Itaque earum rerum delectus, ut voluptatibus maiores alias consequatur.</p>
                                <div className="blog-meta ">

                                    <div className="time ">Julio 2021</div>
                                </div>
                                <div className="text-right "><a href=" " className="read-more ">Leer más</a></div>
                            </div>
                        </div>
                    </article>
                    
                    <div className="section-content text-center ">
                        <a href="novedades.html " className="btn btn-gray ">Ver todas la novedades</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs

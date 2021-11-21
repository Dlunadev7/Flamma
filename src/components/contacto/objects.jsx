const Objects = () => {
    return (
        <section id="objects" class="objects section">
            <div class="container">
                <header class="section-header">
                    <h2 class="section-title">Tenemos base en<span class="text-primary"> Argentina</span></h2>
                </header>
                <div class="section-content">
                    <div class="objects">
                        <img alt="" class="img-responsive" src="img/map.png" />
                        <div class="object-label" style={{left: "32.2%", top: "80.6%"}}>
                            <div class="radar" style={{position: "absolute", top: "50%" , left: "50%", transform: "translate(-50%,-50%)", width: "70px", height: "70px"}}>
                                <div class="ring0"></div>
                                <div class="pulse"></div>
                                <div class="ringbase ring1"></div>
                                <div class="ringbase ring2"></div>
                            </div>

                            <div class="object-info">
                                <h3 class="object-title">Buenos Aires</h3>
                                <div class="object-content">
                                    Cerviño 4449, 7º Piso, C1425AHB<br/> Buenos Aires. Argentina.<br/> +54 11 4777.2100<br/> contactenos@redsa.com.ar
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Objects
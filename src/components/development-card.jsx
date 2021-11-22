
const dev_Card = (props) => {

    const state_names = useSelector(store => store.developments.stateCodes)

    function get_cover(photos){
        return photos.find(element => element.is_front_cover) ? photos.find(element => element.is_front_cover) : photos[0] ? photos[0] : 'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1';
    }

    return props.element ? (
        <a href="#" title="Dorrego Mío">
            <figure>
                <img alt="" src="img/projects/1-480x880.jpg"/>
                <figcaption>
                    <h3 class="project-title">
                        DORREGO MÍO
                    </h3>
                    <h4 class="project-category">
                        En construcción
                    </h4>
                    <div class="project-zoom"></div>
                </figcaption>
            </figure>
        </a>
    ): ''
} 

export default dev_Card
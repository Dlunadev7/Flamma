import { useState } from "react";
import { useSelector } from "react-redux";

const jsonTags = [
    {
        id:1,
        name:'Etiqueta 1'
    },
    {
        id:2,
        name:'Etiqueta 2'
    },
    {
        id:3,
        name:'Etiqueta 3'
    },
    {
        id:4,
        name:'Etiqueta 4'
    },
    {
        id:5,
        name:'Etiqueta 5'
    }
]
const Main = () => {
    const settings = useSelector((store) => store.settings);
    const [listActives,setListActive] = useState([])

    const toggleTag = (id) => {
        if(listActives.find(e => e === id)){
            return setListActive(listActives.filter(e => e !== id))
        }
        return setListActive([...listActives,id]);
    } 


    return (
        <main class="main main-inner main-blog bg-blog bg-zoom-in-out" data-stellar-background-ratio="0.6">
        <div class="container">
            <header class="main-header">
                <h1>Novedades <span class="text-primary ">RED</span></h1>
            </header>
            <div className="row mobile-block">
                <div className="selected">
                    <div>
                        <i className="icon-tag"></i>
                        {listActives.map((element, index) =>(
                            <div className="tag active wow fadeInRight">
                                {jsonTags.find(item => item.id === element).name}
                                <button onClick={() => toggleTag(element)}><i className="icon-delete"></i></button>
                            </div>
                        ))}
                    </div>
                    <span onClick={() => setListActive([])}>Limpiar</span>
                </div>
                <button className="btn wow swing"> Buscar <i className="icon-search"></i></button>
            </div>

            <div className="row mt-4">
                {jsonTags.map((element,index) => (
                    listActives.find(e => e === element.id) ? '' :
                    <div className="col-xs-4">
                        <div key={index} onClick={() => toggleTag(element.id)} className="tag">{element.name}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* <!-- Lines --> */}

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
    </main>
    )
}

export default Main
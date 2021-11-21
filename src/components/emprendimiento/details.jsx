import { useSelector } from "react-redux";
import {get_shortDescription, getGroup_CustomTag} from "../../functions/functions_dev"

const Data = () => {
  // Store redux 
  const settings = useSelector(store => store.settings)
  const { data } = useSelector((store) => store.developments.development);

  // Render
  return data ? (
    <section class="project-details" style={{position: "relative"}}>              
    <header class="container section-header wow fadeInLeft " style={{position: "absolute",left: "20%",top: "150px"}} >
        <strong class="fade-title-left ">Proyecto</strong>
    </header>
{/* 
    <div style={{maxWidth: "600px",margin: "auto",marginTop: "5em"}}>
        <h2 style={{textAlign: "center", marginBottom: "1em"}}>{data.name}</h2>
        <p>{data.description}
        </p>
    </div> */}
    
    <div class="container">
      <div class={"project-details-item " + (get_shortDescription(data.description).photos[0].length > 30 ? 'd-block' : "d-none")}>
        <div class="row">
          <div className={"project-details-info wow fadeInLeft bg-yellow-theme " + ( data ? "bg-" + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>
            <h3 class="project-details-title">
            </h3>
            <p class="project-details-descr">{get_shortDescription(data.description).photos[0] + "."}
            </p>
          </div>
          <div class="project-details-img col-md-8 col-md-offset-4">
            <img alt="" class="img-responsive" src={data.photos[0] ? data.photos[0].original : ''} />
          </div>
        </div>
      </div>
      <div class={"project-details-item " + (get_shortDescription(data.description).photos[1].length > 30 ? 'd-block' : "d-none" ) }>
        <div class="row">
          <div class="project-details-info wow fadeInRight">
            <h3 class="project-details-title">
            </h3>
            <p class="project-details-descr">{get_shortDescription(data.description).photos[1] + "."}
            </p>
        </div>
          <div class="project-details-img col-md-8">
            <img alt="" class="img-responsive" src={data.photos[2] ? data.photos[2].original : ''} />
        </div>
      </div>
      </div>
      <div class={"project-details-item " + (get_shortDescription(data.description).photos[2].length > 30 ? 'd-block' : "d-none" )}>
        <div class="row">
          <div class={"project-details-info wow fadeInLeft bg-yellow-theme " + ( data ? "bg-" + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>
            <h3 class="project-details-title">
            </h3>
            <p class="project-details-descr">{get_shortDescription(data.description).photos[2] + "."}
            </p>
        </div>
          <div class="project-details-img col-md-8 col-md-offset-4">
            <img alt="" class="img-responsive" src={data.photos[3] ? data.photos[3].original : ''} height="100%" />
          </div>
      </div>
    </div>
    </div>
    </section>
  ) : (
    <div className="loading-section">
      <div className="lds-dual-ring"></div>{" "}
    </div>
  );
};

export default Data;



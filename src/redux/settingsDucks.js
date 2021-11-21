// constantes
const dataInicial = {
    name:'Flamma',
    short_name:'flamma',
    // base_url:'/clientes/red-react/',
    base_url:'/clientes/flamma/',
    social:
    {
        facebook:'',
        instagram:'',
        twitter:'',
        linkedin:'',
        youtube:'',
    }
    ,
    contact:
    {
        phone:['000-00000' , '000-000000'],
        whatsapp:{link:'',visual:''},
        mail:''
    },
    location:
    {
        address:'Dirección',
        region:'Ciudad, Argentina',
        cp:'0000'
    },
    keys:{
        captcha:'6LeOjZocAAAAAASwfNNNJdf60E3KoQhuyVngYiY-',
        tokko:'2e4da1b9a9b3c724ab1cbfa7c1f92ab291ba1a2b',
        google_tgm:'',
        google_map:'AIzaSyCelKXL-cdJKcw8uWLWDGFrL6tZFASQ5uY',
    },
    seo:{
        title:'Flamma - Laura Farías',
        description:'',
        url:'',
        img:'',
        image_url:'',
        site_name:'',
        locale:'',
    }
}
export default function settingsReducer(state = dataInicial, action){
    return state
}
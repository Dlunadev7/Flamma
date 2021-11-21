import axios from 'axios'

// constantes
const dataInicial = {
    data:{
        nombre:'',
        apellido:'',
        cellphone:'',
        phone:'',
        email:'',
        work_name:'',
        text:'',
        properties:'',
        tags:''
    }
}


// types
const LOAD_FIELDS = 'LOAD_FIELDS'

// reducer
export default function contactReducer(state = dataInicial, action){
    switch(action.type){
        case LOAD_FIELDS:
            return {...state, data : action.payload }
        default:
            return state
    }
}


// actions

export const formTokko = (tag,property = null,id = null) => async (dispatch, getState) => {
    const fields = getState().contact.data
    try {
        // Campos del formulario //
        let body = ''
        var name = ''
        var tags = [tag]
        if(property){tags.push(property)}
        if(fields.nombre){name+= fields.nombre}
        if(fields.apellido){name+=" " + fields.apellido}
        if(fields.telefono){body += "Teléfono: " + fields.telefono + "\n"}
        // if(fields.email){body += "\n Email: " + fields.email}
        if(tag == 'Landing Web' ||tag ==  'Ficha web unidad'){body += "Emprendimiento: " + property + "\n"}
        if(tag == 'Propiedad' ){body += "Propiedad: " + property + "\n"; }
        body += "Email: " + fields.email + "\n"
        if(fields.text){ body += "Mensaje: " + fields.text + "\n"}
        
        var message = '' 

        if(tag == "Landing Web"){
            message =  JSON.stringify({
                name,
                email: fields.email,
                phone:fields.telefono,
                tags,
                developments:id,
                text: body
            });
        }
        else{
            message =  JSON.stringify({
                name,
                email: fields.email,
                phone:fields.telefono,
                tags,
                properties:id,
                text: body
            });
        }

        await axios.post('https://tokkobroker.com/api/v1/webcontact/?key=' + getState().settings.keys.tokko , message ,{
            headers: {
                'Content-Type': 'application/json'
            }
            })
    } catch (error) {
        console.log(error)
    }
}

export const formTasaciones_Tokko = (operation,type) => async (dispatch, getState) => {
    const fields = getState().contact.data
    try {
        // Campos del formulario //
        let body = ''
        var tags = ["Tasación" , 'Sitio Web']
        body += "\n Nombre: " + fields.nombre
        body += "\n Email: " + fields.email
        body += "\n Ubicación: " + fields.ubicacion
        body += "\n Tipo: " + type
        body += "\n Operacion: " + operation
        if(fields.rooms){ body += "\n Ambientes: " + fields.rooms}
        if(fields.age){ body += "\n Antiguedad: " + fields.age}
        if(fields.garage){ body += "\n Garage: " + fields.garage}
        if(fields.sup_tot){ body += "\n Superficie total: " + fields.sup_tot}
        if(fields.sup_cub){ body += "\n Superficie cubierta: " + fields.sup_cub}
        if(fields.amenities.length > 0){body += "\n Amenities: " + fields.amenities}
        
        const message =  JSON.stringify({
            name:fields.nombre,
            email: fields.email,
            tags,
            text: body
        });
        // console.log(message)
        await axios.post('https://tokkobroker.com/api/v1/webcontact/?key=' + getState().settings.keys.tokko , message ,{
            headers: {
                'Content-Type': 'application/json'
            }
            })
    } catch (error) {
        console.log(error)
    }
}

export const updateFields = (datos) => async (dispatch, getState) => {
    try {
        dispatch({
            type: LOAD_FIELDS,
            payload: datos
        })
    } catch (error) {
        console.log(error)
    }
}

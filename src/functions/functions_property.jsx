//Funcion para armar el texto de la location
export const getLocationProperty = (full_location) => {
    const spliter = full_location.split(" |");
    return spliter[2] + ", " + spliter[1];
  };
  
  //Funcion para buscar una portada entre muchas fotos
  export const getFrontCover = (photos) => {
    console.log(photos)
    if (photos.find((element) => element.is_front_cover == true)) {
        return photos.find((element) => element.is_front_cover == true);
    }
        return photos[0];
    };
    
    export const convertIdToString = (listFilters,filter,value) =>{
        switch(filter){
            case 'type':{
            }
        }
    }
    
    //Funcion para acortar descripciones (Ver mas...)
    export const get_short_desc = (description,max_caracters) => {
      if (description.length > max_caracters) {
        return description.slice(0, 700) + '...';
      } else {
        return description;
      }
    };
    
    //Funcion para armar el texto del price/currency
    export const getPrice = (price) => {
      return (
        price.currency + " " + new Intl.NumberFormat("de-DE").format(price.price)
      );
    };
    
    //Funcion para buscar 360º Tour (Ver mas...)
    export const searchTour = (videos) => {
      for (const iterator of videos) {
        if(iterator.provider == '360magictour'){
          return iterator;
        }
      }
      return false;
    }
    
    //Función para buscar video en una propiedad
    export const searchYoutube = (videos) =>  {
      return (videos.find(element => element.provider.toString().toLowerCase() == 'youtube'));
    }
    
    //Funcion para armar la URL de las fichas
    export const shortDirection = (operation, type, location, id, address) => {
      if (location[location.length - 1] == " ") {
        location = location.substring(0, location.length - 1);
      }
      return (operation ? operation.toLowerCase():'') + "/" + (type ? type.replace(/ /g, "-").toLowerCase():'') + "/" + (location ? location.replace(/ /g, "-").toLowerCase() : 'undefined') + '/' + (id ? id : '')  + "/" +  (address ? address.replace(/ /g, "-").toLowerCase():'no-definida')
    };
    
    //Funcion para listar/eliminar favoritos en localStorage
    export const addFavorites = (id,type,inmobiliaria) =>{
      if(localStorage.getItem(type + "_favorito_" + inmobiliaria )){
          const storage = localStorage.getItem(type + "_favorito_" + inmobiliaria )
            var array_storage = storage.split("-")
            array_storage = array_storage.filter(element => element != "")
            if(array_storage.find(element => element === id.toString())){
                localStorage.setItem(type + "_favorito_" + inmobiliaria ,"")
                var array_new = (array_storage.filter(element => element != id.toString()))
                for (let index = 0; index < array_new.length; index++) {
                    localStorage.setItem(type + "_favorito_" + inmobiliaria , (localStorage.getItem(type + "_favorito_" + inmobiliaria )  + array_new[index] + "-"))
                }
                return null
            }
            else{
                localStorage.setItem(type + "_favorito_" + inmobiliaria , (localStorage.getItem(type + "_favorito_" + inmobiliaria ) +  id + "-"))
            }
      }
      else{
          localStorage.setItem(type + "_favorito_" + inmobiliaria , id + "-")
      }
        return null
    }
    
    //Función para checkear un favorito
    export const checkFavorite = (id,type,inmobiliaria) => {
      var storage = localStorage.getItem(type + "_favorito_" + inmobiliaria ).split("-") // Recupero los ids
      storage = storage.filter(element => element !== "") // Elimino si hay algun espacio vacio
      if(storage.find(element => element.toString() === id.toString())){
        return true;
      }
      return false
    }
    
    //Funcion para traer todos los favoritos
    export const getfavorites = (type,inmobiliaria) => {
      var storage = localStorage.getItem(type + "_favorito_" + inmobiliaria ).split("-") // Recupero los ids
      storage = storage.filter(element => element !== "") // Elimino si hay algun espacio vacio
      return storage //Retorno array de ids
    }
    
    //Función para checkear los estados de cada filtro
    export const checkListTags = (setFilters,filters,filter,value) => { 
        switch(filter){
            case 'location' :{
                if (filters.location.find(element => element.name.toString().toLowerCase() == value.toString().toLowerCase())){
                    return true;
                }
                return false
            }
            case 'type' :{
                if (filters.type.find(element => element.name.toString().toLowerCase() == value.toString().toLowerCase())){
                    return true;
                }
                return false
            }
            case 'operation' : {
                if(filters.operation.toLowerCase() === value.toLowerCase()){
                    return true
                }
                return false
            }
            case 'price-type' : {
                if (filters.price.type.toLowerCase().includes(value.toLowerCase())){
                    return true
                }
                return false          
            }
            case 'surface-type' : {
                if (filters.surface.type.toLowerCase() === (value.toLowerCase())){
                    return true
                }
                return false;
            }
            case 'environments' : {
                if(filters.environments.find(element => element.toLowerCase() == value.toLowerCase())){
                    return true
                }
                return false
            }
            case 'environments_types' : {
                if (filters.environments_types.find(element => element.name.toString().toLowerCase() === value.name.toString().toLowerCase())){
                    return true;
                }
                return false
            }
            case 'generals' : {
                if (filters.generals.find(element => element.name.toString().toLowerCase() == value.name.toString().toLowerCase())){
                    return true;
                }
                return false
            }
            case 'services' : {
                if (filters.services.find(element => element.name.toString().toLowerCase() == value.name.toString().toLowerCase())){
                    return true
                }
                    return false
            }
            case 'specials' : {
                if (filters.specials.find(element => element == value)){
                    return true
                }
                            return false
            }
        }
    }
    
    //Función para actualizar la ruta según los filtros
    export const updateRouter = (filters,short_name) => {
          // los guiones son los espacios en las palabras, cada variables se separa con una coma ","
        //   var router = "/" +  filters.operation.toLowerCase()
            var router = "/clientes/" + short_name + "/" +  filters.operation.toLowerCase()
          if(filters.type != ''){
                  router +=  '/';
                  for (let index = 0; index < filters.type.length; index++) {
                      router +=  filters.type[index].name.toString().toLowerCase().replace(" ","-");
                      if(index < filters.type.length - 1){ router += ',' }
                  } 
          }
          if(filters.location != ''){ 
                  router +=  '/';
                  for (let index = 0; index < filters.location.length; index++) {
                          router +=  filters.location[index].name.toLowerCase().replace(/ /g,"-");
                          if(index < filters.location.length - 1){ router += ',' }
                  } 
          }
          if(filters.price.type || filters.price.minPrice || filters.price.maxPrice){
                  router +=  '/';
                  if(filters.price.type){router+= '' + filters.price.type.toLowerCase() + '-'}
                  if(filters.price.type){router+= 'desde-' + filters.price.priceMin + '-'}
                  if(filters.price.type){router+= 'hasta-' + filters.price.priceMax + '-'}
                  // Borro si hay algún guón de más
                  if(router[router.length-1] == '-'){
                          router = router.substring(0,router.length - 1);
                  }
          }
          if(filters.surface.type || filters.surface.surfaceMin || filters.surface.surfaceMax){
                  router +=  '/';
                  if(filters.surface.type){router+= '' + filters.surface.type.toLowerCase() + '-'}
                  if(filters.surface.type){router+= 'desde-' + filters.surface.surfaceMin + '-'}
                  if(filters.surface.type){router+= 'hasta-' + filters.surface.surfaceMax + '-'}
                  // Borro si hay algún guón de más
                  if(router[router.length-1] == '-'){
                          router = router.substring(0,router.length - 1);
                  }
          }
          if(filters.environments != ''){
                  router +=  '/';
                  for (let index = 0; index < filters.environments.length; index++) {
                          router +=  filters.environments[index].toLowerCase().replace(" ","-");
                          if(index < filters.environments.length - 1){ router += ',' }
                  } 
          }
          if(filters.environments_types != ''){
                  router +=  '/';
                  for (let index = 0; index < filters.environments_types.length; index++) {
                          router +=  filters.environments_types[index].name.toLowerCase().replace(/ /g,"-");
                          if(index < filters.environments_types.length - 1){ router += ',' }
                  } 
          }
          if(filters.generals != '' || filters.services != '' || filters.specials != ''){
                  // router +=  '/';
                  //Agrego generales,services,specials separados por comas
                  for (let index = 0; index < filters.generals.length; index++) {
                          router +=  filters.generals[index].name.toLowerCase().replace(/ /g,"-");
                          router += ','
                  }
                  for (let index = 0; index < filters.services.length; index++) {
                          router +=  filters.services[index].name.toLowerCase().replace(/ /g,"-");
                          router += ','
                  } 
                  for (let index = 0; index < filters.specials.length; index++) {
                          router +=  filters.specials[index].name.toLowerCase().replace(/ /g,"-");
                          router += ','
                  }
          }
          // Borro si hay alguna coma de más
  
          if(router[router.length-1] == ',' || router[router.length-1] == '/'){
                        router = router.substring(0,router.length - 1);
          }
          
          router = router.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
        //   history.pushState(null,'',router) CODIGO COMENTADO POR ERROR
    }
    
    //Funcion para leer la ruta y cargar los filtros de la URL
    export const loadFiltersRoute = (location,setFilters,data,setFiltersLoading) => {
        for (const values of location) { // Obtengo las rutas separadas por " / "
            var iteratorGroup = values.split(",")   // Separo esos valores en " , "
            for (const iteratorSingle  of iteratorGroup) {
                var iteratorValue = iteratorSingle.replace(/-/g," "); // Parcheo los espacios que le puse para pasarlos por url
                if(iteratorValue.toLowerCase().includes("ventas") || iteratorValue.toLowerCase().includes("alquileres") || iteratorValue.toLowerCase().includes("alquileres-temporales")){ // Consulto si alguno de los valores de la ruta coincide con un tipo de operación
                    setFilters((filters) => ({
                        ...filters,
                        operation:iteratorValue
                    }))
                }
                if(iteratorValue.toLowerCase().includes("pesos") || iteratorValue.toLowerCase().includes("dolares")){ // Consulto si alguno de los valores de la ruta coincide con un tipo de operación
                    const splitIterator = (iteratorValue.split(" "))
                    setFilters((filters) => ({
                        ...filters,
                        price:{...filters.price,
                            type:splitIterator[0]
                        }
                    }))
                    if(splitIterator[2] > 0){
                        setFilters((filters) => ({
                            ...filters,
                            price:{...filters.price,
                                priceMin:splitIterator[2]
                            }
                        }))
                    }
                    if(splitIterator[4] > 0){
                        setFilters((filters) => ({
                            ...filters,
                            price:{...filters.price,
                                priceMax:splitIterator[4]
                            }
                        }))
                    }
                }
                if(iteratorValue.toLowerCase().includes("total") || iteratorValue.toLowerCase().includes("cubierta")){ // Consulto si alguno de los valores de la ruta coincide con un tipo de operación
                    const splitIterator = (iteratorValue.split(" "))
                    setFilters((filters) => ({
                        ...filters,
                        surface:{...filters.surface,
                            type:splitIterator[0]
                        }
                    }))
                    if(splitIterator[2] > 0){
                        setFilters((filters) => ({
                            ...filters,
                            surface:{...filters.surface,
                                surfaceMin:splitIterator[2]
                            }
                        }))
                    }
                    if(splitIterator[4] > 0){
                        setFilters((filters) => ({
                            ...filters,
                            surface:{...filters.surface,
                                surfaceMax:splitIterator[4]
                            }
                        }))
                    }
                }
                if(iteratorValue.toLowerCase().includes('monoambiente') || iteratorValue.toLowerCase().includes('2 ambientes') || iteratorValue.toLowerCase().includes('3 ambientes') || iteratorValue.toLowerCase().includes('4 ambientes')){ // Los que en minusculas que coinciden los agrego
                    setFilters((filters) => ({
                        ...filters,
                        environments:[...filters.environments,iteratorValue]
                    }))
                }
                for (const types of data.objects.property_types) { // Comparo los valores de la ruta con los valores existentes en los filtros de esta API_KEY en TOKKO (types)
                    if(iteratorValue.toLowerCase() === (types.type.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))){ // Los en minusculas que coinciden los agrego
                        setFilters((filters) => ({
                            ...filters,
                            type:[...filters.type,{id:types.id,name:types.type}]
                        }))
                    }
                }
                for (const locations of data.objects.locations) { // Comparo los valores de la ruta con los valores existentes en los filtros de esta API_KEY en TOKKO (locations)  
                    if(iteratorValue.toLowerCase() === (locations.location_name.toLowerCase())){ // Los que en minusculas que coinciden los agrego
                        setFilters((filters) => ({
                            ...filters,
                            location:[...filters.location,{id:locations.location_id,name:locations.location_name}]
                        }))                    }
                }
                for (const tags of data.objects.tags) { // Comparo los valores de la ruta con los valores existentes en los filtros de esta API_KEY en TOKKO (locations)
                    if(iteratorValue.toLowerCase() === (tags.tag_name.toLowerCase() && tags.tag_name.toLowerCase() !== 'local' && tags.tag_name.toLowerCase() !== 'galpon')){ // Los que en minusculas que coinciden los agrego
                        switch(tags.tag_type){
                            case 1:{
                                setFilters((filters) => ({
                                        ...filters,
                                        services:[...filters.services,{id:tags.tag_id,name:tags.tag_name}]
                                 }))
                                 break;
                            }
                            case 2:{
                                setFilters((filters) => ({
                                    ...filters,
                                    environments_types:[...filters.environments_types,{id:tags.tag_id,name:tags.tag_name}]
                                }))
                                break;
                            }
                            case 3:{
                                setFilters((filters) => ({
                                        ...filters,
                                        generals:[...filters.generals,{id:tags.tag_id,name:tags.tag_name}]
                                 }))
                                 break;
                            }
                        }
                    }
                }
            }
        }
        setFiltersLoading(false)
    }  
    
    //Función para actualizar el listado de filtros
    export const updateFilters = (setFilters,filters,filter,value,params = {}) => {
    
      const {arsMax,usdMax,totMax,cubMax} = params;
      switch(filter){
          case 'location' :{
              if (filters.location.find(element => element.id == value.id)){
                  const newLocations = filters.location.filter(element => element.id !== value.id);
                  setFilters((filters) => ({
                      ...filters,
                      location:newLocations
                  }))
                  break
              }
              else{
                  setFilters((filters) => ({
                      ...filters,
                      location: [...filters.location, value]
                  }))
                  break;
              }
          }
          case 'type' :{
              if (filters.type.find(element => element.id == value.id)){
                  const newTypes = filters.type.filter(element => element.id !== value.id);
                  setFilters((filters) => ({
                      ...filters,
                      type:newTypes
                  }))
                  break
              }
              else{
                  setFilters((filters) => ({
                      ...filters,
                      type: [...filters.type, value]
                  }))
                  break;
              }
          }
          case 'operation' : {
              setFilters((filters) => ({
                  ...filters,
                  operation:value
              }))
              break;
          }
          case 'price-type' : {
              if(value.toLowerCase() === 'dolares' || value.toLowerCase() === 'pesos'){
                  if(value == filters.price.type){
                      setFilters((filters) => ({
                          ...filters,
                          price:{...filters.price,
                              type:''
                          }
                      }))
                      break;
                  }
                  setFilters((filters) => ({
                      ...filters,
                      price:{...filters.price,
                          type:value
                      }
                  }))
                  break;
              }
          }
          case 'price-min' : {
              setFilters((filters) => ({
                  ...filters,
                  price:{...filters.price,
                      priceMin:value
                  }
              }))
              break;
          }
          case 'price-max' : {
              if(value == 200000 && filters.price.priceMax == value){
                  setFilters((filters) => ({
                      ...filters,
                      price:{...filters.price,
                          priceMax:5000000
                      }
                  }))
                  break;
              }
              setFilters((filters) => ({
                  ...filters,
                  price:{...filters.price,
                      priceMax:value
                  }
              }))
              break;
          }
          case 'price' : {
              var priceDefaultMax = 0;
              if(filters.price.type.toLowerCase() == 'dolares'){
                  priceDefaultMax = usdMax;
              }
              else{
                  priceDefaultMax = arsMax;
              }
              setFilters((filters) => ({
                  ...filters,
                  price:{...filters.price,
                      priceMax:priceDefaultMax,
                      priceMin:0
                  }
              }))
              break;
          }
          case 'surface-type' : {
              if(value.toLowerCase() == 'total' || value.toLowerCase() == 'cubierta'){
                  if(value.toLowerCase() == filters.surface.type.toLowerCase()){
                      setFilters((filters) => ({
                          ...filters,
                          surface:{...filters.surface,
                              type:''
                          }
                      }))
                      break;
                  }
                  setFilters((filters) => ({
                      ...filters,
                      surface:{...filters.surface,
                          type:value
                      }
                  }))
                  break;
              }
              setFilters((filters) => ({
                  ...filters,
                  surface:{...filters.surface,
                      type:value
                  }
              }))
              break;
          }
          case 'surface-min' : {
              setFilters((filters) => ({
                  ...filters,
                  surface:{...filters.surface,
                      surfaceMin:value
                  }
              }))
              break;
          }
          case 'surface-max' : {
              setFilters((filters) => ({
                  ...filters,
                  surface:{...filters.surface,
                      surfaceMax:value
                  }
              }))
              break;
          }
          case 'surface' : {
              var surfaceDefaultMax = 0;
              if(filters.surface.type.toLowerCase() == 'total'){
                  surfaceDefaultMax = totMax;
              }
              else{
                  surfaceDefaultMax = cubMax;
              }
              setFilters((filters) => ({
                  ...filters,
                  surface:{...filters.surface,
                      surfaceMax:'',
                      surfaceMin:''
                  }
              }))
              break;
          }
          case 'environments' : {
              if (filters.environments.find(element => element == value)){
                //   const newEnvironments = filters.environments.filter(element => element !== value);
                  setFilters((filters) => ({
                      ...filters,
                      environments:[]
                  }))
                  break
              }
              else{
                  setFilters((filters) => ({
                      ...filters,
                      environments: [value]
                  }))
                  break;
              }
          }
          case 'environments_types' : {
              if (filters.environments_types.find(element => element.id == value.id)){
                  const newEnvironments = filters.environments_types.filter(element => element.id !== value.id);
                  setFilters((filters) => ({
                      ...filters,
                      environments_types:newEnvironments
                  }))
                  break
              }
              else{
                  setFilters((filters) => ({
                      ...filters,
                      environments_types: [...filters.environments_types, value]
                  }))
                  break;
              }
          }
          case 'generals' : {
              if (filters.generals.find(element => element.id == value.id)){
                  const newGenerals = filters.generals.filter(element => element.id !== value.id);
                  setFilters((filters) => ({
                      ...filters,
                      generals:newGenerals
                  }))
                  break
              }
              else{
                  setFilters((filters) => ({
                      ...filters,
                      generals: [...filters.generals, value]
                  }))
                  break;
              }
          }
          case 'services' : {
              if (filters.services.find(element => element.id == value.id)){
                  const newServices = filters.services.filter(element => element.id !== value.id);
                  setFilters((filters) => ({
                      ...filters,
                      services:newServices
                  }))
                  break
              }
              else{
                  setFilters((filters) => ({
                      ...filters,
                      services: [...filters.services, value]
                  }))
                  break;
              }
          }
          case 'specials' : {
              if (filters.specials.find(element => element == value)){
                  const newSpecials = filters.specials.filter(element => element !== value);
                  setFilters((filters) => ({
                      ...filters,
                      specials:newSpecials
                  }))
                  break
              }
              else{
                  setFilters((filters) => ({
                      ...filters,
                      specials: [...filters.specials, value]
                  }))
                  break;
              }
          }
      }
    }
    
  
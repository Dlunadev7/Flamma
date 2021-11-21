export const getFeatured =  (data) => {
    return data.objects.filter(element => element.is_starred_on_web === true)
}

export const shortLocation = (full_location,position) => {
    var split = full_location.split("|")
    return split[position]
}

export const getVideo = (videos) => {
  if(videos.length === 0) return null
  return videos[videos.length - 1];
}

export const shortFull_Location = (full_location) => {
    var split = full_location.split("|");
    return split[2] + "| " + split[1];
  }

export const getPricesUnityPrice = (unity_development) => {
    var valueUnity = [];
    for (const iterator of unity_development.objects) {
      valueUnity.push(iterator.operations[0].prices[0].price);
    }
    return [Math.min.apply(null, valueUnity), Math.max.apply(null, valueUnity)];
  }

export const get_short_desc = (description,max_caracters) => {
    if (description.length > max_caracters) {
      return description.slice(0, max_caracters) + '...';
    }
    return description;
};

export const get_cover = (photos) => {
  return photos.find(element => element.is_front_cover) ? photos.find(element => element.is_front_cover) : photos[0] ? photos[0] : 'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1';
}

export const get_shortDescription = (description) => {
  // if(description.length === 0){return ''}
  const spliter = description.split('.');
  var res = {
    title:'',
    description:'',
    photos:[
      '',
      '',
      '',
    ]
  }
  var offset = 0
  for (let i = 0; i < spliter.length; i++) {
      if(res.title.length <= 140)
        res.title += spliter[i] + "."
      if(res.description.length <= 200)
      {
        res.description += spliter[i] + "."
        offset++;
      }
      
    }
    for (let j = 0; j < 3; j++){
      for (let i = 0; i < spliter.length; i++) {
        if(res.photos[j].length <= 140 && i>offset){
          res.photos[j] += spliter[i] 
          offset++;
        }
      }
    }
  return res;
}

export const getGroup_CustomTag = (customTags,groupName) => {
  return customTags.find(element => element.group_name === groupName);
}

export const group_Unities = (data) => {
  console.log(data);
  const array = [
  ];
  for (let i = 0; i < data.length; i++) {
    // Armo la nueva unidad en un objeto, separo piso de la unidad en el titulo
    if(data[i].id === 447053){console.log(data[i])}
    if(data[i].id !== 741886){
      const object = {
        //.operations[0].operation_type
        //.id
        //.unroofed_surface
        //.status
          // 1- Tasacion
          // 2- Disponible
          // 3- Reservado
          // 4- No disponible
        //.type.name
        //.location.name
        floor: data[i].real_address.split("-")[0],
        unity: {
          address:data[i].real_address.split("- ")[1],
          id:data[i].id,
          status:data[i].status,
          type:data[i].type.name,
          location:data[i].location.name,
          surface:data[i].roofed_surface,
          rooms:data[i].room_amount,
          operation:data[i].operations[0].operation_type
        }
      }
      // // Verifico si existe el piso o lo tengo que crear
      const finder = array.find(element => element.floor === object.floor)
      if(array.find(element => element.floor === object.floor)){
        finder.unities.push(object.unity)
      }
      else{
        array.push({
          floor:object.floor,
          unities:[object.unity]
        })
      }
    }
  }

  let pisos = []
  let subsuelos = []
  let nivel = []
  let duplex = []


  let response= [];
  
  for (const iterator of array) {
    if(iterator.floor.split(" ")[0].toLowerCase().includes("piso")){
      if(iterator.floor.includes("PB")){
        pisos.unshift(iterator);
      }
      else{
        pisos.push(iterator);
      }

    }
    if(iterator.floor.split(" ")[0].toLowerCase().includes("subsuelo")){
      subsuelos.push(iterator);
    }
    if(iterator.floor.split(" ")[0].toLowerCase().includes("nivel")){
      nivel.push(iterator);
    }
    if(iterator.floor.split(" ")[0].toLowerCase().includes("dúplex")){
      duplex.push(iterator);
    }
  }
  pisos = pisos.sort(function(a, b){return a.floor.split(" ")[1] - b.floor.split(" ")[1]})
  subsuelos = subsuelos.sort(function(a, b){return a.floor.split(" ")[1] - b.floor.split(" ")[1]})
  duplex = duplex.sort(function(a, b){return a.floor.split(" ")[1] - b.floor.split(" ")[1]})

  for (const iterator of subsuelos) {
    response.push(iterator);
  }
  for (const iterator of nivel) {
    response.push(iterator);
  }
  for (const iterator of pisos) {
    response.push(iterator);
  }
  for (const iterator of duplex) {
    response.push(iterator);
  }
  console.log(response)
  return response;
  // return array.sort(function(a, b){return a.floor - b.floor});
}
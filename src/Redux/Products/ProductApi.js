import axios from "axios"


export const getPostsApi = async() => {
   
    let res = await axios.get(`https://digital-express.vercel.app/cameras`)
    return res.data;
}

export const getPostsApiTelevision = async() => {
  
    let res = await axios.get(`https://digital-express.vercel.app/televisions`)
    return res.data;
}

export const getPostsApiMobile = async() => {
   
    let res = await axios.get(`https://digital-express.vercel.app/mobilesandtablets`)
    return res.data;
}

export const getPostsApiHeadphone = async() => {
  
    let res = await axios.get(`https://digital-express.vercel.app/headphones`)
    return res.data;
}

export const getPostsApiHome = async() => {

    let res = await axios.get(`https://digital-express.vercel.app/homeappliances`)
    return res.data;
}

export const getPostsApiComputer = async() => {
    
    let res = await axios.get(`https://digital-express.vercel.app/computers`)
    return res.data;
}


export const getPostsApiKitchen = async() => {

    let res = await axios.get(`https://digital-express.vercel.app/kitchen`)
    return res.data;
}

export const getPostsApiPersonal = async() => {
    
    let res = await axios.get(`https://digital-express.vercel.app//personalcare`)
    return res.data;
}

export const getPersonalApi = async(name,id) => {
    
    let res = await axios.get(`https://digital-express.vercel.app/${name}/${id}`)
    return res.data;
}
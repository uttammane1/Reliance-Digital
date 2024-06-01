import {GET_POSTS_ERROR,GET_POSTS_LOADING,GET_POSTS_SUCCESS} from "./Product.types"
import { getPersonalApi, getPostsApi, getPostsApiComputer, getPostsApiHeadphone, getPostsApiHome, getPostsApiKitchen, getPostsApiMobile, getPostsApiPersonal, getPostsApiTelevision } from "./ProductApi"
export const getPosts=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApi()
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}
export const getPostsTelevisions=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApiTelevision()
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}

export const getPostsMobile=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApiMobile()
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}

export const getPostsHeadPhone=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApiHeadphone()
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}

export const getPostsHome=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApiHome()
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}

export const getPostsComputer=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApiComputer()
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}

export const getPostsKitchen=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApiKitchen()
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}

export const getPostsPersonal=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApiPersonal()
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}

export const getPersonalPost=(name,id)=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPersonalApi(name,id)
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}
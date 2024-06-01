
import {GET_POSTS_ERROR,GET_POSTS_LOADING,GET_POSTS_RESET,GET_POSTS_SUCCESS} from "./Product.types"

let initState = {
    loading:false,
    error:false,
    data:[]
};

export const postReducer = (state=initState,{payload,type})=>{
switch(type){

    case GET_POSTS_LOADING : {
        return {
...state,
loading:true
        }
    }
case GET_POSTS_ERROR : {
return {
    ...state,
    loading:false,
    error:true
}
}
case GET_POSTS_SUCCESS : {
    return {
        ...state,
        loading:false,
        data:payload
    }
    }
    case GET_POSTS_RESET : {
        return { ...initState }
        }

    default : {
        return state;
    }
}
}


//bm
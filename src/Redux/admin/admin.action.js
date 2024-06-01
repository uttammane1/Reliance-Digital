import { DELETE_ADMIN_ERROR, DELETE_ADMIN_LOADING, DELETE_ADMIN_SUCCESS, GET_ADMIN_ERROR, GET_ADMIN_LOADING, GET_ADMIN_SUCCESS } from "./admin.actionTypes";

import axios from "axios"
export const getAdminProducts = () => async(dispatch) => {
    dispatch({
        type : GET_ADMIN_LOADING,
    })
    try{
        let response = await axios.get(`https://digital-express.vercel.app/computers`);
        dispatch({
            type : GET_ADMIN_SUCCESS,
            payload : response.data,
        })
    }
    catch(e){
        dispatch({
            type : GET_ADMIN_ERROR,
            payload : e,
        })
    }
}

export const deleteAdminProducts = (id) => async(dispatch) => {
    dispatch({
        type : DELETE_ADMIN_LOADING,
    })
    try{
        let response = await axios.delete(`https://digital-express.vercel.app/computers/${id}`);
        dispatch({
            type: DELETE_ADMIN_SUCCESS,
            payload : id,
        })
    }
    catch(e){
        dispatch({
            type : DELETE_ADMIN_ERROR,
            payload : e,
        })
    }
}
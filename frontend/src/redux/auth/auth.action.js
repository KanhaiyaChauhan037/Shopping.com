import { Box, useToast } from "@chakra-ui/react"
import axios from "axios"
import { site } from "../../components/backend"
import {ERRORMSG, LOGIN, LOGOUT, } from "./auth.type"


export const register = (creeds) => async(dispatch)=>{
    try{
    const res = await axios.post(`${site}/users/signin`,creeds)
    alert(res.data)
    console.log(res)
    }
    catch(err){
        alert(err.response.data)
    }
}

export const login = (creeds) =>async(dispatch)=>{
    try{
        const res = await axios.post(`${site}/users/login`,creeds)
        console.log(res)
        return dispatch({type : LOGIN ,payload : res.data})
    }
    catch(err){
        console.log(err.response.data)
        alert(err.response.data)
        // alert("hello")
    }
}

export const logout = ()=>async(dispatch)=>{
    try{
        return dispatch({type : LOGOUT})
    }catch(err){
        console.log(err)
    }
}
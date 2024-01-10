import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

export const addemployee = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/employee`,reqBody)
 }


 export const getemp=async()=>{
    return await commonAPI("GET",`${serverURL}/employee`,"")
 }

 export const deleteemp=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/employee/${id}`,{})
 }
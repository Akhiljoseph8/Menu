import { commonApi } from "./commonApi";
import base_url from "./server_url";



export const addMenu = async (data, header) => {
    return await commonApi("POST", `${base_url}/add-menu`, data, header)
}


export const getMenu = async () => {
    return await commonApi("GET", `${base_url}/get-menu`, "", "")
}



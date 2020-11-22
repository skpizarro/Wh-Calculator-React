import axios from "axios"
import { IServiceReport } from "./IServiceReport"

const API = 'http://localhost:3000/api'

export const createServiceReport = async (serviceReport:IServiceReport) =>{

    return await axios.post(`${API}/services/report`,serviceReport);
}
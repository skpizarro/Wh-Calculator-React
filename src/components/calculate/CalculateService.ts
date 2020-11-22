import axios from "axios"
import { ICalculate } from "./ICalculate"


const API = 'http://localhost:3000/api';

export const getWorkHours = async(c:ICalculate)=>{
    return await axios.get(`${API}/calculate/?idTechnician=${c.idTechnician}&weekNumber=${c.weekNumber}`)
}

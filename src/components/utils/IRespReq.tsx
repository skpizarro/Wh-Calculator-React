import  {IErrorResponse}  from "../Errors/IErrorResponse";
import { IWorkHours } from "../workHours/IWorkHours";


export interface IRespReq{
    errorReq?:IErrorResponse,
    dataReq?:IWorkHours
}
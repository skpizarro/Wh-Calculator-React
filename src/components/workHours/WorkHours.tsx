import React from 'react';
import { IWorkHours } from './IWorkHours';

interface Props{
    workHours:IWorkHours
}

export const WorkHours = ({workHours}:Props)=>{

    return(
        <div className="card text-center bg-primary mt-2">
            <div className="card-header">
                <h3 className="text-white">Total Hours</h3>
            </div>
            <div className="card-body">
                <p className="text-white">Week Hours: {workHours.weekH}</p>
                <p className="text-white">Normal Hours: {workHours.normalH}</p>
                <p className="text-white">Night Hours: {workHours.nightH}</p>
                <p className="text-white">Sunday Hours: {workHours.sundayH}</p>
                <p className="text-white">Extra Hours: {workHours.normalExtraH}</p>
                <p className="text-white">Night Extra Hours :{workHours.nightExtraH}</p>
                <p className="text-white">Sunday Extra Hours :{workHours.sundayExtraH}</p>
            </div>
        </div>
    )

}
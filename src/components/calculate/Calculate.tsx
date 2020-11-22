import React, { ChangeEvent,useState } from 'react';
import { WorkHours } from '../workHours/WorkHours';
import { ICalculate } from './ICalculate';
import useCalculateHours from './useCalculateHours';

const Calculate = ()=>{

    const initialState: ICalculate = ({
        idTechnician:'',
        weekNumber:''
    });

    let workHours =null;

    const [calculate,setCalculate] = useState<ICalculate>(initialState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setCalculate({...calculate, [e.target.name]: e.target.value})
    }

    const {register,onSubmit,errors,respReq} = useCalculateHours(setCalculate,initialState);

    return(
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3>Calculate</h3>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="idTechnician"
                                    className="form-control" 
                                    placeholder="Ingrese la identificación del técnico"
                                    onChange={handleInputChange}
                                    value={calculate.idTechnician}
                                    ref={register}
                                    />
                                    <p className="text-danger">{errors.idTechnician?.message}</p>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="weekNumber"
                                    className="form-control" 
                                    placeholder="Ingrese el número de la semana"
                                    onChange={handleInputChange}
                                    value={calculate.weekNumber}
                                    ref={register}
                                    />
                                    <p className="text-danger">{errors.weekNumber?.message}</p>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary" >Calculate</button>
                            </div>
                        </form>
                        <hr/>

                            <p className="text-danger">{respReq?.errorReq?.message}</p>
                            {(respReq?.dataReq)?<WorkHours workHours={respReq.dataReq}/>:null}
                        
                    </div>
                </div>
            </div>
            {(workHours!=null)? <p>Holaaa</p>:null}

        </div>
    )
}

export default Calculate;
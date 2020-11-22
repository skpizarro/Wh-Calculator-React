import React,{ChangeEvent, useState} from 'react';
import { IServiceReport } from './IServiceReport';
import useServiceReportForm from './useServiceReportForm'

const ServiceReport = ()=>{

    


    const initialState ={
        idService:'',
        idTechnician:'',
        startService: '',
        endService: ''
    }

    
    const [serviceReport, setServiceReport] = useState<IServiceReport>(initialState);


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setServiceReport({...serviceReport, [e.target.name]: e.target.value})
    }

    const {register,onSubmit,errors,respReq} = useServiceReportForm(setServiceReport,initialState);// utilizamos el hook personalizado
    

    return(
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3>Service Report</h3>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="idTechnician"
                                    placeholder="Ingrese la identificación del técnico"
                                    className="form-control" 
                                    onChange= {handleInputChange}
                                    value={serviceReport.idTechnician}
                                    ref={register}
                                    autoFocus/>
                                <p className="text-danger">{errors.idTechnician?.message}</p>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="idService"
                                    placeholder="Ingrese la identificación del servicio"
                                    className="form-control"
                                    onChange= {handleInputChange}
                                    value={serviceReport.idService}
                                    ref={register}
                                    />
                                <p className="text-danger">{errors.idService?.message}</p>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="datetime-local"
                                    name="startService"
                                    className="form-control"
                                    onChange= {handleInputChange}
                                    value={serviceReport.startService}
                                    ref={register}
                                    />
                                <p className="text-danger">{errors.startService?.message}</p>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="datetime-local"
                                    name="endService"
                                    className="form-control"
                                    onChange= {handleInputChange}
                                    value={serviceReport.endService}
                                    ref={register}
                                    />
                                <p className="text-danger">{errors.endService?.message}</p>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Generate Report</button>
                            </div>
                            
                            <hr/>
                            <p className="text-danger">{(respReq.error==="")? null:respReq.message}</p>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceReport;
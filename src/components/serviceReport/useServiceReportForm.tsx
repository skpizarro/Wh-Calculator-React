//Hook personalizado, para separar la lógica del formulario

import React,{useCallback, useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import { IServiceReport } from './IServiceReport';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createServiceReport } from './ServiceReportService';
import { toast } from 'react-toastify';
import {IErrorResponse} from '../Errors/IErrorResponse';



const useServiceReportForm =(setServiceReport: React.Dispatch<React.SetStateAction<IServiceReport>>,initialState:IServiceReport)=>{

    const initialErrorState:IErrorResponse = {
        error: "",
        message: "",
        path: "",
        status: 0,
        timestamp:"",
        trace:""
    }

     const [state, setState] = useState<IErrorResponse>(initialErrorState);


    const validationSchema = useMemo(()=>(
        yup.object().shape({
            idTechnician: yup.string().required('La identificación del técnico es obligatoria'),
            idService: yup.string().required('La identificación del servicio es obligatoria'),
            startService: yup.string().required('La fecha de inicio del servicio es obligatoria')
            .test({
                name:'start-end-date-validation',
                message:'La fehca de inicio del servicio no debe ser mayor o igual que la fecha fin del servicio',
                test:(function (){
                    const {startService,endService} = this.parent;
                    const sS = new Date(startService),
                        eS = new Date(endService);

                    if(sS >= eS){
                        return false;
                    }
                    return true;
                })
            }),
            endService: yup.string().required('La fecha fin del servicio es obligatoria')
                      
        })
    ),[]);



    const {register,handleSubmit,errors} = useForm<IServiceReport>({
        resolver: yupResolver(validationSchema)
    });

    const handleAPIRequest = async (serviceReport:IServiceReport)=>{
        console.log(serviceReport);
        
        try{
            const resp = await createServiceReport(serviceReport); // Enviamos los datos al Servidor
            console.log("Respuesta Server: "+resp.data);
            toast.success('¡Nuevo servicio reportado!');
            setServiceReport(initialState);
            setState(resp.data);

        }catch(error){
            console.log(error.response);
            toast.error('¡Rayos! Ocurrió un problema en la solicitud');
            setState(error.response.data);
        }
    }
    
    const onSubmit = useCallback(
        (dataForm: IServiceReport) => {
            console.log("Datos Form: "+dataForm);
            handleAPIRequest(dataForm);
        },
        [])
    
    return{
        respReq:state,
        register,
        errors,
        onSubmit: handleSubmit(onSubmit)
    }
}

export default useServiceReportForm;
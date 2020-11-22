import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useMemo, useState } from "react";
import { ICalculate } from "./ICalculate";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { getWorkHours } from "../calculate/CalculateService";
import { toast } from "react-toastify";
import { IRespReq } from "../utils/IRespReq";

const useCalculateHours =(setCalcualte: React.Dispatch<React.SetStateAction<ICalculate>>,initialState:ICalculate)=>{


    const [state, setState] = useState<IRespReq>(); // Puede recibir un error o el calculo de las horas


    const validationSchema = useMemo(()=>(
        yup.object().shape({
            idTechnician: yup.string().required('La identificación del técnico es obligatoria'),
            weekNumber: yup.string().required('El número de la semana del año es obligatorio')
            .test({
                name:'weekNumber-validation',
                message:'Debe de ser un número entero',
                test:(function (){
                    const {weekNumber} = this.parent;
                    if(isNaN(parseInt(weekNumber))){
                        return false;
                    }
                    return true;
                })
            }),
            
                      
        })
    ),[]);



    const {register,handleSubmit,errors} = useForm<ICalculate>({
        resolver: yupResolver(validationSchema)
    });

    const handleAPIRequest = async (calculate:ICalculate)=>{
        console.log(calculate);
        
        try{
            const resp = await getWorkHours(calculate); // Enviamos los datos al Servidor
            console.log("Respuesta Server: "+resp.data);
            toast.success('¡Cálculo de horas exitoso!');
            setState({dataReq:resp.data}) // se le manda los datos de las horas
            setCalcualte(initialState); //limpiamos

        }catch(error){
            console.log(error.response);
            toast.error('¡Rayos! Ocurrió un problema en la solicitud');
            setState({errorReq:error.response.data}); // se le manda el error
        }
    }
    
    const onSubmit = useCallback(
        (dataForm: ICalculate) => {
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

export default useCalculateHours;
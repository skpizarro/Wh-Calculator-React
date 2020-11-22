import React from 'react';

const Home = ()=>{
    return(

        <div className="jumbotron">
            <h1 className="display-3">Bienvenido</h1>
            
            <p className="lead">El primer módulo tiene como objetivo proporcionar a un técnico de IAS Handyman generar un reporte rápido de cada servicio atendido.</p>
            <hr className="my-4"/>
            <p className="lead">El segundo módulo se encarga de realizar los calculos de las horas trabajadas por un técnico según el número de la semana.</p>
            <hr className="my-4"/>
            <div className="text-center">
            <img className="img-fluid" src="https://image.freepik.com/free-vector/set-modern-workers-repairing-house_1262-19340.jpg" alt="Handyman"/>
            </div>
            
        </div>
    );
}

 export default Home;

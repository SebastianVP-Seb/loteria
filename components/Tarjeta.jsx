import TARJETAS from '../db/tarjetas';
import Tarjetas from './Tarjetas';

function Tarjeta() {

    let acumulador=[];
    
    for(let cont=1; cont<=24; cont++){
        const arregloTarjeta1=TARJETAS[Math.floor(Math.random()*TARJETAS.length)];
        acumulador=[...acumulador, arregloTarjeta1];
    };
    
    const listado=Array.from(new Set(acumulador));
    const variable=listado.slice(0,16);
        
    return (
        <div className='div-contenedor'>

            <Tarjetas variable={variable} />

        </div>
    );
};

export default Tarjeta;

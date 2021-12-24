import TARJETAS from '../db/tarjetas';
import Tarjetas from './Tarjetas';

function Tarjeta() {

    const arreglo=TARJETAS.sort(() => Math.random()-0.5);
    const variable=arreglo.slice(0,16);
        
    return (
        <div className='tarjeta-div'>
            <Tarjetas variable={variable} />
        </div>
    );
};

export default Tarjeta;

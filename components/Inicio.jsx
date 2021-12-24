import Button from 'react-bootstrap/Button';
import Tarjeta from './Tarjeta';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Inicio() {

    const handleClick=()=>{
        const resultado=document.querySelector('#input-1').value;
        console.log(resultado);

        resultado<=1 
            ? (toast.error('El número debe ser mayor a 1 (:'))
            : (toast('Tus tarjetas están siendo generadas (:'));

        return resultado;
    };
    
    return (
        <div>
            <div className="field">
                <label className="field-label">¿Cuántas tarjetas deseas generar?</label>
                <div className="field-input">
                    <input 
                        id='input-1'
                        name='numeroTarjetas'
                        className="input" type="number" placeholder="¿Más de una tarjeta?" />
                </div>
                <Button variant="outline-info" className='btn-jugar' 
                    onClick={()=>handleClick()}
                    >Jugar</Button>
                    <ToastContainer />

            
                {/* <div className="contenedor-tarjetas">

                </div> */}

            </div>
            <Tarjeta handleClick={handleClick}  />
        </div>
    );
};

export default Inicio;

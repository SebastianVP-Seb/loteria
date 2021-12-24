import Image from 'next/image';
import { useState } from 'react';

function CardLoteria({item}) {

    const [state, setState]=useState(false);

    const cambiarClase=()=>{
        setState(state=>!state);
    };

    return (
        <div className={`card-div ${state ? 'card-div-active' : ''} `} onClick={cambiarClase} >
            <Image src={item.imageUrl} width={180} height={200} alt='tarjeta' />
            <p className='card-parrafo'> {item.nombre} </p>
        </div>
    );
};

export default CardLoteria;

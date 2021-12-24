import CardLoteria from './CardLoteria';

function Tarjetas({variable}) {

    return (
        <div className='contenedor-tarjeta'>
            {
                variable.map(item=>{
                    return (
                        <div key={item.id}>
                            <CardLoteria item={item}/>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Tarjetas;

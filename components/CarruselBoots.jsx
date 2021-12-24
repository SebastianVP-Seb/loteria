import Carousel from 'react-bootstrap/Carousel';
import TARJETAS from '../db/tarjetas';

function CarruselBoots() {

    const nuevoArr=TARJETAS.sort(() => Math.random()-0.5);

    return (

        <div className="carusel-container-div">
            <div className='carusel-container'>
                <Carousel >
                    {
                        nuevoArr.map(item=> (
                            <Carousel.Item key={item.id} >
                                <img className='imagen-slide' src={item.imageUrl} alt="Tarjeta" />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default CarruselBoots;

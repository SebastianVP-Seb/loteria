import Carousel from 'react-bootstrap/Carousel';
import TARJETAS from '../db/tarjetas';

function CarruselBoots() {

    const nuevoArr=TARJETAS.sort(() => Math.random()-0.5);

    return (

        <div className="carusel">
            <div className='carusel-container'>
                <Carousel >
                    {
                        nuevoArr.map(item=> (
                            <Carousel.Item key={item.id} >
                                <img className='carusel-image' src={item.imageUrl} alt="Tarjeta" />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default CarruselBoots;

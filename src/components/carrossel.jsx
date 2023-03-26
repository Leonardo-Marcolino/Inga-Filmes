import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/img/banner/banner2.png';
import banner2 from '../assets/img/banner/banner1.webp';
import banner3 from '../assets/img/banner/banner3.jpg'
import style from './carrossel.module.css';


function Carrossel() {
  return (
    <div className={style.carrossel}>
    <Carousel fade>
      <Carousel.Item>
        <a href="#"><img
          className="d-block w-100"
          src={banner3}
          alt="First slide"
        /></a>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#"><img
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        /></a>

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#"><img
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        /></a>

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrossel;
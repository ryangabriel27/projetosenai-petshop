import "./slider.css";
import NukaCarousel from "nuka-carousel";
import carousel1 from './img/0.png'
import carousel2 from './img/1.png'
import carousel3 from './img/2.png'

export default function Slider() {

  return (
    <NukaCarousel cellAlign="center" slidesToShow={1} wrapAround autoplay withoutControls>
      <img src={carousel1} alt="Slide 1" />
      <img src={carousel2} alt="Slide 2" />
      <img src={carousel3} alt="Slide 3" />
    </NukaCarousel>
  );
}

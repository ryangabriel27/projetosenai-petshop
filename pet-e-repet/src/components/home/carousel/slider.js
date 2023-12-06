import "./slider.css";
import NukaCarousel from "nuka-carousel";

export default function Slider() {

  return (
    <NukaCarousel cellAlign="center" slidesToShow={1} wrapAround autoplay withoutControls>
      <img src="https://i.ibb.co/TkDrVKG/0.png" alt="Slide 1" />
      <img src="https://i.ibb.co/6st1fX1/1.png" alt="Slide 2" />
      <img src="https://i.ibb.co/8PYm8R5/2.png" alt="Slide 3" />
    </NukaCarousel>
  );
}

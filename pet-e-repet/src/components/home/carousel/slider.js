import "./slider.css";
import NukaCarousel from "nuka-carousel";

export default function Slider() {

  return (
    <NukaCarousel cellAlign="center" slidesToShow={1}>
      <img src="https://i.ibb.co/zfKzxkc/image.png" alt="Slide 1" />
      <img src="https://i.ibb.co/zfKzxkc/image.png" alt="Slide 2" />
      <img src="https://i.ibb.co/zfKzxkc/image.png" alt="Slide 3" />
    </NukaCarousel>
  );
}

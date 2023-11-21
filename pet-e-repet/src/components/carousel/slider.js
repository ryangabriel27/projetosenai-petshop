import "./slider.css";
import NukaCarousel from "nuka-carousel";

export default function Slider() {

  return (
    <NukaCarousel cellAlign="center" slidesToShow={1}>
      <img src="https://shreveportbossierkids.com/wp-content/uploads/2016/06/shreveport-kids-background.jpg" alt="Slide 1" />
      <img src="https://shreveportbossierkids.com/wp-content/uploads/2016/06/shreveport-kids-background.jpg" alt="Slide 2" />
      <img src="https://shreveportbossierkids.com/wp-content/uploads/2016/06/shreveport-kids-background.jpg" alt="Slide 3" />
    </NukaCarousel>
  );
}

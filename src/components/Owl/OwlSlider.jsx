/* eslint-disable react/prop-types */
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./OwlSlider.css"
export default function OwlSlider(props) {
    return (
      <OwlCarousel
        classNameName="owl-theme"
        loop
        autoPlay={true}
        nav
        center={true}
        autoWidth={true}
        margin={20}
      >
        {props.children}
      </OwlCarousel>
    );
}

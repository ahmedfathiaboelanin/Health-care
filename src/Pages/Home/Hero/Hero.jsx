/* eslint-disable no-unused-vars */
import "./Hero.css"
import robot from "../../../assets/images/Robotics-amico.png";
import { BsArrowRight } from "react-icons/bs";
import { BtnLink } from "../../../components/Buttons/Buttons";
export default function Hero() {
    return (
        <section className="hero justify-content-center justify-content-md-start">
            <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 270"
            >
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,256L120,213.3C240,171,480,85,720,90.7C960,96,1200,192,1320,240L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
            </svg>
            <h2 className="sm-title">Lorem ipsum dolor</h2>
            <h1 className="lg-title">Lorem ipsum dolor</h1>
            <p className="hero-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim
                provident modi architecto reprehenderit maxime nisi sapiente odio,
            </p>
            <BtnLink path="/">
                Check Our Services <BsArrowRight />
            </BtnLink>
            <img src={robot} alt="" className="img-fluid d-none d-md-block" />
        </section>
    );
}

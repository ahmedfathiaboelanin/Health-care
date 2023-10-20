import aboutImg from "../../../assets/images/about.jpg";
import { BsArrowRight } from "react-icons/bs";
import { BtnLink } from "../../../components/Buttons/Buttons";
import "./About.css"

export default function About() {
  return (
    <section className="p-5 about container">
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1240 200"
      >
        <path
          fill="#f3f1ed"
          fillOpacity="1"
          d="M0,256L120,213.3C240,171,480,85,720,90.7C960,96,1200,192,1320,240L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <h1 className="sec-title">Who Are We ?</h1>
      <div className="row align-items-center">
        <div className="col-md-6 col-12 my-1 p-3 img-col">
          <img src={aboutImg} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 col-12 my-1 px-2 text-col">
          <h2 className="text-uppercase about-title">
            What is <span>Dr . AI</span> ?
          </h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            magnam.
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            magnam.
          </p>
          <BtnLink path="/" class="secondary-bg">
            Learn more about our team
            <BsArrowRight />
          </BtnLink>
        </div>
      </div>
    </section>
  );
}

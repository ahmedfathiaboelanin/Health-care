import { FaUserDoctor } from "react-icons/fa6";
import { BtnLink } from "../../../components/Buttons/Buttons";
import "./Services.css"
export default function Services() {
  return (
    <section className="services container">
      <h1 className="sec-title">Our-Services</h1>
      <div className="service-cards">
        <div className="service-card">
          <div className="card-icon">
            <FaUserDoctor />
          </div>
          <h4>Service One</h4>
          <BtnLink path="/">Lets Go</BtnLink>
        </div>
        <div className="service-card">
          <div className="card-icon">
            <FaUserDoctor />
          </div>
          <h4>Service One</h4>
          <BtnLink path="/">Lets Go</BtnLink>
        </div>
        <div className="service-card">
          <div className="card-icon">
            <FaUserDoctor />
          </div>
          <h4>Service One</h4>
          <BtnLink path="/">Lets Go</BtnLink>
        </div>
        <div className="service-card">
          <div className="card-icon">
            <FaUserDoctor />
          </div>
          <h4>Service One</h4>
          <BtnLink path="/">Lets Go</BtnLink>
        </div>
        <div className="service-card">
          <div className="card-icon">
            <FaUserDoctor />
          </div>
          <h4>Service One</h4>
          <BtnLink path="/">Lets Go</BtnLink>
        </div>
      </div>
    </section>
  );
}

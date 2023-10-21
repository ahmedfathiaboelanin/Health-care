import About from "../Home/About/About";
import teamImg from "../../assets/images/AvatarMaker.png"
import OwlSlider from "../../components/Owl/OwlSlider";
import './AboutPage.css';


export default function AboutPage() {
    return (
        <main>
            <About />
            <section className="team">
                <h1 className="sec-title">Our Team</h1>
                <div className="slider-container p-0 p-md-5 container">
                    <OwlSlider>
                        <div className="member-card item">
                            <img src={teamImg} alt="" className="img-fluid member-img" />
                            <div className="member-details text-center">
                                <h3 className="member-name">
                                    Mohamed-Elmasry
                                </h3>
                                <h6 className="member-role text-center">
                                    Back-end
                                </h6>
                            </div>
                        </div>
                        <div className="member-card item">
                            <img src={teamImg} alt="" className="img-fluid member-img" />
                            <div className="member-details">
                                <h3 className="member-name">
                                    Bela El-arabawy
                                </h3>
                                <h6 className="member-role text-center">
                                    AI
                                </h6>
                            </div>
                        </div>
                        <div className="member-card item">
                            <img src={teamImg} alt="" className="img-fluid member-img" />
                            <div className="member-details">
                                <h3 className="member-name">
                                    Ibrahim El-Sheikh
                                </h3>
                                <h6 className="member-role text-center">
                                    AI
                                </h6>
                            </div>
                        </div>
                        <div className="member-card item">
                            <img src={teamImg} alt="" className="img-fluid member-img" />
                            <div className="member-details">
                                <h3 className="member-name">
                                    Mohaned-Mossad
                                </h3>
                                <h6 className="member-role text-center">
                                    Front-end
                                </h6>
                            </div>
                        </div>
                        <div className="member-card item">
                            <img src={teamImg} alt="" className="img-fluid member-img" />
                            <div className="member-details">
                                <h3 className="member-name">
                                    Yousef-Khamis
                                </h3>
                                <h6 className="member-role text-center">
                                    Front-end
                                </h6>
                            </div>
                        </div>
                        <div className="member-card item">
                            <img src={teamImg} alt="" className="img-fluid member-img" />
                            <div className="member-details">
                                <h3 className="member-name">
                                    Yousef-Hassan
                                </h3>
                                <h6 className="member-role text-center">
                                    Back-end
                                </h6>
                            </div>
                        </div>
                        <div className="member-card item">
                            <img src={teamImg} alt="" className="img-fluid member-img" />
                            <div className="member-details text-center">
                                <h3 className="member-name">
                                    Ahmed-Fathi
                                </h3>
                                <h6 className="member-role text-center">
                                    Full-Stack
                                </h6>
                            </div>
                        </div>
                        <div className="member-card item">
                            <img src={teamImg} alt="" className="img-fluid member-img" />
                            <div className="member-details">
                                <h3 className="member-name">
                                    Khaled
                                </h3>
                                <h6 className="member-role text-center">
                                    AI
                                </h6>
                            </div>
                        </div>
                    </OwlSlider>
                </div>
            </section>
        </main>
    )
}

import { BsArrowRight } from "react-icons/bs";
import { BtnLink } from '../Buttons/Buttons'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="">
            <div className="container">
                <div className="foot-login"></div>
                <div className="links row gap-3">
                    <div className="col-md-3 col-10">
                        <h1>DR . AI</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                            blanditiis?
                        </p>
                    </div>
                    <div className="col-md-3 col-10">
                        <h5>Links</h5>
                        <ul>
                            <li>
                                <BtnLink path="/" class="bg-none p-0 " >Link <BsArrowRight /> </BtnLink>
                            </li>
                            <li>
                                <BtnLink path="/" class="bg-none p-0 " >Link <BsArrowRight /> </BtnLink>
                            </li>
                            <li>
                                <BtnLink path="/" class="bg-none p-0 " >Link <BsArrowRight /> </BtnLink>
                            </li>
                            <li>
                                <BtnLink path="/" class="bg-none p-0 " >Link <BsArrowRight /> </BtnLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-10">
                        <h5>Links</h5>
                        <ul>
                            <li>
                                <BtnLink path="/" class="bg-none p-0 " >Link <BsArrowRight /> </BtnLink>
                            </li>
                            <li>
                                <BtnLink path="/" class="bg-none p-0 " >Link <BsArrowRight /> </BtnLink>
                            </li>
                            <li>
                                <BtnLink path="/" class="bg-none p-0 " >Link <BsArrowRight /> </BtnLink>
                            </li>
                            <li>
                                <BtnLink path="/" class="bg-none p-0 " >Link <BsArrowRight /> </BtnLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-10">
                        <BtnLink path="/login">Login</BtnLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

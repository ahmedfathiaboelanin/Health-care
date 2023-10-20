import { Link } from "react-router-dom";
import BlogImg from "../../../assets/images/blog.jpg";
import { BtnLink } from "../../../components/Buttons/Buttons";
import { BsArrowRight } from "react-icons/bs";
import "./Blog.css"

export default function Blog() {
    return (
        <section className="blogs container">
            <h1 className="sec-title">New-Articles</h1>
            <div className="blog-head">
                <h2>Blogs</h2>
                <Link to="/blog" className="btn-link">
                    See All <BsArrowRight />
                </Link>
            </div>
            <div className="blog-cards">
                <div className="blog-card">
                    <div className="blog-img">
                        <img src={BlogImg} alt="" className="img-fluid" />
                    </div>
                    <div className="blog-text">
                        <h3>Blog One</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        </p>
                        <div className="blog-details">
                            <span className="date">1-1-2024</span>
                            <BtnLink path="/" class="p-0">
                                Read More <BsArrowRight />
                            </BtnLink>
                        </div>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-img">
                        <img src={BlogImg} alt="" className="img-fluid" />
                    </div>
                    <div className="blog-text">
                        <h3>Blog One</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        </p>
                        <div className="blog-details">
                            <span className="date">1-1-2024</span>
                            <BtnLink path="/" class="p-0">
                                Read More <BsArrowRight />
                            </BtnLink>
                        </div>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-img">
                        <img src={BlogImg} alt="" className="img-fluid" />
                    </div>
                    <div className="blog-text">
                        <h3>Blog One</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        </p>
                        <div className="blog-details">
                            <span className="date">1-1-2024</span>
                            <BtnLink path="/" class="p-0">
                                Read More <BsArrowRight />
                            </BtnLink>
                        </div>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-img">
                        <img src={BlogImg} alt="" className="img-fluid" />
                    </div>
                    <div className="blog-text">
                        <h3>Blog One</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        </p>
                        <div className="blog-details">
                            <span className="date">1-1-2024</span>
                            <BtnLink path="/" class="p-0">
                                Read More <BsArrowRight />
                            </BtnLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

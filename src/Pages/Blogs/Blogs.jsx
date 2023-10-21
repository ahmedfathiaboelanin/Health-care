import { BtnLink } from "../../components/Buttons/Buttons"
import "./Blog.css"
import { BsArrowRight } from "react-icons/bs"
import BlogImg from "../../assets/images/blog.jpg"
import {AiOutlineSearch} from "react-icons/ai"
export default function Blogs() {
    return (
      <main>
        <section className="blogs-page">
          <div className="row justify-content-center flex-wrap-reverse gap-5 align-items-end">
            <div className="articles col-11 col-md-7">
              <div className="article row">
                <img src={BlogImg} alt="" className="col-5" />
                <div className="article-text col-7">
                  <h4>Blog Title</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam
                  </p>
                  <BtnLink path="/blogs/singleOne" class="p-0">
                    Read More <BsArrowRight />
                  </BtnLink>
                </div>
              </div>
              <div className="article row">
                <img src={BlogImg} alt="" className="col-5" />
                <div className="article-text col-7">
                  <h4>Blog Title</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam
                  </p>
                  <BtnLink path="/blogs/singleOne" class="p-0">
                    Read More <BsArrowRight />
                  </BtnLink>
                </div>
              </div>
              <div className="article row">
                <img src={BlogImg} alt="" className="col-5" />
                <div className="article-text col-7">
                  <h4>Blog Title</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam
                  </p>
                  <BtnLink path="/blogs/singleOne" class="p-0">
                    Read More <BsArrowRight />
                  </BtnLink>
                </div>
              </div>
              <div className="pagination">
                <button className="border-none btn-link py-2 px-3   mx-1">
                  1
                </button>
                <button className="border-none btn-link py-2 px-3   mx-1">
                  2
                </button>
                <button className="border-none btn-link py-2 px-3   mx-1">
                  3
                </button>
                <button className="border-none btn-link py-2 px-3   mx-1">
                  4
                </button>
                <button className="border-none btn-link py-2 px-3   mx-1">
                  5
                </button>
              </div>
            </div>
            <div className="side m-0 col-11 col-md-4">
                <form>
                    <input type="search" placeholder="Search" />
                    <button className="btn-link p-0"><AiOutlineSearch/></button>
                </form>
            </div>
          </div>
        </section>
      </main>
    );
}

import "./Login.css"
import LoginImg from "../../assets/images/login.jpg"
import {AiOutlineUser} from "react-icons/ai"
import { BtnLink } from "../../components/Buttons/Buttons";
export default function Login() {
    return (
      <main>
        <div className="container login">
          <div className="row align-items-center justify-content-center gap-5">
            <div className="col-md-5 col-12 px-3 px-md-5 form">
              <form>
                <h1 className="form-title">
                  <AiOutlineUser />
                </h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn-link secondary-bg">Sign In</button>
                <BtnLink path="register">Don &lsquo;t have an account?</BtnLink>
              </form>
            </div>
            <div className="d-none d-md-block col-md-4 p-1">
              <img src={LoginImg} className="img-fluid" />
            </div>
          </div>
        </div>
      </main>
    );
}

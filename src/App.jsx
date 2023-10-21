import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Nav'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Service1 from './Pages/Services/Service1'
import Footer from './components/Footer/Footer';
import AboutPage from './Pages/About/AboutPage';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import SingleBlog from "./Pages/Blogs/SingleBlog/SingleBlog"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/blogs" >
            <Route index element={<Blogs/>} />
            <Route path=':id' element={<SingleBlog/>} />
          </Route>
          <Route path="/services">
            <Route index element={<Services />} />
            <Route path='recommendation' element={<Service1/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
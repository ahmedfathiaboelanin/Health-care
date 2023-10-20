import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Nav'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Service1 from './Pages/Services/Service1'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/services">
            <Route index element={<Services />} />
            <Route path='service-1' element={<Service1/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
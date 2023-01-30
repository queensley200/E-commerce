import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";
import { Home } from "./home";


// BrowserRouter, Routes, Route from react-router-dom


// {/* <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/services' element={<Services />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter> */}

export const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

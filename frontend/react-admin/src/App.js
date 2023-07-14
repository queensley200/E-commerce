import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import RegistrationPage from "./pages/registration/Registration";

// import Event from "./components/Event"
import UpcomingDas from "./components/event/UpcomingDas"
import Prev from "./components/event/Prev"
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const [apiResponse, setApiResponse]= useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3030/api/register`);
        const json = await response.json();
        setApiResponse(json);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegistrationPage />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="/previous-event" element={<Prev />} />
               <Route path="/upcoming-event" element={<UpcomingDas />} />
            <Route path="event">
              {/* <Route index element={<List />} />
              <Route path=":user" element={<Prev />} />
              <Route path=":user/id" element={<UpcomingDas />} /> */}
               
              
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
              <Route
                path="/post/:id"
                element={user ? <Post/>: <Navigate to ="/login"/>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminHome from "./Pages/AdminHome";
import EditUser from "./Pages/EditUser";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import { useReducer, useState } from "react";
// import Reducer from "./Reducer/Reducer";
import { createContext } from "react";

const MyContext = createContext();

function App() {
     const [isActive, setIsActive] = useState(false);

     return (
          <div className="App">
               <MyContext.Provider value={{isActive, setIsActive}} >
                    <BrowserRouter>
                         <Routes>
                              <Route path="/signup/:value" element={<Signup />} />
                              <Route path="/login" element={<Login />} />
                              <Route path="/edit_user/:id" element={<EditUser />} />
                              <Route path="/" element={<Home />} />
                              <Route path="/admin_panel" element={<AdminHome />} />
                         </Routes>
                    </BrowserRouter>
               </MyContext.Provider>
          </div>
     );
}

export default App;

export { MyContext };

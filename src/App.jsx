import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import { Outlet } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Outlet />
    </div>
  )

}


export default App
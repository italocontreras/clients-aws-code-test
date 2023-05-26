// import Users from "./components/Users";

// function App() {
//   return (
//     // <p>Hello</p>
//     <Users></Users>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Clients from "./components/Clients";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/clientes" />} />
        <Route path="/clientes" element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;

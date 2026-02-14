// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;

import {Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>

    </HashRouter>
  );
}

export default App;

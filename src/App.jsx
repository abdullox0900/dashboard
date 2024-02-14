import "./App.css";
import {Routes, Route} from "react-router-dom"

import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";

import Students from "./pages/Students/Students";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
               <Route index path="dashboard" element={<Dashboard />} />
               <Route path="students" element={<Students />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;

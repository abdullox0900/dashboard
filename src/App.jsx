import "./App.css";
import {Routes, Route} from "react-router-dom"

import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";

import Students from "./pages/Students/Students";
import Abdullokh from "./pages/Abdullokh/Abdollokh";
import Data from "./pages/Data/Data";
import Dev from "./pages/Dev/Dev";
import English from "./pages/English/English";
import Website from "./pages/Website/Website";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
               <Route index path="dashboard" element={<Dashboard />} />
               <Route path="students" element={<Students />} />
               <Route path="abdullokh" element={<Abdullokh />}>
                  
               </Route>
               <Route path="data" element={<Data />} />
               <Route path="dev" element={<Dev />} />
               <Route path="english" element={<English />} />
               <Route path="website" element={<Website />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;

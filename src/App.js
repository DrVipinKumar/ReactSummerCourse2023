import { Route, Routes } from "react-router-dom";
import "./App.css";
import Comments from "./jsons/Comments";
import { Home } from "./routing/Home";
import FormEx from "./forms/FormEx";
import TotalCounter from "./counters/TotalCounter";
import UseStateEx from "./hooks/UseStateEx";
import Navbar from "./routing/Navbar";
import AboutUs from "./routing/AboutUs";
import Error from "./routing/Error";
import AboutOne from "./routing/AboutOne";
import AboutTwo from "./routing/AboutTwo";
import Parameters from "./routing/Parameters";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/formex" element={<FormEx />} />
        <Route path="/counter" element={<TotalCounter />} />
        <Route path="/parameters" element={<Parameters />} />
        <Route path="/parameters/:lang" element={<Parameters />} />
        <Route path="/aboutus" element={<AboutUs />}>
          <Route path="aboutone" element={<AboutOne />} />
          <Route path="abouttwo" element={<AboutTwo />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

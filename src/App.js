import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage, ProjectPage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;

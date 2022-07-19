import "./App.css";
// import { Routes, Route } from "react-router-dom";
import {
  Header,
  Footer,
  Banner,
  Skills,
  Projects,
  Contact,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes> */}
    </div>
  );
};

export default App;

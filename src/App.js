import "./App.css";
import AboutUs from "./Components/AboutUs";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
   
      <NavBar title="Shop App" aboutText="About us" />
      <div className="container my-3">
      <TextForm heading="Enter some text to analyze"/>
      {/* <AboutUs></AboutUs> */}
      </div>
    </>
  );
}

export default App;

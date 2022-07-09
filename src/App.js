import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar"; 
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
 <div>
  <NavBar />

  <Home/>


  <About />

  <Education/>
  
  <Experience/>

<Contact/> 

  {/* <Footer/> */}
  
  <SocialLinks/>
 </div>
  );
}

export default App;


import './App.css';
import IndexHeader from './Components/Header/IndexHeader'
// import AboutHeader from './Components/Header/AboutHeader'
// import ContactHeader from './Components/Header/ContactHeader'
import IndexBody from './Components/Body/IndexBody';
import AboutBody from './Components/Body/AboutBody';
import ContactBody from './Components/Body/ContactBody';

function App() {
  let indexDesign = {
    backgroundImage: "url('assets/img/home-bg.jpg')",
  }
  let contactDesign={
    backgroundImage: "url('assets/img/contact-bg.jpg')",
    
  }
  let aboutDesign={
    backgroundImage: "url('assets/img/about-bg.jpg')",
    
  }
  return (
    <div className="App">
      <IndexHeader IndexStyle={indexDesign}/>
      {/* <AboutHeader AboutStyle={aboutDesign}/>
      <ContactHeader ContactStyle={contactDesign}/> */}
     <IndexBody />
     <AboutBody />
     <ContactBody />
     </div>
  );
}

export default App;

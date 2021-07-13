
import './App.css';

import React, { useState, PureComponent,useEffect } from 'react'
import IndexHeader from './Components/Header/IndexHeader'
// import AboutHeader from './Components/Header/AboutHeader'
// import ContactHeader from './Components/Header/ContactHeader'
import {IndexBody} from './Components/Body/IndexBody';
import AboutBody from './Components/Body/AboutBody';
import ContactBody from './Components/Body/ContactBody';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

export default function App() {
  const [post, setPost] = useState([
    
  ])
  let indexDesign = {
    backgroundImage: "url('assets/img/home-bg.jpg')",
  }
  let contactDesign={
    backgroundImage: "url('assets/img/contact-bg.jpg')",
  }
  let aboutDesign={
    backgroundImage: "url('assets/img/about-bg.jpg')",
  }
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
    return response.json()  
  }).then(users=> setPost(users))
}, [])

  return (
   <Router>
      <div className="App">
        <Switch>
        <Route path="/">
          <IndexHeader IndexStyle={indexDesign}/>
          <IndexBody singlePost={post}/>  
          </Route>
          <Route path="/home">
          <IndexHeader IndexStyle={indexDesign}/>
          <IndexBody singlePost={post}/>  
          </Route>
          <Route path="/about">
          <AboutHeader AboutStype={aboutDesign}/>
          <AboutBody />  
          </Route>
          <Route path="/contact">
          <ContactHeader ContactStyle={ContactStyle}/>
          <ContactBody />  
          </Route>
        
        </Switch>
     </div>
   </Router>
  )
}

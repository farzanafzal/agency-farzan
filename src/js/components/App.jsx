import React, { Component } from "react";
// import data from "./data";
// import axios from 'axios';
import Nav from "./Nav";
import data from "./data";
import Header from "./Header"
import Section from "./Section"
import Gallery from "./gallery";
import Footer from "./Footer";
import Lastfooter from "./Lastfooter";
import Service from "./Service";
import Contact from "./Contact";






class App extends Component {

  state = {
   
    data:data,
    
  };
 
  render() {
    return (
      <div>
        {/* <Nav data={this.state.data[0].nav} /> */}
        <Header data={this.state.data[0] .header} />
        {/* <Section data={this.state.data[0] .Section} /> */}
        {/* <Service data={this.state.data[0] .Service} /> */}
        {/* <Gallery data={this.state.data[0] .Gallery} /> */}
        {/* <Team data={this.state.data[0] .Team} /> */}
        {/* <Footer data={this.state.data[0] .Footer} /> */}
        <Contact data={this.state.data[0] .Contact} />
        <Lastfooter data={this.state.data[0] .Lastfooter} />
      </div>
    );
  }
}
export default App;

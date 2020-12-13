import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/thebottom';
import HomePage from './pages/TheHomePage';
import AboutPage from './pages/AboutMePage';
import ContactPage from './pages/ContactMePage';



class App extends React.Component {
  
  constructor(props){
     super(props);
     this.state = {
         title: 'Juan Alvarez',
         headerLinks: [
         {title: 'Home', path: '/'},
         {title: 'About', path: '/about'},
         {title: 'Contact', path: '/contact'},
         ],

         home: {
           title: 'Be powerful',
           subTitle: 'The impossible is never impossible',
           text: 'My projects below'

         },
         about: {
          title: 'About Me',
          

        },

        contact: {
          title: 'Let\'s Communicate',
          
  }
}
  }
  render(){
  return (
  
    
    <Router>
      <Container className= "p-0" fluid={true}>

     <Navbar className = "border-bottom" bg = "transparent" expand="lg">
      <Navbar.Brand> Juan Alvarez</Navbar.Brand>

      <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle" />

      <Navbar.Collapse id = "navbar-toggle">
         <Nav className = "ml-auto">

             <Link className = "nav-link" to="/"> HomePage </Link>
             
             <Link className = "nav-link" to="/about"> AboutPage </Link>
             
             <Link className = "nav-link" to="/contact"> ContactPage </Link>


         </Nav>


      </Navbar.Collapse>

     </Navbar>
     
      <Route path = "/" exact render = {() => <HomePage title={this.state.home.titel} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
      <Route path = "/about" exact render = {() => <AboutPage title={this.state.about.title}/>} />
      <Route path = "/contact" exact render = {() => <ContactPage title = {this.state.contact.title}/>}/>



     <Footer />
      
      </Container>

    </Router>
  
    );
}
}
export default App;

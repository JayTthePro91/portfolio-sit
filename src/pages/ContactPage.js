import React from 'react';
import Hero from '../components/Hero';
import Form from 'react-bootstrap/form';
import content from '../components/thecontent';
import Button from'react-bootstrap/Button';


class ContactPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) =>{

        const thetarget = event.thetarget;
        const value = thetarget.type === 'checkbox' ? thetarget.checked : thetarget.value;
        const name = thetarget.name;
    
        this.setState({

           [name] : value
             
        })
    }
          
    handleSubmit = (event) => {
         event.preventDefault();

         this.setState({

            disabled: true,
           

         });


    }


    render(){

return(

   <div>

     <Hero title={this.props.title}/>

     <content>
         
         <Form onSubmit = {this.handleSubmit}>
              <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control id="full-name" name = "name" type="text" value={this.state.name} onChange = {this.handleChange}/>
              </Form.Group>

              <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" name = "email" type="email" value={this.state.email} onChange = {this.handleChange}/>
              </Form.Group>

              <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control id="message" name = "message" as="textarea" rows="3" value={this.state.message} onChange = {this.handleChange}/>
              </Form.Group>

              <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}> Send </Button>

               {this.state.emailSent === true && <p className = "d-inline success-msg"> Email Sent</p>}
               {this.state.emailSent === false && <p className=  "d-inline err-msg"> Email Not Sent</p>}



         </Form>

    </content>

   </div>


);

}
}

export default ContactPage;
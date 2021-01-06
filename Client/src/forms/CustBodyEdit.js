import React, { Component } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';

const required   = val => val && val.length;
const maxLength  = len => val => !val || (val.length <= len);
const minLength  = len => val => val && (val.length >= len);
const isNumber   = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Custform extends Component {
    
    constructor (props) {
        super(props); {
            this.state = 
            {
               
                firstname: '',
                lastname:  '',
                street:    '',
                city:     '',
                state:     '',
                zip:       '',
                mobile:    '',
                email:     '',
                

                touched: {
                    firstname: true,
                    lastname:  true,
                    street:    true,
                    city:      true,
                    state:     true,
                    zip:       true,
                    mobile:    true,
                    email:     true,
                }  

            

             }
    } 
} 


handleSubmitEdit(values) {
    
   this.props.editCustomer(this.props.selectedRow.custid,
                           values.firstname, 
                           values.lastname, 
                           values.street, 
                           values.city, 
                           values.state, 
                           values.zip, 
                           values.mobile, 
                           values.email);
                         
     this.props.toggleModalEdit();                      
}


    
    
render() 

{
      
    return (
       
            <div>
                <LocalForm onSubmit={values => this.handleSubmitEdit(values)}>
                           
                            <Row className = "form-group">                               
                               <Label htmlFor="firstname"md={3}>First Name</Label>
                                     <Col md={8}>
                                         <Control.text model =".firstname" id="firstname" name="firstname"
                                                       placeholder="FirstName"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.firstname}
                                                    

                                                      // text = {this.props.selectedRow.firstname}
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(2),
                                                            maxLength: maxLength(15)    
                                                           }
                                                       }
                                        />

                                        <Errors
                                                    className="text-danger"
                                                    model=".firstname"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be at least 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }
                                                }
                                         />  

                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="lastname" md={3}>Last Name</Label>
                                     <Col md={8}>
                                         <Control.text model =".lastname" id="lastname" name="lastname"
                                                       placeholder="Last Name"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.lastname}
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(2),
                                                            maxLength: maxLength(15)    
                                                           }
                                                       }
                                                       />
                                        <Errors
                                                    className="text-danger"
                                                    model=".lastname"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be at least 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }
                                                }
                                         />                 
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="street" md={3}>Street</Label>
                                     <Col md={8}>
                                         <Control.text model =".street" id="street" name="street"
                                                       placeholder="Street"
                                                       className="form-control"
                                                       defaultValue={this.props.selectedRow.street}
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(10),
                                                           }
                                                       }
                                                       />
                                         <Errors
                                                    className="text-danger"
                                                    model=".street"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be at least 10 characters',
                                                    }
                                                }
                                         />                 
                                                       
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="city" md={3}>City</Label>
                                     <Col md={8}>
                                         <Control.text model =".city" id="city" name="city"
                                                       placeholder="City"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.city}
                                                       validators={
                                                           {
                                                            required, 
                                                            
                                                           }
                                                       }
                                                       />
                                      <Errors
                                                    className="text-danger"
                                                    model=".city"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        
                                                    }
                                                }
                                         />        

                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="state" md={3}>state</Label>
                                     <Col md={4}>
                                         <Control.text model =".state" id="state" name="state"
                                                       placeholder="State"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.state}
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(2),
                                                           }
                                                       }
                                                       />
                                       <Errors
                                                    className="text-danger"
                                                    model=".state"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be at least 2 characters',
                                                    }
                                                }
                                         />                         
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="zip" md={3}>Zip</Label>
                                     <Col md={4}>
                                         <Control.text model =".zip" id="zip" name="zip"
                                                       placeholder="Zip"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.zip}
                                                       validators={
                                                           {
                                                            required, 
                                                            isNumber,
                                                            minLength: minLength(5),
                                                           }
                                                       }
                                                       />
                                      <Errors
                                                    className="text-danger"
                                                    model=".zip"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        isNumber: 'Zip code should be numeric',
                                                        minLength: 'Must be 5 digit numberic code',
                                                        
                                                    }
                                                }
                                         />                          
                                     </Col>
                            </Row>
                            <Row className = "form-group">                               
                               <Label htmlFor="mobile" md={3}>Mobile</Label>
                                     <Col md={8}>
                                         <Control.text model =".mobile" id="mobile" name="mobile"
                                                       placeholder="Mobile"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.mobile}
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(10),
                                                                                                                        isNumber,
                                                           }
                                                       }
                                                       />
                                         <Errors
                                                    className="text-danger"
                                                    model=".mobile"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        sNumber: 'Must be 10 digit number',
                                                        minLength: 'Must be a min 10 numbers',
                                                    }    
                                                }
                                         />                      
                                     </Col>
                            </Row>
                            <Row className = "form-group">                               
                               <Label htmlFor="email" md={3}>Email</Label>
                                     <Col md={8}>
                                         <Control.text model =".email" id="email" name="email"
                                                       placeholder="Email"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.email}
                                                       validators={
                                                           {
                                                            required, 
                                                            validEmail,
                                                           }
                                                       }
                                                       />
                                        <Errors
                                                    className="text-danger"
                                                    model=".email"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        validEmail: 'Invalid email address',
                                                    }
                                                }
                                         />                              
                                     </Col>
                            </Row>
                            <Row className = "form-group">
                                        <Col md={{size: 5}}>
                                            <Button outline type="submit" color="dark">
                                                Submit
                                            </Button>
                                            
                                        </Col>
                                        

                            </Row>
                        </LocalForm>

            </div>
           )
    }
}   

export default Custform;


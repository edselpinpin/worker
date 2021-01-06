import React, { Component } from 'react'
import { Control, LocalForm } from 'react-redux-form';

import { Row, Col, Label} from 'reactstrap';

class CustformView extends Component {
    
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
                    firstname: false,
                    lastname:  false,
                    street:    false,
                    city:      false,
                    state:     false,
                    zip:       false,
                    mobile:    false,
                    email:     false

                }

             }
    } 
} 


handleSubmitView(values) {
  /*   
   this.props.EditCustomer(this.props.currSelectId,
                           values.firstname, 
                           values.lastname, 
                           values.street, 
                           values.city, 
                           values.state, 
                           values.zip, 
                           values.mobile, 
                           values.email);
   */                        
     this.props.toggleModalEdit();                      
}


    
    
render() 

{
      
    return (
       
            <div>
                <LocalForm>
                           
                            <Row className = "form-group">                               
                               <Label htmlFor="firstname"md={3}>First Name</Label>
                                     <Col md={8}>
                                         <Control.text model =".firstname" id="firstname" name="firstname"
                                                       placeholder="FirstName"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.firstname}
                                                     
                                        />
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="lastname" md={3}>Last Name</Label>
                                     <Col md={8}>
                                         <Control.text model =".lastname" id="lastname" name="lastname"
                                                       placeholder="Last Name"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.lastname}
                                                       
                                                       />
                                       
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="street" md={3}>Street</Label>
                                     <Col md={8}>
                                         <Control.text model =".street" id="street" name="street"
                                                       placeholder="Street"
                                                       className="form-control"
                                                       value={this.props.selectedRow.street}
                                                      
                                                       />
                                         
                                                       
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="city" md={3}>City</Label>
                                     <Col md={8}>
                                         <Control.text model =".city" id="city" name="city"
                                                       placeholder="City"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.city}
                                                      
                                                       />
                                      
                                           

                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="state" md={3}>state</Label>
                                     <Col md={4}>
                                         <Control.text model =".state" id="state" name="state"
                                                       placeholder="State"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.state}
                                                      
                                                       />
                                                
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="zip" md={3}>Zip</Label>
                                     <Col md={4}>
                                         <Control.text model =".zip" id="zip" name="zip"
                                                       placeholder="Zip"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.zip}
                                                       
                                                       />
                                                 
                                     </Col>
                            </Row>
                            <Row className = "form-group">                               
                               <Label htmlFor="mobile" md={3}>Mobile</Label>
                                     <Col md={8}>
                                         <Control.text model =".mobile" id="mobile" name="mobile"
                                                       placeholder="Mobile"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.mobile}
                                                      
                                                       />
                                                
                                     </Col>
                            </Row>
                            <Row className = "form-group">                               
                               <Label htmlFor="email" md={3}>Email</Label>
                                     <Col md={8}>
                                         <Control.text model =".email" id="email" name="email"
                                                       placeholder="Email"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.email}
                                                      
                                                       />
                                        
                                                               
                                     </Col>
                            </Row>
                            
                        </LocalForm>

            </div>
           )
    }
}   

export default CustformView;


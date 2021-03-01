import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label,Col, Row} from 'reactstrap';
import { Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import SettingsImg from '../images/settings.svg';

class Sys_settings extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
              bussiness_name:  this.props.sys_settings1.map(sys => sys.bussiness_name),
              street: this.props.sys_settings1.map(sys => sys.street),
              city: this.props.sys_settings1.map(sys => sys.city),
              state: this.props.sys_settings1.map(sys => sys.state),
              zip: this.props.sys_settings1.map(sys => sys.zip),
              phone_num: this.props.sys_settings1.map(sys => sys.phone_num),
              email: this.props.sys_settings1.map(sys => sys.email),
              tax: this.props.sys_settings1.map(sys => sys.tax),
             
              touched: {
                bussiness_name: false,
                street: false,
                city: false,
                state: false,
                zip: false,
                phone_num: false,
                email: false,
                tax: false,
              }

        };

       
       // this.handleSubmit = this.handleSubmit.bind(this);
    
    }

   

    handleAdd(values) {
       
        console.log("Current state is: " + JSON.stringify(values));
       // this.props.postFeedback(this.props.feedbackId, values.firstname, values.lastname, values.phoneNum, values.email, values.agree, values.contactType, values.feedback);
       // this.props.resetFeedbackForm();
        
    }

    handleEdit(values) {
       
        console.log("Current state is: " + JSON.stringify(values));
       // this.props.postFeedback(this.props.feedbackId, values.firstname, values.lastname, values.phoneNum, values.email, values.agree, values.contactType, values.feedback);
       // this.props.resetFeedbackForm();
        
    }
 

    render()
     
    {
      
    return (
            <div className="container">
                               
                <div className="row row-content">
                    <div className="col-12 mt-2">
                        <h4>System Settings</h4>
                        <hr />
                    </div>
                  <div className="col-md-8"> 
                        <LocalForm> 
                          
                            <Row className = "form-group">
                                <Label htmlFor="bussiness_name" md={2}>Bussiness Name</Label>
                                <Col md={7}>
                                    <Control.text model=".bussiness_name" id="bussiness_name" name="bussiness_name"
                                        placeholder="Bussiness Name"
                                        className="form-control"
                                        value={this.state.bussiness_name}
                                    />
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlFor="street" md={2}>Street</Label>
                                <Col md={7}>
                                    <Control.text model=".street" id="street" name="street"
                                        placeholder="Street"
                                        className="form-control"
                                        value={this.state.street}
                                      
                                    />
                                </Col>                        
                            </Row>

                            <Row className = "form-group">
                                <Label htmlFor="city" md={2}>City</Label>
                                <Col md={7}>
                                    <Control.text model=".city" id="city" name="city"
                                        placeholder="City"
                                        className="form-control"
                                        value={this.state.city}
                                       
                                    />
                                </Col>                        
                            </Row>

                            <Row className = "form-group">
                                <Label htmlFor="state" md={2}>State</Label>
                                <Col md={7}>
                                    <Control.text model=".state" id="state" name="state"
                                        placeholder="State"
                                        className="form-control"
                                        value={this.state.state}
                                     
                                    />
                                   
     
                                </Col>                        
                            </Row>

                            <Row className = "form-group">
                                <Label htmlFor="zip" md={2}>Zip</Label>
                                <Col md={7}>
                                    <Control.text model=".zip" id="zip" name="zip"
                                        placeholder="Zip"
                                        className="form-control"
                                        value={this.state.zip}
                                       
                                    />
                                  
     
                                </Col>                        
                            </Row>


                            <Row className = "form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={7}>
                                    <Control.text model= ".phone_num" id="phone_num" name="phone_num"
                                        placeholder="Phone number"
                                        className="form-control"
                                        value={this.state.phone_num}
                                       
                                    />
                 
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={7}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        value={this.state.email}
                                       
                                    />
                                   
                                 </Col>
                            </Row>

                            <Row className = "form-group">
                                <Label htmlFor="Tax" md={2}>Sales Tax%</Label>
                                <Col md={7}>
                                    <Control.text model=".tax" id="tax" name="tax"
                                        placeholder="Tax"
                                        className="form-control"
                                        value={this.state.tax}
                                       
                                    />
                  
                                </Col>                        
                            </Row>
                            <Row className = "form-group">
                            <Col md={{size: 10, offset: 2}}>
                                    <Button outline size="md" type="submit" color="dark"
                                             onClick={this.toggleModalAdd} >
                                        <GrIcons.GrFormAdd />
                                    </Button>{'  '}
                                    <Button outline size="md" type="button" color="dark"
                                            onClick={this.toggleModalEdit}>
                                        <FiIcons.FiEdit3 /> 
                                    </Button>{'  '}
                                    
                            </Col>
                         
                 
                                 {/*
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                                 */}
                            </Row>
                        </LocalForm>
                    </div>
                     <div className= "col-md-4 mr-0"> 
                         <img  height = {400} width = {400} src={SettingsImg} />
                     </div>
                </div>
                

         </div>
    );
   }
 }

 export default Sys_settings;


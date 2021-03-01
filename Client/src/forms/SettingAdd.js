import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label,Col, Row} from 'reactstrap';
import { Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { connect } from "react-redux";
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val) && val > 0;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


const mapStateToProps = state => {
  
    return {
         sys_settings: state.sys_settings
    };
  };


class Sys_settings extends Component 
{

    

    constructor(props) {
        super(props);

        this.state = {
              sys_settings: this.props.sys_settings.sys_settings.map(sys => sys.sys_settings),
              bussiness_name:  this.props.sys_settings.sys_settings.map(sys => sys.bussiness_name),
              street: this.props.sys_settings.sys_settings.map(sys => sys.street),
              city: this.props.sys_settings.sys_settings.map(sys => sys.city),
              state: this.props.sys_settings.sys_settings.map(sys => sys.state),
              zip: this.props.sys_settings.sys_settings.map(sys => sys.zip),
              phone_num: this.props.sys_settings.sys_settings.map(sys => sys.phone_num),
              email: this.props.sys_settings.sys_settings.map(sys => sys.email),
              tax: this.props.sys_settings.sys_settings.map(sys => sys.tax),
             
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
       console.log(this.props.sys_settings.sys_settings.street)
    return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>System Settings</BreadcrumbItem>
                    </Breadcrumb>
                   
                </div>

                
                <div className="row row-content">
                    <div className="col-12">
                        <h2>System Settings</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">

                     

                        <LocalForm> 
                                                
                                               
                            <Row className = "form-group">
                                <Label htmlFor="bussiness_name" md={2}>Bussiness Name</Label>
                                <Col md={10}>
                                    <Control.text model=".bussiness_name" id="bussiness_name" name="bussiness_name"
                                        placeholder="Bussiness Name"
                                        className="form-control"
                                        value={this.state.bussiness_name}
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".bussiness_name"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlFor="street" md={2}>Street</Label>
                                <Col md={10}>
                                    <Control.text model=".street" id="street" name="street"
                                        placeholder="Street"
                                        className="form-control"
                                        value={this.state.street}
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".street"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
     
                                </Col>                        
                            </Row>

                            <Row className = "form-group">
                                <Label htmlFor="city" md={2}>City</Label>
                                <Col md={10}>
                                    <Control.text model=".city" id="city" name="city"
                                        placeholder="City"
                                        className="form-control"
                                        value={this.state.city}
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".city"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
     
                                </Col>                        
                            </Row>

                            <Row className = "form-group">
                                <Label htmlFor="state" md={2}>State</Label>
                                <Col md={10}>
                                    <Control.text model=".state" id="state" name="state"
                                        placeholder="State"
                                        className="form-control"
                                        value={this.state.state}
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(2)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".state"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 2 characters'
                                        }}
                                    />
     
                                </Col>                        
                            </Row>

                            <Row className = "form-group">
                                <Label htmlFor="zip" md={2}>Zip</Label>
                                <Col md={10}>
                                    <Control.text model=".zip" id="zip" name="zip"
                                        placeholder="Zip"
                                        className="form-control"
                                        value={this.state.zip}
                                        validators={{
                                            required, 
                                            isNumber,
                                            minLength: minLength(5),
                                            maxLength: maxLength(5)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".zip"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number',
                                            minLength: 'Must be at least 5 numeric value ',
                                            maxLength: 'Must be 5 numeric value'
                                        }}
                                    />
     
                                </Col>                        
                            </Row>


                            <Row className = "form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model= ".phone_num" id="phone_num" name="phone_num"
                                        placeholder="Phone number"
                                        className="form-control"
                                        value={this.state.phone_num}
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phone_num"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                    
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        value={this.state.email}
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                 </Col>
                            </Row>

                            <Row className = "form-group">
                                <Label htmlFor="Tax" md={2}>Sales Tax%</Label>
                                <Col md={10}>
                                    <Control.text model=".tax" id="tax" name="tax"
                                        placeholder="Tax"
                                        className="form-control"
                                        value={this.state.tax}
                                        validators={{
                                            required, 
                                            isNumber,
                                            minLength: minLength(1),
                                            maxLength: maxLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".zip"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number',
                                            minLength: 'Must be at least 1 numeric value ',
                                            maxLength: 'Must be 3 numeric value'
                                        }}
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
                </div>
            </div>
    );
   }
 }

 export default connect(mapStateToProps,null)(Sys_settings);
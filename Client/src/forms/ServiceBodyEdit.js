import React, { Component } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';

const required   = val => val && val.length;
const maxLength  = len => val => !val || (val.length <= len);
const minLength  = len => val => val && (val.length >= len);
const isNumber   = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Serviceformedit extends Component {
    constructor (props) {
        super(props); {
            this.state = 
            {
                serviceid: '',
                servicename: '',
                servicedescription: '',
                price: '',

                touched: {
                    serviceid: false,
                    servicename:  false,
                    servicedescription:    false,
                    price:      false,
                   
                }
            

             }
    } 
} 


handleSubmitEdit(values) {
   this.props.editService(this.props.selectedRow.serviceid, 
                          values.servicename, 
                          values.servicedescription, 
                          values.price); 
     this.props.toggleModalEdit();                      
}
        
    
render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmitEdit(values)}>
                           
                            <Row className = "form-group">                               
                               <Label htmlFor="servicename" md={3}>servicename</Label>
                                     <Col md={8}>
                                         <Control.text model =".servicename" id="servicename" name="servicename"
                                                       placeholder="Service Name"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.servicename}
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(10),
                                                            maxLength: maxLength(50)    
                                                           }
                                                       }
                                                       />
                                        <Errors
                                                    className="text-danger"
                                                    model=".servicename"
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
                               <Label htmlFor="price" md={3}>price</Label>
                                     <Col md={8}>
                                         <Control.text model =".price" id="price" name="price"
                                                       placeholder="price"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.price}
                                                       validators={
                                                           {
                                                            required, 
                                                            isNumber,
                                                           }
                                                       }
                                                       />
                                         <Errors
                                                    className="text-danger"
                                                    model=".price"
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
                               <Label htmlFor="servicedescription" md={3}>Description</Label>
                                     <Col md={8}>
                                         <Control.textarea model =".servicedescription" id="servicedecription" name="servicedesription"
                                                       placeholder="Description"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.servicedescription}
                                                       rows="6"
                                                       validators={
                                                           {
                                                            required, 
                                                            
                                                           }
                                                       }
                                                       />
                                      <Errors
                                                    className="text-danger"
                                                    model=".servicedescription"
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

export default Serviceformedit;


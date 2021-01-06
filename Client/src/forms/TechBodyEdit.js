import React, { Component } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';

const required   = val => val && val.length;
const maxLength  = len => val => !val || (val.length <= len);
const minLength  = len => val => val && (val.length >= len);
const isNumber   = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Techformedit extends Component {
    constructor (props) {
        super(props); {
            this.state = 
            {
                techid: '',
                firstname: '',
                lastname: '',
               

                touched: {
                    techid: false,
                    firstname:  false,
                    lastname:    false,
                }
            

             }
    } 
} 


handleSubmitAdd(values) {
   this.props.editTech(this.props.selectedRow.techid, 
                      values.firstname, 
                      values.lastname); 
     this.props.toggleModalEdit();                      
}
        
    
render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmitAdd(values)}>
                            <Row className = "form-group">                               
                               <Label htmlFor="techid"md={3}>Tech Code</Label>
                                     <Col md={8}>
                                         <Control.text model =".techid" id="techid" name="techid"
                                                       placeholder="Tech Code"
                                                       className="form-control"
                                                       value={this.props.selectedRow.techid}
                                                      /* validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(2),
                                                            maxLength: maxLength(10)    
                                                           }
                                                       } */
                                        />
                                      {/*
                                        <Errors
                                                    className="text-danger"
                                                    model=".techid"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be at least 2 characters',
                                                        maxLength: 'Must be 10 characters or less'
                                                    }
                                                }
                                         />  
                                            */}

                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="firstname" md={3}>First Name</Label>
                                     <Col md={8}>
                                         <Control.text model =".firstname" id="firstnamr" name="firstname"
                                                       placeholder="firstname"
                                                       className="form-control"
                                                       defaultValue={this.props.selectedRow.firstname}
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
                                         <Control.text model =".lastname" id="price" name="lastname"
                                                       placeholder="Last Namr"
                                                       className="form-control"
                                                       defaultValue={this.props.selectedRow.lastname}
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

export default Techformedit;


import React, { Component } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';
import Select from 'react-select';



const required   = val => val && val.length;
const maxLength  = len => val => !val || (val.length <= len);
const minLength  = len => val => val && (val.length >= len);const 
isNumber   = val => !isNaN(+val) && (val > 0);




class WoformEditParts extends Component {
    constructor (props) {
        super(props); {
            this.state = 
            {
                worderid: '',
                partsid: '',
                partsname:'',
                price: '',
              
                
                
                touched: {
                    worderid:  false,
                    partsid: false,
                    partsname:  false,
                    price: false,
                 }
         }
    } 
} 



handleSubmitEdit(values) 
{
    this.props.editWorkorderDtlParts(this.props.selectedRow.worderid,
                                    this.props.selectedRow.partsid,
                                    values.partsname,
                                    values.price); 
                             
     this.props.toggleModalEdit();    
}


render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmitEdit(values)}>
                           
                            <Row className = "form-group"> 
                            <Label htmlFor="partsname"md={3}>Part/Material Name</Label>
                                <Col md={7}>
                                <Control.text  model =".partsname" id="partsname" name="partsname"
                                    className="form-control"
                                    defaultValue = {this.props.selectedRow.partsname}
                                    validators={
                                        {
                                         required, 
                                         minLength: minLength(10),
                                        }
                                    }
                                />
                                <Errors
                                        className="text-danger"
                                        model=".partsname"
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
                               <Label htmlFor="price" md={3}>Price</Label>
                                     <Col md={7}>
       
                                         <Control.text  model =".price" id="price" name="price"
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
                                                    isNumber: 'Should be numberic greater than zero',
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

export default WoformEditParts;


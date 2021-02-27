import React, { Component } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';
import Select from 'react-select';



const required   = val => val && val.length;
const maxLength  = len => val => !val || (val.length <= len);
const minLength  = len => val => val && (val.length >= len);const 
isNumber   = val => !isNaN(+val) && (val > 0);


let listItems = [{}];

class WoformAddParts extends Component {
    constructor (props) {
        super(props); {
            this.state = 
            {
                worderid: '',
                partsid: '',
                partsname:  '',
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



handleSubmitAdd(values) {

  // this.props.getselectedRow(); // to  get the current selected worderid 
  
    this.props.addWorkorderDtlParts(this.props. selectedWORow.worderid,
                                    values.partsname,
                                    values.price, 
                           );  
     this.props.toggleModalAdd();    
               
}


render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmitAdd(values)}>
                           
                            <Row className = "form-group"> 
                            <Label htmlFor="partsname"md={5}>Part/Material Name</Label>
                                <Col md={7}>
                                
                                <Control.text  model =".partsname" id="partsname" name="partsname"
                                    className="form-control"
                                    validators={
                                        {
                                         required, 
                                         minLength: minLength(5),
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
                               <Label htmlFor="price" md={5}>Price</Label>
                                     <Col md={7}>
       
                                         <Control.text  model =".price" id="price" name="price"
                                                       className="form-control"
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

export default WoformAddParts;


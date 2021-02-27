import React, { Component, useState } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';



const required   = val => val && val.length;
const maxLength  = len => val => !val || (val.length <= len);
const minLength  = len => val => val && (val.length >= len);

let currSelectId, selectedDate;


let listItems = [{}];

class WoformEdit extends Component {
    constructor (props) {
        super(props); {
            this.state = 
            {
                status: 'Open',
                custid: '',
                cust_firstname: '',
                cust_lastname: '',
                model: '',
                brand:  '',
                inst: '',
                promised_date: '',
                currenDate:  new Date(),
                selectedDay: this.props.selectedRow.promised_date.slice(0,10), /* substr(0,10) will do remove the time */
                isEmpty: true,
                isDisabled: false,
              
                
                
                touched: {
                    status: 'Open',
                    custid: '',
                    cust_firstname: '',
                    cust_lastname: '',
                    model: '',
                    brand:  '',
                    inst: '',
                    promised_date: '',
                   
                 }
            

         }
       this.handleDayChange = this.handleDayChange.bind(this);
                
    } 
    
    currSelectId  = this.props.selectedRow.custid;
} 

handleSubmitEdit(values) {
 
    this.props.editWorkOrder( 
        this.props.selectedRow.worderid,
        currSelectId, 
        values.brand, 
        values.model, 
        this.state.selectedDay,
        values.inst 
      );
     
     this.props.toggleModalEdit();    
               
}

handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }

componentDidMount() {
   
   

   listItems =  this.props.customer.customer.map(opt =>({
       label: opt.custid + '   ' + opt.cust_firstname + ' ' +  opt.cust_lastname , value: opt.custid 
   }))
}
    
render() 
{
    const { selectedDay, isDisabled, isEmpty } = this.state;
    return (
          
            <div>
                <LocalForm onSubmit={values => this.handleSubmitEdit(values)}>
                           
                            <Row className = "form-group"> 
                            <Label htmlFor="custid"md={3}>Customer</Label>
                                <Col md={8}>
                                        
                                        <Select 
                                            options={listItems}
                                            value={listItems.filter(option => option.value ===  this.props.selectedRow.custid)} 
                                            onChange={opt => currSelectId = opt.value}
                                            
                                        />

                                </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="brand" md={3}>Model</Label>
                                     <Col md={8}>
                                         <Control.text model =".brand" id="brand" name="brand"
                                                       placeholder="Brand"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.brand}
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(2),
                                                           }
                                                       }
                                                       />
                                       <Errors
                                                    className="text-danger"
                                                    model=".brand"
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
                               <Label htmlFor="model" md={3}>Model</Label>
                                     <Col md={8}>
                                         <Control.text model =".model" id="model" name="model"
                                                       placeholder="Model"
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.model}
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
                                                        minLength: 'Must be 5 digit numberic code',
                                                        
                                                    }
                                                }
                                         />                          
                                     </Col>
                            </Row>

                            <Row className = "form-group"> 
                               
                               <Label htmlFor="promised_date" md={3}>Promise Date</Label>
                                     <Col md={8}>
                                     <DayPickerInput
                                         value={selectedDay}
                                         onDayChange={this.handleDayChange}
                                          dayPickerProps={{
                                                          selectedDays: selectedDay,
                                                          disabledDays: {
                                                          daysOfWeek: [0, 6],
                                                          },
                                           }}
                                        />
                                                           
                                     </Col>
                      
                            </Row>

                           
                            <Row className = "form-group">                               
                               <Label htmlFor="inst" md={3}>Description</Label>
                                     <Col md={8}>
                                         <Control.textarea model = ".inst" id= "inst" name="inst"
                                                       placeholder= ""
                                                       className="form-control"
                                                       defaultValue = {this.props.selectedRow.inst}
                                                       rows="4"
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

export default WoformEdit;

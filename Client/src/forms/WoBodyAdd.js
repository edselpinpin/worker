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

class WoformAdd extends Component {
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
                selectedDay: new Date().toLocaleDateString('en-US').slice(0,10),
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
    

} 

handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDate,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }
  

handleSubmitAdd(values) {

 if(currSelectId) {
    const selCustomer =   this.props.customer.customer.filter(customer => customer.custid ===  currSelectId); 

    selCustomer.forEach(el =>  { 
         this.props.addWorkorder( currSelectId, 
             el.firstname,
             el.lastname, 
             values.brand, 
             values.model, 
             this.state.selectedDay,
             values.inst, 
             'Open'
           );
            
     })
     this.props.toggleModalAdd();    
 }
 else {
      alert("Customer not selecected")
 }
 
   
    
               
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
                <LocalForm onSubmit={values => this.handleSubmitAdd(values)}>
                           
                            <Row className = "form-group"> 
                            <Label htmlFor="custid"md={3}>Customer</Label>
                                <Col md={8}>
                                       
                                        <Select 
                                            options={listItems}
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
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(2),
                                                           }
                                                       }
                                                       />
                                      <Errors
                                                    className="text-danger"
                                                    model=".model"
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

                                         {/*
                                         <Control.text  model =".promised_date" id="promised_date" name="promised_date"
                                                       placeholder="YYYY-MM-DD"
                                                       className="form-control"
                                                   
                                                       validators={
                                                           {
                                                            required, 
                                                                                                                       
                                                           }
                                                       }
                                                       />
                                         <Errors
                                                    className="text-danger"
                                                    model=".promised_date"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                       
                                                    }    
                                                }
                                         />  
                                            */}
                                                           
                                     </Col>
                      
                            </Row>

                           
                            <Row className = "form-group">                               
                               <Label htmlFor="inst" md={3}>Description</Label>
                                     <Col md={8}>
                                         <Control.textarea model = ".inst" id= "inst" name="inst"
                                                       placeholder= ""
                                                       className="form-control"
                                                       rows="4"
                                                       validators={
                                                        {
                                                         required, 
                                                         
                                                        }
                                                    }
                                                    />
                                   <Errors
                                                 className="text-danger"
                                                 model=".inst"
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

export default WoformAdd;


import React, { Component, useState } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';



const required   = val => val && val.length;
const maxLength  = len => val => !val || (val.length <= len);
const minLength  = len => val => val && (val.length >= len);

let currSelectId, selectedDate;


let listItems = [{}];

class WoformView extends Component {
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
    } 
    

} 

handleSubmitView() {
 
     this.props.toggleModalView();    
               
}

componentDidMount() {
   
   

   listItems =  this.props.customer.customer.map(opt =>({
       label: opt.custid + '   ' + opt.cust_firstname + ' ' +  opt.cust_lastname , value: opt.custid 
   }))
}
    
render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmitView(values)}>
                           
                            <Row className = "form-group"> 
                            <Label htmlFor="custid"md={3}>Customer</Label>
                                <Col md={8}>
                                <Control.text model =".custid" id="custid" name="custid"
                                                       placeholder="Custid"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.custid}
                                                      
                                                       />

                                        


                                </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="brand" md={3}>Model</Label>
                                     <Col md={8}>
                                         <Control.text model =".brand" id="brand" name="brand"
                                                       placeholder="Brand"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.brand}
                                                      
                                                       />
                                             
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="model" md={3}>Model</Label>
                                     <Col md={8}>
                                         <Control.text model =".model" id="model" name="model"
                                                       placeholder="Model"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.model}
                                                       />
                                               
                                     </Col>
                            </Row>

                            <Row className = "form-group"> 
                               
                               <Label htmlFor="promised_date" md={3}>Promise Date</Label>
                                     <Col md={8}>
                                    
 
                                     
                                    
                                                                                  
                                       
                                         <Control.text  model =".promised_date" id="promised_date" name="promised_date"
                                                       placeholder="YYYY-MM-DD"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.promised_date.slice(0,10)}
                                                       />
                                       
                                                           
                                     </Col>
                      
                            </Row>

                           
                            <Row className = "form-group">                               
                               <Label htmlFor="inst" md={3}>Description</Label>
                                     <Col md={8}>
                                         <Control.textarea model = ".inst" id= "inst" name="inst"
                                                       placeholder= ""
                                                       className="form-control"
                                                       rows="4"
                                                       value = {this.props.selectedRow.inst}
                                                     
                                                    />
                                   

                                                      
                                                       
                                     </Col>
                            </Row>
                            <Row className = "form-group">
                                        <Col md={{size: 5}}>
                                            <Button outline type="submit" color="dark">
                                                Close
                                            </Button>
                                        </Col>
                            </Row>
                        </LocalForm>

            </div>
           )
    }
}   

export default WoformView;

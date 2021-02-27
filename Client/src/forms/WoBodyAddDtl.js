import React, { Component } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';
import Select from 'react-select';



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
                worderid: '',
                serviceid: '',
                servicename:  '',
                servicedescription: '',
                price: '',
              
                
                
                touched: {
                    worderid:  false,
                    serviceid: false,
                    servicename:  false,
                    servicedescription: false,
                    price: false,
                 }
             

         }

                  this.setLocalState = this.setLocalState.bind(this);
    } 
} 

setLocalState(value){
    const selService =   this.props.service.service.filter(svc => svc.serviceid ===  value); 
    selService.forEach(el =>{
          this.setState({
                    serviceid: el.serviceid,
                    servicename: el.servicename,
                    servicedescription: el.servicedescription,
                    price: el.price,
          })

    })
}

handleSubmitAdd(values) {
  
    this.props.addWorkorderDtl(this.props.selectedWORow.worderid,
                               this.state.serviceid, 
                               this.state.servicename,
                               this.state.servicedescription, 
                               this.state.price, 
                           );  
     this.props.toggleModalAdd();    
               
}

componentDidMount() {
    
   listItems =  this.props.service.service.map(opt =>({
       label: opt.serviceid + '   ' + opt.servicename, value: opt.serviceid
   }))
}
    
render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmitAdd(values)}>
                           
                            <Row className = "form-group"> 
                            <Label htmlFor="serviceid"md={3}>Service Code</Label>
                                <Col md={8}>
                                         {/*
                                         <Control.select 
                                                model=".custid" 
                                                name="CustId"
                                                className="form-control"> 
                                              
                                        </Control.select>
                                         */}

                                        <Select 
                                            options={listItems}
                                            onChange={ opt => this.setLocalState(opt.value)}
                                            //onChange={opt => currSelectId = opt.value}
                                            
                                        />

                                   
                                       
                                </Col>
                            </Row>

                            
                            <Row className = "form-group">                               
                               <Label htmlFor="price" md={3}>Price</Label>
                                     <Col md={8}>
       
                                         <Control.text  model =".price" id="price" name="price"
                                                       className="form-control"
                                                       value = {this.state.price}
                                                       />
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="servicedecription" md={3}>Description</Label>
                                     <Col md={8}>
                                         <Control.textarea model = ".servicedecription" id= "servicedecription" name="servicedecription"
                                                       placeholder= ""
                                                       className="form-control"
                                                       rows="4"
                                                       value = {this.state.servicedescription}
                                                      
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


import React, { Component } from 'react'
import { Control, LocalForm} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';
import Select from 'react-select';


let listItems = [{}];

class WoTechCheckIn extends Component {
    constructor (props) {
        super(props); {
            this.state = 
            {
                worderid: this.props.currworderid,
                techid: '',
                tech_firstname:  '',
                tech_lastname: '',
            
                touched: {
                    techid: false,
                    tech_comments: '',
                 }
         }

                  this.setLocalState = this.setLocalState.bind(this);
    } 
} 

setLocalState(value){
    const selTech =   this.props.tech.tech.filter(tech => tech.techid ===  value); 
    selTech.forEach(el =>{
          this.setState({
                    techid: el.techid,
                    tech_firstname: el.firstname,
                    tech_lastname: el.lastname,
                   
          })

    })
}

handleSubmitAdd(values) {

    this.props.checkInTech(this.state.worderid,
                           this.state.techid, 
                           this.state.tech_firstname,
                           this.state.tech_lastname 
                           );  
     this.props.toggleModalCheckInTech();    
               
}

componentDidMount() {
    console.log()
   
   listItems =  this.props.tech.tech.map(opt =>({
       label: opt.techid + '   ' + opt.firstname + '' + opt.lastname , value: opt.techid
   }))
}
    
render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmitAdd(values)}>
                           
                            <Row className = "form-group"> 
                            <Label htmlFor="techid"md={3}>Technician</Label>
                                <Col md={8}>
                                       
                                        <Select 
                                            options={listItems}
                                            onChange={ opt => this.setLocalState(opt.value)}
                                         
                                            
                                        />
                                </Col>
                            </Row>

                            
                            <Row className = "form-group">                               
                               <Label htmlFor="tech_firstname" md={3}>First Name</Label>
                                     <Col md={8}>
       
                                         <Control.text  model =".tech_firstname" id="tech_firstname" name="tech_firstname"
                                                       className="form-control"
                                                       value = {this.state.tech_firstname}
                                                       />
                                     </Col>
                            </Row>
                            
                            <Row className = "form-group">                               
                               <Label htmlFor="tech_lastname" md={3}>Last Name</Label>
                                     <Col md={8}>
       
                                         <Control.text  model =".tech_lastname" id="tech_lastname" name="tech_lastname"
                                                       className="form-control"
                                                       value = {this.state.tech_lastname}
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

export default WoTechCheckIn;


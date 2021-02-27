import React, { Component } from 'react'
import { Control, LocalForm} from 'react-redux-form';

import { Row, Col, Label, Button } from 'reactstrap';
import Select from 'react-select';


let listItems = [{}];

class WoTechCheckOut extends Component {
   
    constructor (props) {
        super(props); {
            this.state = 
            {
                worderid: this.props.currworderid,
                tech_comment: '',
                complete: false,
                status: 'Complete',
                
                touched: {
                    tech_comment: false,
                    status: false,
                 }
         }

                  this.setLocalState = this.setLocalState.bind(this);
    } 
} 

setLocalState(value){
   
    this.props.workorder.forEach(el =>{
          this.setState({
              tech_comment: el.tech_comment
          })
    })
}

handleSubmit(values) {
   // const status = (values.complete) ? 'Complete' : 'Work in Progress';

    this.props.checkOutTech(this.state.worderid,
                            values.tech_comment, 
                            'Complete',
                          );  
     this.props.toggleModalCheckOutTech();    
               
}

componentDidMount() {
    this.setLocalState();  
}


    
render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <Row className = "form-group">                               
                               <Label htmlFor="tech_comment" md={3}>Comment/Notes</Label>
                                     <Col md={8}>
                                         <Control.textarea model =".tech_comment" id="tech_comment" name="tech_comment"
                                                       className="form-control"
                                                       defaultValue = {this.state.tech_comment}
                                                       rows="6"
                                                       />
                                    
                                     </Col>
                            </Row>
                          {/*
                            <Row className = "form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className = "form-check">
                                        <Label check>
                                            <Control.checkbox 
                                                model = ".complete"
                                                name="complete"
                                                className="form-check-input"
                                                 /> {' '}
                                               <strong>Service Work Complete?</strong>
                                        </Label>
                                    </div>
                                </Col>


                            </Row>
                          */}
                           
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

export default WoTechCheckOut;


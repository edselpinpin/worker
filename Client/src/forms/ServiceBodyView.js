import React, { Component } from 'react'
import { Control, LocalForm} from 'react-redux-form';

import { Row, Col, Label } from 'reactstrap';


class Serviceformview extends Component {
    constructor (props) {
        super(props); {
            this.state = 
            {
                serviceid: '',
                servicename: '',
                servicedescription: '',
                price: '',

              
            

             }
    } 
} 



    
render() 
{
    return (
            <div>
                <LocalForm onSubmit={values => this.handleSubmitAdd(values)}>

                <Row className = "form-group">                               
                               <Label htmlFor="serviceid" md={3}>serviceid</Label>
                                     <Col md={8}>
                                         <Control.text model =".serviceid" id="serviceid" name="serviceid"
                                                       placeholder="Service Vode"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.serviceid}
                                                      
                                                       />
                                                         
                                     </Col>
                            </Row>

                            
                           
                            <Row className = "form-group">                               
                               <Label htmlFor="servicename" md={3}>servicename</Label>
                                     <Col md={8}>
                                         <Control.text model =".servicename" id="servicename" name="servicename"
                                                       placeholder="Service Name"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.servicename}
                                                      
                                                       />
                                            
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="price" md={3}>price</Label>
                                     <Col md={8}>
                                         <Control.text model =".price" id="price" name="price"
                                                       placeholder="price"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.price}
                                                      
                                                       />
                                            
                                                       
                                     </Col>
                            </Row>

                            <Row className = "form-group">                               
                               <Label htmlFor="servicedescription" md={3}>Description</Label>
                                     <Col md={8}>
                                         <Control.textarea model =".servicedescription" id="servicedecription" name="servicedesription"
                                                       placeholder="Description"
                                                       className="form-control"
                                                       value = {this.props.selectedRow.servicedescription}
                                                       rows="6"
                                                      
                                                       />
                                     

                                     </Col>
                            </Row>

                            
                           
                        </LocalForm>

            </div>
           )
    }
}   

export default Serviceformview;


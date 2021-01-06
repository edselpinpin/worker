/*
<LocalForm onSubmit={values => this.handleSubmitEdit(values)}>
                            <Row className = "form-group">                               
                               <Label htmlFor="firstName"md={3}>First Name</Label>
                                     <Col md={8}>
                                         <Control.text model =".firstName" id="firstName" name="firstName"
                                                       placeholder="FirstName"
                                                       value= {this.state.selectedRow.firstName}
                                                       className="form-control"
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
                                                    model=".firstName"
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
                               <Label htmlFor="lastName" md={3}>Last Name</Label>
                                     <Col md={8}>
                                         <Control.text model =".lastName" id="lastName" name="lastName"
                                                       placeholder="Last Name"
                                                       className="form-control"
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
                                                    model=".lastName"
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
                               <Label htmlFor="street" md={3}>Street</Label>
                                     <Col md={8}>
                                        <Control.text model =".street" id="street" name="street"
                                                       placeholder="Street"
                                                       className="form-control"
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(10),
                                                           }
                                                       }
                                                       />
                                         <Errors
                                                    className="text-danger"
                                                    model=".street"
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
                               <Label htmlFor="city" md={3}>City</Label>
                                     <Col md={8}>
                                         <Control.text model =".city" id="city" name="city"
                                                       placeholder="City"
                                                       className="form-control"
                                                       validators={
                                                           {
                                                            required, 
                                                            
                                                           }
                                                       }
                                                       />
                                      <Errors
                                                    className="text-danger"
                                                    model=".city"
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
                               <Label htmlFor="state" md={3}>state</Label>
                                     <Col md={4}>
                                         <Control.text model =".state" id="state" name="state"
                                                       placeholder="State"
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
                                                    model=".state"
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
                               <Label htmlFor="zip" md={3}>Zip</Label>
                                     <Col md={4}>
                                         <Control.text model =".zip" id="zip" name="zip"
                                                       placeholder="Zip"
                                                       className="form-control"
                                                       validators={
                                                           {
                                                            required, 
                                                            isNumber,
                                                            minLength: minLength(5),
                                                           }
                                                       }
                                                       />
                                      <Errors
                                                    className="text-danger"
                                                    model=".state"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        isNumber: 'Zip code should be numeric',
                                                        minLength: 'Must be 5 digit numberic code',
                                                        
                                                    }
                                                }
                                         />                          
                                     </Col>
                            </Row>
                            <Row className = "form-group">                               
                               <Label htmlFor="mobile" md={3}>Mobile</Label>
                                     <Col md={8}>
                                         <Control.text model =".mobile" id="mobile" name="mobile"
                                                       placeholder="Mobile"
                                                       className="form-control"
                                                       default="CA"
                                                       validators={
                                                           {
                                                            required, 
                                                            minLength: minLength(10),
                                                                                                                        isNumber,
                                                           }
                                                       }
                                                       />
                                         <Errors
                                                    className="text-danger"
                                                    model=".mobile"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        sNumber: 'Must be 10 digit number',
                                                        minLength: 'Must be a min 10 numbers',
                                                    }    
                                                }
                                         />                      
                                     </Col>
                            </Row>
                            <Row className = "form-group">                               
                               <Label htmlFor="email" md={3}>Email</Label>
                                     <Col md={8}>
                                         <Control.text model =".email" id="email" name="email"
                                                       placeholder="Email"
                                                       className="form-control"
                                                       validators={
                                                           {
                                                            required, 
                                                            validEmail,
                                                           }
                                                       }
                                                       />
                                        <Errors
                                                    className="text-danger"
                                                    model=".email"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        validEmail: 'Invalid email address',
                                                    }
                                                }
                                         />                              
                                     </Col>
                            </Row>
                            <Row className = "form-group">
                                        <Col md={6, {size: 5}}>
                                            <Button outline type="submit" color="dark">
                                                Submit
                                            </Button>
                                        </Col>
                            </Row>
                        </LocalForm>
                        */
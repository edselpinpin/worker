import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { LocalForm, actions} from 'react-redux-form';

import { Modal, ModalBody, ModalHeader, Row, Col, Button } from 'reactstrap';

import { connect } from "react-redux";
import { fetchCustomer, addCustomer, editCustomer, deleteCustomer, fetchCustWorkorder } from '../actions/ActionCreators';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import CustformAdd  from '../forms/CustBodyAdd';
import CustformEdit from '../forms/CustBodyEdit';
import CustformView from '../forms/CustBodyView';


import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';


/*
const required   = val => val && val.length;
const maxLength  = len => val => !val || (val.length <= len);
const minLength  = len => val => val && (val.length >= len);
const isNumber   = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
*/

const mapStateToProps = state => {
  
    return {
        customer: state.customer,
      
    };
  };
  
  
const mapDispatchToProps = {
   
    addCustomer:(firstname,lastname,street,city,state,zip,mobile,email)  => (addCustomer(firstname,lastname,street,city,state,zip,mobile,email)),
    editCustomer:(custid,firstname,lastname,street,city,state,zip,mobile,email) => (editCustomer(custid,firstname,lastname,street,city,state,zip,mobile,email)),
    deleteCustomer:(custid) => (deleteCustomer(custid)),
    resetCustomerForm: () => (actions.reset('customerForm')),
    fetchCustWorkorder:(custid) => (fetchCustWorkorder(custid))

    
  }
     
  class Customergrid extends Component {
   
    constructor (props) {
        super(props);
        this.state = {
            columnDefs: [
               { headerName: 'Customer No', field: 'custid', maxWidth: 100, sortable: true, filter: true, checkboxSelection: true},
               { headerName: 'First Name', field: 'cust_firstname', maxWidth: 150,sortable: true, filter: true},
               { headerName: 'Last Name', field: 'cust_lastname', maxWidth: 150, sortable: true, filter: true},
               { headerName: 'Street', field: 'street', maxWidth: 150, sortable: true, filter: true},
               { headerName: 'City', field: 'city', maxWidth: 150, sortable: true, filter: true}, 
               { headerName: 'State', field: 'state', maxWidth: 150, sortable: true, filter: true},
               { headerName: 'Zip', field: 'zip', maxWidth: 150, sortable: true, filter: true},
               { headerName: 'Mobile #', field: 'mobile', maxWidth: 150, sortable: true, filter: true},
               { headerName: 'Email', field: 'email',sortable: true, filter: true}
            ],
            isModalOpenAdd : false,
            isModalOpenDel : false,
            isModlaOpenView: false,
            isModlaOpenEdit: false,
            viewform: false,

            selectedRow:{
                firstname: '',
                lastname:  '',
                street:  '',
                city :    '',
                state :   '',
                zip :     '',
                mobile :    '',
                email :     '',
            }, 
        

           

           /*
            touched: {
                 firstName: false,
                 lastName:  false,
                 street:    false,
                 city:      false,
                 state:     false,
                 zip:       false,
                 mobile:    false,
                 email:     false,


            },
            */
           
            rowdata: this.props.customer.customer
           
        };

    

        this.toggleModalAdd = this.toggleModalAdd.bind(this);
        this.toggleModalDel = this.toggleModalDel.bind(this);
        this.toggleModalView = this.toggleModalView.bind(this);
        this.toggleModalEdit = this.toggleModalEdit.bind(this);
        this.updateSelectedRow = this.updateSelectedRow.bind(this);


     
  
    }

    componentDidMount() {
     
   }

    onButtonClick = () => {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData  = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => node.custno + '' + node.firstname + '' + node.lastname).join(', ');
        alert(`Selected Node: ${selectedDataStringPresentation}`);
    }
  
    onGridReady = (params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;

        //this.api.sizeColumnsToFit();

        //this.calculateRowCount();
    };
    
/*
    toggleModal(action) {
        console.log(action);
     if (action === "Add") {
        this.setState({
            isModalOpenAdd: !this.state.isModalOpenAdd
        });
     }  
     
     if (action === "Del") {
        this.setState({
            isModalOpenDel: !this.state.isModalOpenDel
        });
     } 
     if (action === "View") {
        this.setState({
            isModalOpenView: !this.state.isModalOpenView
        });
     }
    }
    */
    
    toggleModalAdd() {
        this.setState({
            isModalOpenAdd: !this.state.isModalOpenAdd
        });
    }

   updateSelectedRow() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData  = selectedNodes.map(node => node.data);
    selectedData.forEach(node => {
         this.setState({
            
             selectedRow: Object.assign({}, this.state.selectedRow, {
                  custid: node.custid,
                  firstname: node.cust_firstname,
                  lastname: node.cust_lastname,
                  street: node.street,
                  city: node.city,
                  state:  node.state,
                  zip: node.zip,
                  mobile:  node.mobile,
                  email: node.email,
                  
             }),
         });  
           this.props.fetchCustWorkorder(this.state.selectedRow.custid);
    });

   }
    toggleModalEdit() {
       this.setState({
        isModalOpenEdit: !this.state.isModalOpenEdit,
       });

       this.updateSelectedRow();
    }
 
    toggleModalDel() {
        this.updateSelectedRow();
        this.setState({
            isModalOpenDel: !this.state.isModalOpenDel,
           
        });
    }
    toggleModalView() {
        
        this.setState({
            isModalOpenView: !this.state.isModalOpenView
        });
        this.updateSelectedRow();
    }

    handleSubmitDel() {
         this.props.deleteCustomer(this.state.selectedRow.custid);
         this.toggleModalDel();
    }
    
    render(){
        return (
            <React.Fragment>   
                <div className = "col-12 mt-2">
                        <h4>Customer</h4>
                </div> 

                {/* 
                <div className = "form-container">
                     {(this.state.viewform) ?
                         <Editcust 
                         resetCustomerForm={this.props.resetCustomerForm}  /> : ''}
                </div>
                     */}

                <div style={{height: 300, width: '100%'}} className="ag-theme-fresh">
                        
                        
                        <AgGridReact columnDefs={this.state.columnDefs} 
                                    rowData={this.props.customer.customer}
                                    rowSelection="single"
                                    onGridReady={params => this.gridApi = params.api}
                                    onRowSelected = {this.updateSelectedRow} 
                                 
                                
                        />
                        </div>
                        <div class = "row mt-1">
                            <div className= "col-6">
                                    <Button outline size="md" type="submit" color="dark"
                                             onClick={this.toggleModalAdd} >
                                        <GrIcons.GrFormAdd />
                                    </Button>{'  '}
                                    <Button outline size="md" type="submit" color="dark"
                                            onClick={this.toggleModalEdit}>
                                        <FiIcons.FiEdit3 /> 
                                    </Button>{'  '}
                                    <Button outline size="md" type="submit" color="dark"
                                               onClick={this.toggleModalDel}>
                                        <RiIcons.RiDeleteBinLine />  
                                    </Button>{'    '}
                            </div>
                                <div className = "col">
                                <Button outline size="md" type="submit" color="dark"
                                        onClick={this.toggleModalView}>
                                    <BiIcons.BiDetail /> 
                                    </Button>{'    '}
                                </div>
                        </div>
                    <div>
                </div>

                {/* add CUSTOMER */}
                <Modal isOpen={this.state.isModalOpenAdd} toggle={this.toggleModalAdd}>
                   <ModalHeader toggle={this.toggleModalAdd}>Add Customer</ModalHeader>
                    <ModalBody>
                        <CustformAdd addCustomer={this.props.addCustomer}
                                     toggleModalAdd ={this.toggleModalAdd} />
                    </ModalBody>
                </Modal>

                 {/* EDIT CUSTOMER */}
                 <Modal  isOpen={this.state.isModalOpenEdit} 
                         toggleModalEdit={this.toggleModalEdit}
                         >
                             
                   <ModalHeader toggle={this.toggleModalEdit}>Edit Customer</ModalHeader>
                    <ModalBody>
                        <CustformEdit  editCustomer={this.props.editCustomer}
                                       toggleModalEdit = {this.toggleModalEdit}
                                       selectedRow = {this.state.selectedRow}/>
                    </ModalBody>
                </Modal>

                 {/* VIEW CUSTOMER  */}
                 <Modal  isOpen={this.state.isModalOpenView} 
                         toggleModalEdit={this.toggleModalView}
                         >
                             
                   <ModalHeader toggle={this.toggleModalView}>View Customer</ModalHeader>
                    <ModalBody>
                        <CustformView 
                                      toggleModalEdit = {this.toggleModalView}
                                      selectedRow = {this.state.selectedRow}/>
                    </ModalBody>
                </Modal>

                
                {/* DELETE CUSTOMER */}
                <Modal isOpen={this.state.isModalOpenDel} toggle={this.toggleModalDel}>
                <LocalForm onSubmit={values => this.handleSubmitDel(this.state.custno)}>
                   <ModalHeader toggle={this.toggleModalDel}>Delete Customer</ModalHeader>
                    <ModalBody>
                        <span>Are you want to delete customer {this.state.selectedRow.custid} ?</span>
                        
                        <Row className = "form-group mt-2">
                            <Col md={{size: 5}}>
                                <Button outline type="submit" color="dark">
                                    Yes
                                </Button>
                                
                            </Col>
                        </Row>
                    </ModalBody>
                  </LocalForm>
                </Modal>
                
             </React.Fragment>
        );
    }
   
}

/* export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); */
export default connect(mapStateToProps, mapDispatchToProps)(Customergrid);
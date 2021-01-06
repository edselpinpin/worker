import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from "react-redux";
import { fetchService,addService,deleteService, editService} from '../actions/ActionCreators';
import { Modal, ModalBody, ModalHeader, Row, Col, Button } from 'reactstrap';
import { LocalForm} from 'react-redux-form';
import ServiceformAdd  from '../forms/ServiceBodyAdd';
import ServiceformEdit from '../forms/ServiceBodyEdit';
import ServiceformView from '../forms/ServiceBodyView';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';

import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

const mapStateToProps = state => {
    return {
        service: state.service,
    };
  };
  
const mapDispatchToProps = {
   
    addService:(serviceid, servicename, servicedescription, price) => (addService(serviceid, servicename, servicedescription, price)),
    editService:(serviceid, servicename, servicedescription, price) => (editService(serviceid, servicename, servicedescription, price)),
    deleteService:(serviceid) => (deleteService(serviceid))

     
}  

class Servicegrid extends Component {
    constructor (props) {
        super(props);
        this.state = {
            columnDefs: [
               { headerName: 'Service Code', field: 'serviceid', maxWidth: 140, sortable: true, filter: true, checkboxSelection: true, pinned: 'left'},
               { headerName: 'Service Name', field: 'servicename', maxWidth: 200, sortable: true, filter: true},
               { headerName: 'Price', field: 'price', maxWidth: 150, sortable: true, filter: true},
               { headerName: 'Description', field: 'servicedescription', maxWidth: 300, sortable: true, filter: true},
            ],

            isModalOpenAdd : false,
            isModalOpenDel : false,
            isModlaOpenView: false,
            isModlaOpenEdit: false,

            selectedRow:{
                serviceid: '',
                servicename:  '',
                servicedescription: '',
                price: '',
               
            },   

            
           
             rowdata: null
        };

        this.toggleModalAdd = this.toggleModalAdd.bind(this);
        this.toggleModalDel = this.toggleModalDel.bind(this);
        this.toggleModalView = this.toggleModalView.bind(this);
        this.toggleModalEdit = this.toggleModalEdit.bind(this);
        this.updateSelectedRow = this.updateSelectedRow.bind(this);

    }

    componentDidMount() {
       // this.props.fetchService();
       }



    onButtonClick = () => {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData  = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => node.custno + '' + node.firstname + '' + node.lastname).join(', ');
        alert(`Selected Node: ${selectedDataStringPresentation}`);
    }

    /*
    onGridReady = (params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;

         this.api.sizeColumnsToFit();

        //this.calculateRowCount();
    };
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
                  serviceid: node.serviceid,
                  servicename: node.servicename,
                  servicedescription: node.servicedescription,
                  price: node.price,
             }),
         });  
         console.log(this.state.selectedRow.firstName)   
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
         this.props.deleteService(this.state.selectedRow.serviceid);
         this.toggleModalDel();
    }



    render(){
        return (
            <React.Fragment>      
                <div class ="container">  
                <div className = "col-12 mt-2">
                        <h4>Service Menu</h4>
                </div>  

                <div style={{height: 300, width: '100%'}} className="ag-theme-fresh">
                       
                        
                        <AgGridReact columnDefs={this.state.columnDefs} 
                                     rowSelection="single" 
                                     rowData={this.props.service.service}
                                     onGridReady={params => this.gridApi = params.api}
                                
                        />
                </div>
                <div className = "row mt-1">
                            <div className= "col-6">
                                    <Button outline size="md" type="submit" color="dark"
                                             onClick={this.toggleModalAdd} >
                                        <GrIcons.GrFormAdd />
                                    </Button>{'  '}
                                    <Button outline size="md" type="submit" color="dark"
                                            onClick={this.toggleModalEdit} >
                                        <FiIcons.FiEdit3 /> 
                                    </Button>{'  '}
                                    <Button outline size="md" type="submit" color="dark"
                                           onClick={this.toggleModalDel} >
                                        <RiIcons.RiDeleteBinLine />  
                                    </Button>{'    '}
                            </div>
                                 
                                <div className = "col">
                                <Button outline size="md" type="submit" color="dark"
                                        onClick={this.toggleModalView} >
                                    <BiIcons.BiDetail /> 
                                    </Button>{'    '}
                                </div>
                                
                        </div>
                </div>  
                 {/* add Service */}
                 <Modal isOpen={this.state.isModalOpenAdd} toggle={this.toggleModalAdd}>
                   <ModalHeader toggle={this.toggleModalAdd}>Add Service Menu</ModalHeader>
                    <ModalBody>
                        <ServiceformAdd addService={this.props.addService}
                                     toggleModalAdd ={this.toggleModalAdd} />
                    </ModalBody>
                </Modal>

                 {/* EDIT SERVICE*/}
                 <Modal  isOpen={this.state.isModalOpenEdit} 
                         toggleModalEdit={this.toggleModalEdit}
                         >
                             
                   <ModalHeader toggle={this.toggleModalEdit}>Edit Service Menu</ModalHeader>
                    <ModalBody>
                        <ServiceformEdit  editService={this.props.editService}
                                      toggleModalEdit = {this.toggleModalEdit}
                                      selectedRow = {this.state.selectedRow}/>
                    </ModalBody>
                </Modal>

                 {/* VIEW SERVICE  */}
                 <Modal  isOpen={this.state.isModalOpenView} 
                         toggleModalEdit={this.toggleModalView}
                         >
                             
                   <ModalHeader toggle={this.toggleModalView}>View Service Menu</ModalHeader>
                    <ModalBody>
                        <ServiceformView toggleModalEdit = {this.toggleModalView}
                                          selectedRow = {this.state.selectedRow}/>
                    </ModalBody>
                </Modal>

                
                {/* DELETE CUSTOMER */}
                <Modal isOpen={this.state.isModalOpenDel} toggle={this.toggleModalDel}>
                <LocalForm onSubmit={values => this.handleSubmitDel()}>
                   <ModalHeader toggle={this.toggleModalDel}>Delete Service Menu</ModalHeader>
                    <ModalBody>
                        <span>Are you want to delete service menu {this.state.selectedRow.serviceid} ?</span>
                        
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

export default connect(mapStateToProps, mapDispatchToProps)(Servicegrid);
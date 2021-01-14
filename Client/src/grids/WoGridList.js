import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Modal, ModalBody, ModalHeader, Row, Col, Button } from 'reactstrap';
import { LocalForm} from 'react-redux-form';
import { connect } from "react-redux";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import  Wogriddtl  from '../grids/WoGridDtl';
import { addWorkorder, editWorkorder, deleteWorkorder, fetchWorkorder, fetchWorkorderDtl, checkInTech} from '../actions/ActionCreators';
import WoformAdd  from '../forms/WoBodyAdd';
import WoTechCheckIn from '../forms/WoTechCheckIn';
//import WoformEdit from '../forms/WoBodyEdit';
//import WoformView from '../forms/WoBodyView';
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import  {moment}  from 'react-moment';

import { now } from 'lodash-es';


const mapStateToProps = state => {
  
    return {
        customer: state.customer,
        workorder: state.workorder,
        workorderdtl: state.workorderdtl,
        tech: state.tech
      
    };
  };


  
  
const mapDispatchToProps = {
    fetchWorkorder:() => (fetchWorkorder()),
    fetchWorkorderDtl:(worderid) => (fetchWorkorderDtl(worderid)),
    addWorkorder:(custid, cust_firstname, cust_lastname, brand, model, promised_date, inst, status)  => (addWorkorder(custid, cust_firstname, cust_lastname, brand, model, promised_date, inst, status)),
    editWorkorder:(worderid, custid, cust_firstname, cust_lastname, brand, model, promised_date, inst) => (editWorkorder(worderid, custid, cust_firstname, cust_lastname, brand, model, promised_date, inst)),
    deleteWorkorder:(worderid) => (deleteWorkorder(worderid)),
    checkInTech:(worderid, techId, tech_firstname, tech_lastname, tech_datetime_in, status) => (checkInTech(worderid, techId, tech_firstname, tech_lastname, tech_datetime_in, status)),
  }

  

class Wogridlist extends Component {
       constructor(props) {
           super(props);
           this.state = {
               columnDefs:[
                   {headerName: 'Status', field: 'status', maxWidth: 170, sortable: true, checkboxSelection: true},
                   {headerName: 'WO #', field: 'worderid', maxWidth: 100, sortable: true, filter:true,selectable: false},
                   {headerName: 'CustID #', field: 'custid', maxWidth: 100, sortable: true, filter:true},
                   {headerName: 'First Name', field: 'cust_firstname', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Last Name', field: 'cust_lastname', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Brand', field: 'brand', maxWidth: 100},
                   {headerName: 'Model', field: 'model', maxWidth: 100},
                   {headerName: 'Promised Date', field: 'promised_date', 
                      cellRenderer: (data) => {
                        return data.value ? (new Date(data.value)).toDateString() : '';
                        },
                   
                   maxWidth: 200, sortable: true, filter:true},
                   {headerName: 'Date Created', field: 'date_created',
                   cellRenderer: (data) => {
                    return data.value ? (new Date(data.value)).toDateString() : '';
                    },
                   
                   maxWidth: 200, sortable: true, filter:true},
                  // {headerName: 'Inst', field: 'inst', maxWidth: 500},
                   {headerName: 'TechID', field: 'techid', maxWidth: 85, sortable: true, filter:true},
                   {headerName: 'First Name', field: 'tech_firstname', maxWidth: 150, sortable: true},
                   {headerName: 'Last Name', field: 'tech_lastname', maxWidth: 150, sortable: true},
                   {headerName: 'DateTime-In', field: 'tech_datetime_in', maxWidth: 250,
                      cellRenderer: (data) => {
                          return  data.value ? (new Date(data.value)).toUTCString() : '';
                             }
                    },
                   
                   
                   {headerName: 'DateTime-Out', field: 'tech_datetime_out',
                   cellRenderer: (data) => {
                      return data.value ? (new Date(data.value)).toLocaleDateString() : '';
                   },
                }

               
               ],

               selectedRow:{
                status: '',
                worderid: '',
                custid: '',
                cust_firstname: '',
                cust_lastname: '',
                model: '',
                brand:  '',
                inst: '',
                promised_date: '',
                date_created: '',
                techid: '',
                tech_firstname: '',
                tech_lastname: '',
        },
                rowData: this.props.workorder.workorder
    }

           this.toggleModalAdd = this.toggleModalAdd.bind(this);
           this.toggleModalDel = this.toggleModalDel.bind(this);
           this.toggleModalView = this.toggleModalView.bind(this);
           this.toggleModalEdit = this.toggleModalEdit.bind(this);
           this.toggleModalCheckInTech = this.toggleModalCheckInTech.bind(this);
           this.updateSelectedRow = this.updateSelectedRow.bind(this);
           
         
    }

    componentDidMount() {
        this.props.fetchWorkorder();
      
    }

    onGridReady = (params) => {
   
       
        //this.api.sizeColumnsToFit();
        //this.calculateRowCount();
       // this.gridApi.forEachNode(node => node.rowIndex ? 0 : node.setSelected(true));
    };

    onRowDataChanged = (params) => {
        this.gridApi = params.api 
        this.gridApi.forEachNode(node => node.rowIndex ? 0 : node.setSelected(true));
    }

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
                  status: node.status,
                  worderid: node.worderid,
                  custid: node.custid,
                  cust_firstname: node.cust_firstname,
                  cust_lastname: node.cust_lastname,
                  model: node.model,
                  brand:  node.brand,
                  inst: node.inst,
                  promised_date: node.promised_date,
                  date_created: node.date_create,
                  techid: node.techid,
                  tech_firstname: node.tech_firstname,
                  tech_lastname: node.tech_lastname,
             }),
         });  
    });

    
    this.props.fetchWorkorderDtl(this.state.selectedRow.worderid);
    
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
         this.props.deleteWorkorder(this.state.selectedRow.worderid);
         this.toggleModalDel();
    }

    toggleModalCheckInTech() {
       this.setState({
           isModalCheckInTech: !this.state.isModalCheckInTech
       })
    }

       render() {
        return (
            <React.Fragment> 
                    <div className = "col-12 mt-2">
                        <h4>Work Order</h4>
                </div> 
                <div style={{height: 150, width: '100%'}} className="ag-theme-fresh">
                        
                        
                        <AgGridReact columnDefs={this.state.columnDefs} 
                                     rowData={this.props.workorder.workorder}
                                     rowSelection="single"
                                    // onGridReady={params => this.gridApi = params.api}
                                     onGridReady={this.onGridReady}
                                     onRowSelected = {this.updateSelectedRow} 
                                     onRowDataChanged ={this.onRowDataChanged}
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
                                    <Button outline size="md" type="submit" color="dark"
                                        onClick={this.toggleModalView}>
                                    <BiIcons.BiDetail /> 
                                    </Button>{' '}
                            </div>
                                <div className = "col">
                               

                                    <Button outline size="md" type="submit" color="dark"
                                        onClick={this.toggleModalCheckInTech}>
                                    <AiIcons.AiOutlineClockCircle/> 
                                    </Button>{'    '}
                                </div>

                               
                        </div>
                    <div>
                </div>
               
               
                {/* add CUSTOMER */}
                <Modal isOpen={this.state.isModalOpenAdd} toggle={this.toggleModalAdd}>
                   <ModalHeader toggle={this.toggleModalAdd}>Add Work Order</ModalHeader>
                    <ModalBody>
                        <WoformAdd 
                                   addWorkorder = {this.props.addWorkorder}
                                   toggleModalAdd ={this.toggleModalAdd}  
                                   customer = {this.props.customer} />
                    </ModalBody>
                </Modal>

                 {/* 
                 <Modal  isOpen={this.state.isModalOpenEdit} 
                         toggleModalEdit={this.toggleModalEdit}
                         >
                            
                   <ModalHeader toggle={this.toggleModalEdit}>Edit Work Order</ModalHeader>
                    <ModalBody>
                        <WoformEdit  editCustomer={this.props.editCustomer}
                                      toggleModalEdit = {this.toggleModalEdit}
                                      selectedRow = {this.state.selectedRow}/>
                    </ModalBody>
                </Modal>

                
                 <Modal  isOpen={this.state.isModalOpenView} 
                         toggleModalEdit={this.toggleModalView}
                         >
                             
                   <ModalHeader toggle={this.toggleModalView}>View Work Order</ModalHeader>
                    <ModalBody>
                        <WoformView 
                                      toggleModalEdit = {this.toggleModalView}
                                      selectedRow = {this.state.selectedRow}/>
                    </ModalBody>
                </Modal>
                 */}



                
                {/* DELETE CUSTOMER */}
                <Modal isOpen={this.state.isModalOpenDel} toggle={this.toggleModalDel}>
                <LocalForm onSubmit={values => this.handleSubmitDel(this.state.custno)}>
                   <ModalHeader toggle={this.toggleModalDel}>Delete Work Order</ModalHeader>
                    <ModalBody>
                        <span>Do you want to delete this work order {this.state.selectedRow.worderid} ?</span>
                        
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

                <Modal isOpen={this.state.isModalCheckInTech} toggle={this.toggleModalChecInTech}>
                   <ModalHeader toggle={this.toggleModalCheckInTech}>Check In Technician</ModalHeader>
                    <ModalBody>
                        <WoTechCheckIn 
                                   checkInTech = {this.props.checkInTech}
                                   toggleModalCheckInTech ={this.toggleModalCheckInTech}  
                                   tech = {this.props.tech} 
                                   currworderid ={this.state.selectedRow.worderid} />
                    </ModalBody>
                </Modal>
                 
                


                <div className = "row">
                  <div className = "col-12 mt-3">
                      <Wogriddtl
                          getWOid      = {this.updateSelectedRow}
                          currworderid ={this.state.selectedRow.worderid}
                         />
                 </div>
               </div>     


            </React.Fragment>
        );
       }
}
export default connect(mapStateToProps,mapDispatchToProps)(Wogridlist);

 
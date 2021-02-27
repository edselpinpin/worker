import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Modal, ModalBody, ModalHeader, Row, Col, Button } from 'reactstrap';
import { LocalForm} from 'react-redux-form';
import { connect } from "react-redux";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import  Wogriddtl  from '../grids/WoGridDtl';
import  WogriddtlParts from '../grids/WoGridDtlPrt';
import { addWorkorder, editWorkorder, deleteWorkorder, fetchWorkorder, fetchWorkorderDtl, checkInTech, checkOutTech, closeWorkorder,fetchWorkorderDtlParts} from '../actions/ActionCreators';
import WoformAdd  from '../forms/WoBodyAdd';
import WoTechCheckIn from '../forms/WoTechCheckIn';
import WoTechCheckOut from '../forms/WoTechCheckOut';
import WoformEdit from '../forms/WoBodyEdit';
import WoformView from '../forms/WoBodyView';
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';


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
  
    fetchWorkorderDtl:(worderid) => (fetchWorkorderDtl(worderid)),
    fetchWorkorderDtlParts:(worderid) => (fetchWorkorderDtlParts(worderid)),
    addWorkorder:(custid, cust_firstname, cust_lastname, brand, model, promised_date, inst, status)  => (addWorkorder(custid, cust_firstname, cust_lastname, brand, model, promised_date, inst, status)),
    editWorkorder:(worderid, custid, brand, model, promised_date, inst) => (editWorkorder(worderid, custid, brand, model, promised_date, inst)),
    deleteWorkorder:(worderid) => (deleteWorkorder(worderid)),
    checkInTech:(worderid, techId, status) => (checkInTech(worderid, techId, status)),
    checkOutTech:(worderid, techId, tech_firstname, tech_lastname, tech_datetime_out, status) => (checkOutTech(worderid, techId, tech_firstname, tech_lastname, tech_datetime_out, status)), 
    closeWorkorder:(worderid) => (closeWorkorder(worderid)),
}

  

class Wogridlist extends Component {
       constructor(props) {
           super(props);
           this.state = {
               columnDefs:[
                   {headerName: 'Status', field: 'status', maxWidth: 170, sortable: true, checkboxSelection: true, pinned: 'left'},
                   {headerName: 'WO #', field: 'worderid', maxWidth: 100, sortable: true, filter:true,selectable: false, pinned: 'left'},
                   {headerName: 'CustID #', field: 'custid', maxWidth: 100, sortable: true, filter:true, pinned: 'left'},
                   {headerName: 'First Name', field: 'cust_firstname', maxWidth: 150, sortable: true, filter:true, pinned: 'left'},
                   {headerName: 'Last Name', field: 'cust_lastname', maxWidth: 150, sortable: true, filter:true,pinned: 'left'},
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
                                      
                    {headerName: 'DateTime-Out', field: 'tech_datetime_out',maxWidth: 250,
                        cellRenderer: (data) => {
                              return  data.value ? (new Date(data.value)).toUTCString() : '';
                        }
                    },
                  
                    {headerName: 'Amount', field: 'amount',maxWidth: 250,
                    valueFormatter: params => params.data.amount.toFixed(2),
                    },
                  
                   
                   
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
           this.toggleModalCheckOutTech = this.toggleModalCheckOutTech.bind(this);
           this.toggleModalCloseWo = this.toggleModalCloseWo.bind(this);
           this.updateSelectedRow = this.updateSelectedRow.bind(this);
         
    }

    componentDidMount() {
       // this.props.fetchWorkorder();
      
    }

    onGridReady = (params) => {
        this.gridApi = params.api   
    };

    onRowDataChanged = (params) => {
        this.gridApi = params.api 
        this.selectFirstGrid();
       // this.gridApi.forEachNode(node => node.worderid ? '60' : node.setSelected(true))
       /*
        this.gridApi.forEach((node) => {
            console.log(node.woederid)
        })
        */
    }

    toggleModalAdd() {
        
        this.setState({
            isModalOpenAdd: !this.state.isModalOpenAdd
        });
       
    }

   selectFirstGrid() {
    this.gridApi.forEachNode(node => node.rowIndex ? 0 : node.setSelected(true)); 
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
    this.props.fetchWorkorderDtlParts(this.state.selectedRow.worderid);
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
        if (this.state.selectedRow.status === "Open" || 
            this.state.selectedRow.status === "Complete"  ) {  
              this.setState({
              isModalCheckInTech: !this.state.isModalCheckInTech

             })

                     
                
             
            
        }
        else {
            alert('Work Order Status not Open or Complete')   
        }     
    }

    toggleModalCheckOutTech(){
         if (this.state.selectedRow.status === "Work in Progress") {
            this.setState({
                isModalCheckOutTech: !this.state.isModalCheckOutTech
            })
         }
         
         else {
             alert('Work Order Status not in Work in Progress')
         }
         
       

    }

    toggleModalCloseWo() {
        if (this.state.selectedRow.status === "Complete") {
            this.setState({
                isModalWorkOrderClose: !this.state.isModalWorkOrderClose
            })
         }
         else {
             alert('Work Order Status not Complete')
         }
        
    }

    handleSubmitCloseWorkOrder() {
    
        let newCustArr = [];
        this.props.closeWorkorder(this.state.selectedRow.worderid);
        newCustArr  =  this.props.customer.customer.filter(customer => customer.custid === this.state.selectedRow.custid);
        const email  =  newCustArr.map(customer => customer.email);
    
       

        this.toggleModalCloseWo();  
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

                                    <Button outline size="md" type="submit" color="dark"
                                        onClick={this.toggleModalCheckOutTech}>
                                    <BiIcons.BiTimer/> 
                                    </Button>{'    '}

                                </div>

                                <div className = "col">
                                    <Button outline size="md" type="submit" color="dark"
                                        onClick={this.toggleModalCloseWo}>
                                    <GrIcons.GrCompliance/> 
                                    </Button>{'    '}

                                    

                                </div>

                        </div>
                    <div>
                </div>
               
               
                {/* add workorder */}
                <Modal isOpen={this.state.isModalOpenAdd} toggle={this.toggleModalAdd}>
                   <ModalHeader toggle={this.toggleModalAdd}>Add Work Order</ModalHeader>
                    <ModalBody>
                        <WoformAdd 
                                   addWorkorder = {this.props.addWorkorder}
                                   toggleModalAdd ={this.toggleModalAdd}  
                                   customer = {this.props.customer} />
                    </ModalBody>
                </Modal>

                 {/* Edit work order */}
                 <Modal  isOpen={this.state.isModalOpenEdit} 
                         toggleModalEdit={this.toggleModalEdit}
                         >
                            
                   <ModalHeader toggle={this.toggleModalEdit}>Edit Work Order</ModalHeader>
                    <ModalBody>
                        <WoformEdit   editWorkOrder = {this.props.editWorkorder}
                                      toggleModalEdit = {this.toggleModalEdit}
                                      selectedRow = {this.state.selectedRow}
                                      customer = {this.props.customer}
                                      />
                    </ModalBody>
                </Modal>

                
                  { /* View work order */}  
                 <Modal  isOpen={this.state.isModalOpenView} 
                         toggleModalEdit={this.toggleModalView}
                         >
                             
                   <ModalHeader toggle={this.toggleModalView}>View Work Order</ModalHeader>
                    <ModalBody>
                        <WoformView 
                                      toggleModalView = {this.toggleModalView}
                                      selectedRow = {this.state.selectedRow}
                                      customer = {this.props.customer} 
                                      />
                    </ModalBody>
                </Modal>
                 
                
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

                {/* check-in workorder */}
                <Modal isOpen={this.state.isModalWorkOrderClose} toggle={this.toggleModalCloseWo}>
                   <ModalHeader toggle={this.toggleModalCloseWo}>Close Work Order </ModalHeader>
                   <LocalForm onSubmit={values => this.handleSubmitCloseWorkOrder()}>
                    <ModalBody>
                      <span>Do you want to close this WorkOrer : {this.state.selectedRow.worderid} ?</span>
                        
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

                 {/* check-in workorder */}

                <Modal isOpen={this.state.isModalCheckInTech} toggle={this.toggleModalCheckInTech}>
                   <ModalHeader toggle={this.toggleModalCheckInTech}>Check In Work Order</ModalHeader>
                    <ModalBody>
                        
                        <WoTechCheckIn 
                                   tech = {this.props.tech}
                                   checkInTech = {this.props.checkInTech}
                                   toggleModalCheckInTech ={this.toggleModalCheckInTech}  
                                   currworderid ={this.state.selectedRow.worderid} 
                                   selectedWORow = {this.state.selectedRow} 
                                   workorder = {this.props.workorder.workorder.filter(workorder => workorder.worderid === this.state.selectedRow.worderid)}        />
                        
                    </ModalBody>
                </Modal>

                { /* Close out Order */ }
                <Modal isOpen={this.state.isModalCheckOutTech} toggle={this.toggleModalChecOutTech}>
                   <ModalHeader toggle={this.toggleModalCheckOutTech}>Check Out Work Order</ModalHeader>
                    <ModalBody>
                        <WoTechCheckOut 
                                   checkOutTech = {this.props.checkOutTech}
                                   toggleModalCheckOutTech ={this.toggleModalCheckOutTech}  
                                   currworderid ={this.state.selectedRow.worderid} 
                                   workorder = {this.props.workorder.workorder.filter(workorder => workorder.worderid === this.state.selectedRow.worderid)}        />

                    </ModalBody>
                </Modal>
  
                <div className = "row">
                  <div className = "col-6 mt-3">
                      <Wogriddtl
                         selectedWORow  = {this.state.selectedRow}
                         />
                 </div>
                 <div className = "col-6 mt-3">
                      <WogriddtlParts
                          selectedWORow  = {this.state.selectedRow}
                         />
                 </div>


               </div>     


            </React.Fragment>
        );
       }
}
export default connect(mapStateToProps,mapDispatchToProps)(Wogridlist);

 
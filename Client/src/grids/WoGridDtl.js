import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Modal, ModalBody, ModalHeader, Row, Col, Button, Alert } from 'reactstrap';
import { LocalForm} from 'react-redux-form';
import { connect } from "react-redux";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import { addWorkorderDtl, deleteWorkorderDtl, fetchWorkorderDtl} from '../actions/ActionCreators';
import WoformAddDtl  from '../forms/WoBodyAddDtl';
//import WoformEdit from '../forms/WoBodyEdit';
//import WoformView from '../forms/WoBodyView';
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';




const mapStateToProps = state => {
  
    return {
        workorderdtl: state.workorderdtl,
        workorder: state.workorder,
        service: state.service,
      
    };
  };
  
  
const mapDispatchToProps = {
    fetchWorkorderDtl:(worderid) => (fetchWorkorderDtl(worderid)),
    addWorkorderDtl:(worderid, serviceid, serivename, servicedecription, price)  => (addWorkorderDtl(worderid, serviceid, serivename, servicedecription, price)),    
    deleteWorkorderDtl:(worderdtlid, worderid) => (deleteWorkorderDtl(worderdtlid, worderid)),
  }

  

class Wogriddtl extends Component {
       constructor(props) {
           super(props);
           this.state = {
               columnDefs:[
                   {headerName: 'WO DTL#', field: 'worderdtlid', maxWidth: 100, sortable: true, filter:true, checkboxSelection: true, hide: true},
                   {headerName: 'WO ID', field: 'worderid', maxWidth: 100, sortable: true, filter:true, checkboxSelection: true, pinned: 'left'},
                   {headerName: 'Service Code', field: 'serviceid', maxWidth: 100, sortable: true, filter:true, pinned: 'left'},
                   {headerName: 'Service Name', field: 'servicename', maxWidth: 300, sortable: true, filter:true},
                   {headerName: 'Description', field: 'servicedescription', maxWidth: 500, sortable: true, filter:true},
                   {headerName: 'Price', field: 'price', maxWidth: 500, sortable: true, filter:true},

               ],
               selectedRow:{
                worderdtlid: '',
                serviceid: '',
                desscription: '',
                price: '',
        },
               rowData: []
    }

           this.toggleModalAdd = this.toggleModalAdd.bind(this);
           this.toggleModalDel = this.toggleModalDel.bind(this);
           this.toggleModalView = this.toggleModalView.bind(this);
           this.toggleModalEdit = this.toggleModalEdit.bind(this);
           this.updateSelectedRow = this.updateSelectedRow.bind(this);
   
    }

    onRowDataChanged = (param) => {
        this.gridApi = param.api
        this.gridApi.forEachNode(node => node.rowIndex ? 0 : node.setSelected(true));  // select the first row 

    }

    

    toggleModalAdd() {
        if (this.props.selectedWORow.status === 'Open' || 
            this.props.selectedWORow.status === 'Work in Progress') {
                this.setState({
                    isModalOpenAdd: !this.state.isModalOpenAdd
                });
        }
        else {
            alert('Work Order not Open or Work in Progress')
        }
       
    }

   updateSelectedRow() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData  = selectedNodes.map(node => node.data);
    selectedData.forEach(node => {
         this.setState({
             selectedRow: Object.assign({}, this.state.selectedRow, {
                  worderdtlid: node.worderdtlid,
                  worderid: node.worderid,
                  serviceid: node.serviceid,
                  servicename: node.servicename,
                  price: node.price,
             }),
         });  
        
    });

   }
    toggleModalEdit() {
        if (this.props.selectedWORow.status === 'Open' || 
        this.props.selectedWORow.status === 'Work in Progress') {
            this.setState({
                isModalOpenEdit: !this.state.isModalOpenEdit,
            });
            this.updateSelectedRow();
        }
        else {
            alert('Work Order not Open or Work in Progress')
        }

    }
 
    toggleModalDel() {
        if (this.props.selectedWORow.status === 'Open' || 
        this.props.selectedWORow.status === 'Work in Progress') {
        this.updateSelectedRow();
        this.setState({
            isModalOpenDel: !this.state.isModalOpenDel,
        });
      }
    else {
       // alert('Work Order not Open or Work in Progress')
       <Alert variant="danger">Work Order not Open or Work in Progress</Alert>
    }


    }
    toggleModalView() {
        
        this.setState({
            isModalOpenView: !this.state.isModalOpenView
        });
        this.updateSelectedRow();
    }

    handleSubmitDel() {
         this.props.deleteWorkorderDtl(this.state.selectedRow.worderdtlid,
                                       this.state.selectedRow.worderid
                                       );
          this.props.fetchWorkorderDtl(this.state.selectedRow.worderid);
         this.toggleModalDel();
    }

       render() {
        return (
            <React.Fragment> 
                    <div className = "col-6 mt-2">
                        <h4>Service Details</h4>
                </div> 
                <div style={{height: 200, width: '100%'}} className="ag-theme-fresh">
                        
                        
                        <AgGridReact columnDefs={this.state.columnDefs} 
                                     rowData={this.props.workorderdtl.workorderdtl}
                                     rowSelection="single"
                                     onGridReady={params => this.gridApi = params.api}
                                     onRowDataChanged={this.onRowDataChanged}
                        />
                        </div>
                        <div class = "row mt-1">
                            <div className= "col-6">
                                    <Button outline size="md" type="submit" color="dark"
                                             onClick={this.toggleModalAdd} >
                                        <GrIcons.GrFormAdd />
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
                   <ModalHeader toggle={this.toggleModalAdd}>Add Work Order Detail</ModalHeader>
                    <ModalBody>
                        <WoformAddDtl
                                     addWorkorderDtl = {this.props.addWorkorderDtl}
                                     toggleModalAdd ={this.toggleModalAdd} 
                                     service = {this.props.service}
                                     selectedWORow = {this.props.selectedWORow}
                                    />
                    </ModalBody>
                </Modal>

             
                
                {/* delete work order detail */}
                <Modal isOpen={this.state.isModalOpenDel} toggle={this.toggleModalDel}>
                <LocalForm onSubmit={values => this.handleSubmitDel(this.state.selectedRow.worderdtlid)}>
                   <ModalHeader toggle={this.toggleModalDel}>Delete Work Order Detail</ModalHeader>
                    <ModalBody>
                        <span>Are you want to delete work order detail  {this.state.selectedRow.worderdtlid} ?</span>
                        
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
export default connect(mapStateToProps,mapDispatchToProps)(Wogriddtl);

 
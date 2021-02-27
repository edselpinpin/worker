import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Modal, ModalBody, ModalHeader, Row, Col, Button } from 'reactstrap';
import { LocalForm} from 'react-redux-form';
import { connect } from "react-redux";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import { addWorkorderDtlParts, editWorkorderDtlParts, deleteWorkorderDtlParts, fetchWorkorderDtlParts} from '../actions/ActionCreators';
import WoformDtlAddParts  from '../forms/WoBodyAddDtlParts';
import WoformDtlEditParts from '../forms/WoBodyEditDtlParts';
//import WoformView from '../forms/WoBodyView';
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import { startCase } from 'lodash-es';


const mapStateToProps = state => {
  
    return {
        
        workorder: state.workorder,
        workoderparts: state.workoderparts
      
    };
  };
  
  
const mapDispatchToProps = {
    fetchWorkorderDtlParts:(worderid) => (fetchWorkorderDtlParts(worderid)),
    addWorkorderDtlParts:(worderid, partsname, price)  => (addWorkorderDtlParts(worderid, partsname, price)),    
    editWorkorderDtlParts:(worderid, partsid, partsname, price) => (editWorkorderDtlParts(worderid, partsid, partsname, price)),
    deleteWorkorderDtlParts:(partsid, worderid) => (deleteWorkorderDtlParts(partsid, worderid)),
  }

  

class WogriddtlPrt extends Component {
       constructor(props) {
           super(props);
           this.state = {
               columnDefs:[
                   {headerName: 'WO DTL Part#', field: 'partsid', maxWidth: 100, sortable: true, filter:true, checkboxSelection: true, hide: true},
                   {headerName: 'WO ID', field: 'worderid', maxWidth: 100, sortable: true, filter:true, checkboxSelection: true },
                   {headerName: 'Part Name', field: 'partsname', maxWidth: 400, sortable: true, filter:true},
                   {headerName: 'Price', field: 'price', maxWidth: 300,
                   valueFormatter: params => params.data.price.toFixed(2),
                  
                   },
                  
               ],
               selectedRow:{
                partsid: '',
                worderid: '',
                partsname: '',
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
        this.props.selectedWORow.status === 'Work in Progress') 
        {   
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
                  partsid: node.partsid,
                  worderid: node.worderid,
                  partsname: node.partsname,
                  price: node.price,
             }),
         });  
        
    });

   }
    toggleModalEdit() {
        if (this.props.selectedWORow.status === 'Open' || 
        this.props.selectedWORow.status === 'Work in Progress') 
        {   
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
        this.props.selectedWORow.status === 'Work in Progress') 
        {   
            this.updateSelectedRow();
            this.setState({
                isModalOpenDel: !this.state.isModalOpenDel,
            
            });
        }
        else {
            alert('Work Order not Open or Work in Progress')  
        }    
    }
    toggleModalView() {
        
        this.setState({
            isModalOpenView: !this.state.isModalOpenView
        });
        this.updateSelectedRow();
    }

    handleSubmitDel() {

         this.props.deleteWorkorderDtlParts(this.state.selectedRow.partsid,
                                            this.state.selectedRow.worderid
                                       );
          this.props.fetchWorkorderDtlParts(this.state.selectedRow.worderid);
         this.toggleModalDel();
    }

       render() {
        return (
            <React.Fragment> 
                    <div className = "col-6 mt-2">
                        <h4>Parts/Materials Details</h4>
                </div> 
                <div style={{height: 200, width: '100%'}} className="ag-theme-fresh">
                        
                        
                        <AgGridReact columnDefs={this.state.columnDefs} 
                                     rowData = {this.props.workoderparts.workoderparts}
                                     rowSelection="single"
                                     //onGridReady={params => this.gridApi = params.api}
                                     onGridReady={this.onGridReady}
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

                <Modal isOpen={this.state.isModalOpenAdd} toggle={this.toggleModalAdd}>
                   <ModalHeader toggle={this.toggleModalAdd}>Add Work Order Parts/Materials</ModalHeader>
                    <ModalBody>
                        <WoformDtlAddParts
                                     addWorkorderDtlParts = {this.props.addWorkorderDtlParts}
                                     toggleModalAdd ={this.toggleModalAdd} 
                                     selectedWORow = {this.props. selectedWORow}
                                     />
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalOpenEdit} toggle={this.toggleModalEdit}>
                   <ModalHeader toggle={this.toggleModalEdit}>Edit Work Order Parts/Materials</ModalHeader>
                    <ModalBody>
                        <WoformDtlEditParts
                                     editWorkorderDtlParts = {this.props.editWorkorderDtlParts}
                                     toggleModalEdit ={this.toggleModalEdit}
                                     selectedRow = {this.state.selectedRow}
                                    />
                    </ModalBody>
                </Modal>

                
                
                <Modal isOpen={this.state.isModalOpenDel} toggle={this.toggleModalDel}>
                <LocalForm onSubmit={values => this.handleSubmitDel()}>
                   <ModalHeader toggle={this.toggleModalDel}>Delete Work Order Parts/Material Detail</ModalHeader>
                    <ModalBody>
                        <span>Are you want to delete work order detail  {this.state.selectedRow.partsid} ?</span>
                        
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
                *
            </React.Fragment>

        );
       }
}
export default connect(mapStateToProps,mapDispatchToProps)(WogriddtlPrt);

 
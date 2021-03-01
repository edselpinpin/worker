import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from "react-redux";
import { fetchTech, addTech, editTech, deleteTech } from '../actions/ActionCreators';
import { Modal, ModalBody, ModalHeader, Row, Col, Button } from 'reactstrap';
import { LocalForm} from 'react-redux-form';
import TechformAdd  from '../forms/TechBodyAdd';
import TechformEdit from '../forms/TechBodyEdit';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';



import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

const mapStateToProps = state => {
    return {
        tech: state.tech
    }
}

const mapDispatchToProps = {
    
  
    addTech:(techid,firstname,lastname) => (addTech(techid,firstname,lastname)),
    editTech:(techid,firstname,lastname) => (editTech(techid,firstname,lastname)),
    deleteTech:(techid) => (deleteTech(techid))

}


class Techgrid extends Component {
    constructor (props) {
        super(props);
        this.state = {
            columnDefs: [
               { headerName: 'Tech Code', field: 'techid', maxWidth: 100, sortable: true, filter: true, checkboxSelection: true, pinned: 'left'},
               { headerName: 'First Name', field: 'tech_firstname', sortable: true, filter: true},
               { headerName: 'Last Name', field: 'tech_lastname', maxWidth: 150, sortable: true, filter: true},
            ],
            isModalOpenAdd : false,
            isModalOpenDel : false,
            isModlaOpenView: false,
            isModlaOpenEdit: false,

            selectedRow:{
                techid: '',
                firstname:  '',
                lastname: '',
            },    


             rowdata: []
        };

        this.toggleModalAdd = this.toggleModalAdd.bind(this);
        this.toggleModalDel = this.toggleModalDel.bind(this);
       
        this.toggleModalEdit = this.toggleModalEdit.bind(this);
        this.updateSelectedRow = this.updateSelectedRow.bind(this);
    }

    componentDidMount() {
       // this.props.fetchTech();
    }
  /*
    onButtonClick = () => {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData  = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => node.custno + '' + node.firstname + '' + node.lastname).join(', ');
        alert(`Selected Node: ${selectedDataStringPresentation}`);
    }

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
                  techid: node.techid,
                  firstname: node.firstname,
                  lastname: node.lastname,
                  
             }),
         });  
         
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
   
    handleSubmitDel() {
         this.props.deleteTech(this.state.selectedRow.techid);
         this.toggleModalDel();
    }

    render(){
        return (
            <React.Fragment>      
                <div class ="container">  
                <div className = "col-12 mt-2">
                        <h4>Technicians</h4>
                </div>  
                <div style={{height: 220, width: '100%'}} className="ag-theme-fresh">
                        <AgGridReact  columnDefs={this.state.columnDefs} 
                                      rowSelection="single"
                                      rowData={this.props.tech.tech}
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
                              
                        </div>
                </div>  
                     {/* ADD TECH */}
                     <Modal isOpen={this.state.isModalOpenAdd} toggle={this.toggleModalAdd}>
                    <ModalHeader toggle={this.toggleModalAdd}>Add Technician</ModalHeader>
                        <ModalBody>
                            <TechformAdd addTech={this.props.addTech}
                                        toggleModalAdd ={this.toggleModalAdd} />
                        </ModalBody>
                </Modal>

                 {/* EDIT TECH*/}
                 <Modal  isOpen={this.state.isModalOpenEdit} 
                         toggleModalEdit={this.toggleModalEdit}
                         >
                             
                   <ModalHeader toggle={this.toggleModalEdit}>Edit Technician</ModalHeader>
                    <ModalBody>
                        <TechformEdit editTech={this.props.editTech}
                                      toggleModalEdit = {this.toggleModalEdit}
                                      selectedRow = {this.state.selectedRow}/>
                    </ModalBody>
                </Modal>

                

                
                {/* DELETE TECH */}
                <Modal isOpen={this.state.isModalOpenDel} toggle={this.toggleModalDel}>
                <LocalForm onSubmit={values => this.handleSubmitDel()}>
                   <ModalHeader toggle={this.toggleModalDel}>Delete Technician</ModalHeader>
                    <ModalBody>
                        <span>Are you want to delete technician {this.state.selectedRow.techid} ?</span>
                        
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

export default connect(mapStateToProps, mapDispatchToProps)(Techgrid);
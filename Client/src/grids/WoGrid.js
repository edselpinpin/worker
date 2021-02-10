import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'reactstrap';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import * as BiIcons from 'react-icons/bi';

class Wogrid extends Component {
       constructor(props) {
           super(props);
           this.state = {
               columnDefs:[
                   {headerName: 'WO #', field: 'worderid', maxWidth: 100, sortable: true, filter:true},
                   {headerName: 'Promised Date', field: 'promised_date', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Brand', field: 'brand', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Model', field: 'model', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Amount', field: 'amount'},
               ],
               rowData: []
           }
       }

       render() {
        return (
            <React.Fragment>   
             <div className = "col-12 mt-2">
                <h4>WO History</h4>
            </div>     
            <div style={{height: 300, width: '100%'}} className="ag-theme-fresh">
                
                    <AgGridReact columnDefs={this.state.columnDefs} 
                                 rowSelection="single"
                                 rowData = {this.props.workorders}
                        
                    />
              
            </div>
            <div className = "col-4 mt-1">
                    <Button outline size="md" type="submit" color="dark">
                        <BiIcons.BiDetail /> 
                    </Button>
            </div>
                        

            </React.Fragment>
        
        );
       }
}

 export default Wogrid;
 
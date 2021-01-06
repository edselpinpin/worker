import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';

class Techload extends Component {
       constructor(props) {
           super(props);
           this.state = {
               columnDefs:[
                   {headerName: 'TechID', field: 'techid', maxWidth: 100, sortable: true, filter:true},
                   {headerName: 'First Name', field: 'firstName', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Last Name', field: 'lastName', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Count', field: 'woCount'}
               ],
               rowData: []
           }
       }

       render() {
        return (
            <React.Fragment>   
            <div style={{height: 230, width: '100%'}} className="ag-theme-fresh">
                <hr/>   
                    <AgGridReact columnDefs={this.state.columnDefs} 
                                  rowSelection="single"
                                 rowData = {this.state.rowData}
                        
                    />
                <hr/>
            </div>
            </React.Fragment>
        
        );
       }
}

 export default Techload;
 
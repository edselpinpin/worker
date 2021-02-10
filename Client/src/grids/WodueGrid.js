import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';

class Wodue extends Component {
       constructor(props) {
           super(props);
           this.state = {
               columnDefs:[
                   {headerName: 'WO #', field: 'worderid', maxWidth: 100, sortable: true, filter:true},


                   {headerName: 'Promised Date', field: 'promised_date', 
                    cellRenderer: (data) => {
                     return data.value ? (new Date(data.value)).toDateString() : '';
                     }},
                  
                   {headerName: 'First Name', field: 'cust_firstname', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Last Name', field: 'cust_lastname', maxWidth: 150, sortable: true, filter:true},
                   {headerName: 'Mobile', field: 'mobile'}
          
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
                                  rowData = {this.props.workorders}
                        
                    />
                <hr/>
            </div>
            </React.Fragment>
        
        );
       }
}

 export default Wodue;
 
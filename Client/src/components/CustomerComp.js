import React, { Component } from 'react';
import Customergrid from '../grids/CustomerGrid';
import Wogrid from '../grids/WoGrid';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

const mapStateToProps = state => {
  
    return {
        custworkorder: state.custworkorder,
    };
  };
  


class Customerlist extends Component {
    
      
    
    render() {
    return (
      
       <div className = "container" id="customer">
           <div className = "row">
               <div className = "col-md-8 mt-3">
                    <Customergrid/>
               </div>
               <div className = "col mt-3">
                    <Wogrid
                     workorders = {this.props.custworkorder.custworkorder}/>
               </div>
               
 
           </div>
           <div className = "row">
           </div>
         </div>  
    )
    }
};

export default connect(mapStateToProps, null)(Customerlist);

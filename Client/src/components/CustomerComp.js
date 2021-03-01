import React, { Component } from 'react';
import Customergrid from '../grids/CustomerGrid';
import Wogrid from '../grids/WoGrid';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerImg from '../images/customer.svg';
import WorkOrderImg from '../images/workorder.svg';



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
 
           <div className = "row justify-content-md-center">
               {/*
                <div className = "col-md-8 mt-3">
                    <img  height = {330} width = {330} src={CustomerImg} />
               </div>
               */}
               <div className = "col-md-6 mt-3">
               <img  height = {330} width = {330} src={WorkOrderImg} />
               </div>
           </div>
        </div>
    )
    }
};

export default connect(mapStateToProps, null)(Customerlist);

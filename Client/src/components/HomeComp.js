import React, { Component } from 'react'
import Wodue from '../grids/WodueGrid';
import Techload from '../grids/TechloadGrid';
import { connect } from "react-redux";
import { fetchdDueWorkorder, fetchdTodayWorkorder, fetchTechLoad} from '../actions/ActionCreators';

let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
const ctime = 'T08:00:00.000Z'; 

today = new Date().toISOString().slice(0,10);

//today = "2021-02-08T08:00:00.000Z";

/* 2020-01-04T08:00:00.000Z */

const mapDispatchToProps = {
  fetchdDueWorkorder:() => (fetchdDueWorkorder()),
  fetchdTodayWorkorder: () => (fetchdTodayWorkorder()),
  fetchTechLoad:() => (fetchTechLoad())
  
}


const mapStateToProps = state => {
  
  return {
      worderdue: state.workorder,
      wordertoday: state.wordertoday,
      techload: state.techload

  };
};

class Home extends Component {
   constructor(props) {
       super(props); {
          this.state  = {
               currentDate: new Date(), 
          }

       }
   }

   componentDidMount(){
   
   this.props.fetchdDueWorkorder();
   this.props.fetchdTodayWorkorder();
   this.props.fetchTechLoad();
  }   

render()
{
    return (
        <React.Fragment>
          <div className = "container">
              
              <div className = "row">
                    <div className = "col-12 mt-3">
                        <h4>Dashboard</h4>
                        
                   </div>
                   <div className = "col-md-6 col-xs-12 mt-3">
                     <h6>Past due Work Order(s)</h6> 
                      <Wodue 
                      workorders = {this.props.worderdue.worderdue}
                                                                                   />  
                   </div>
                   <div className = "col-md-6 col-xs-12 mt-3">
                      <h6>Work Order(s) due Today</h6> 
                      <Wodue 
                        workorders = {this.props.wordertoday.wordertoday}
                    /> 
                         
                   </div>
              </div>
              <div className = "row justify-content-md-center">
                    <div className = "col-md-6 col-xs-12  mt-5" >
                      <h6>Technician's Workload</h6>   
                         <Techload 
                          techload = {this.props.techload.techload} />
                    </div>
              </div>
         </div>    
           
        </React.Fragment>
    )
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);

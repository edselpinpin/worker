import React, { Component } from 'react'
import Wodue from '../grids/WodueGrid';
import Techload from '../grids/TechloadGrid';
import { connect } from "react-redux";
import { fetchdDueWorkorder, fetchdTodayWorkorder,fetchdOpenWorkorder, fetchTechLoad} from '../actions/ActionCreators';
import { Card, CardImg, CardImgOverlay, CardTitle, Col, Row} from 'reactstrap';

//import {ReactComponent as home} from '../images/home.svg'
//import  HomeImg from '../images/home.png'
import  HomeImgSvg from '../images/home.svg'

let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
const ctime = 'T08:00:00.000Z'; 

//today = new Date().toISOString().slice(0,10);

//today = "2021-02-08T08:00:00.000Z";

/* 2020-01-04T08:00:00.000Z */

const mapDispatchToProps = {
  fetchdDueWorkorder:() => (fetchdDueWorkorder()),
  fetchdTodayWorkorder: () => (fetchdTodayWorkorder()),
  fetchTechLoad:() => (fetchTechLoad()),
  fetchdOpenWorkorder:() =>(fetchdOpenWorkorder())
  
}


const mapStateToProps = state => {
  
  return {
      worderdue: state.workorder,
      wordertoday: state.wordertoday,
      worderopen: state.worderopen,
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
   this.props.fetchdOpenWorkorder();
  }   

render()
{
    return (
        <React.Fragment>
          <div className = "container">
              <Row className = "row mt-3">  
                   <Col md={4}></Col>
                   <Col md={{ span: 4, offset: 1 }}><img  height = {100} width = {200} src={HomeImgSvg} /><h2>Dashboard</h2></Col>
                    
             </Row>  
             {/*
               <div className = "row mt-3">
                    <div className = "col-md-4"></div>
                    <div className = "col-md-auto"><img  height = {100} width = {200} src={HomeImgSvg} /><h3>At a Glance</h3></div>
                    


              </div>
             */}
              


                 <div className = "row justify-content-md-center">  
                   <div className = "col-md-6 col-xs-12 mt-3">
                     <h6>Past due Work Order(s)</h6> 
                      <Wodue 
                      workorders = {this.props.worderdue.worderdue}
                                                                                   />  
                   </div>
                   <div className = "col-md-6 col-xs-12 mt-3">
                      <h6>Work Order(s) in Progress  </h6> 
                      <Wodue 
                        workorders = {this.props.wordertoday.wordertoday}
                    /> 
                         
                   </div>
              </div>     
             
             
              <div className = "row justify-content-md-center">
                  
                    <div className = "col-md-6 col-xs-12 mt-5">
                        <h6>Open/Un-Closed Work Order(s)</h6> 
                          <Wodue 
                            workorders = {this.props.worderopen.worderopen}
                        /> 
                    </div>
                   

                    <div className = "col-md-6 col-xs-12  mt-5" >
                        <h6>Technician's Workload</h6>   
                              <Techload 
                              techload = {this.props.techload.techload} 
                        />
                    </div>
              </div>
                    
              
            </div>

              
          
           
        </React.Fragment>
    )
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);

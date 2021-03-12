import Header from './HeaderComp';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { fetchCustomer, fetchService, fetchTech, fetchWorkorder, fetchdDueWorkorder, fetchdTodayWorkorder, fetchdOpenWorkorder, fetchSysSettings} from '../actions/ActionCreators';
import { connect } from "react-redux";
import Home from './HomeComp';
import Workorder from './WorkorderComp';
import Invoicewo from './InvoicewoComp';
import Customerlist from './CustomerComp';
import Servicelist from './ServicelistComp';
import SysSettings from './SettingsComp';

const mapStateToProps = state => {
  
  return {
      customer: state.customer,
      service: state.service,
      tech: state.tech,
      sys_settings: state.sys_settings

  };
};

const mapDispatchToProps = {
  fetchSysSettings: () => (fetchSysSettings()),
  fetchCustomer: () => (fetchCustomer()),
  fetchService: () => (fetchService()),
  fetchTech: () => (fetchTech()),
  fetchWorkorder:() => (fetchWorkorder()),
  fetchdDueWorkorder:() => (fetchdDueWorkorder()),
  fetchdTodayWorkorder: () => (fetchdTodayWorkorder()),
  fetchdOpenWorkorder: () => (fetchdOpenWorkorder()),
 
  
}


class Main extends Component {
  
componentDidMount(){
  this.props.fetchSysSettings();
  this.props.fetchCustomer();
  this.props.fetchService();
  this.props.fetchTech();
  this.props.fetchWorkorder();
  this.props.fetchdDueWorkorder();
  this.props.fetchdTodayWorkorder();
  this.props.fetchdOpenWorkorder();
 
 
}

  
render() {
  return (
    <div>
      <Router>
        <Header
          sys_settings1 = {this.props.sys_settings.sys_settings} />
        <Switch>
            <Route path='/'     exact component={Home}/>
            <Route path='/workorder' component={Workorder}/>
            <Route path='/invoice' component={Invoicewo}/>
            <Route path='/customer' component={Customerlist}/>
            <Route path='/service' component={Servicelist}/>
            <Route exact path='/settings' render={()=> <SysSettings
                                                       sys_settings1 = {this.props.sys_settings.sys_settings}
                                                      />} /> 
                                                        
                                                          
                                                 
        </Switch>
      </Router>
     </div>
  );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);



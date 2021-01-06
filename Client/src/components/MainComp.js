import Header from './HeaderComp';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { fetchCustomer, fetchService, fetchTech} from '../actions/ActionCreators';
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
      tech: state.tech
  };
};

const mapDispatchToProps = {
  fetchCustomer: () => (fetchCustomer()),
  fetchService: () => (fetchService()),
  fetchTech: () => (fetchTech()),
}


class Main extends Component {
componentDidMount(){
  this.props.fetchCustomer();
  this.props.fetchService();
  this.props.fetchTech();
}
  
render() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
            <Route path='/'     exact component={Home}/>
            <Route path='/workorder' component={Workorder}/>
            <Route path='/invoice' component={Invoicewo}/>
            <Route path='/customer' component={Customerlist}/>
            <Route path='/service' component={Servicelist}/>
            <Route path='/settings' component={SysSettings}/>
        </Switch>
      </Router>
     </div>
  );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);



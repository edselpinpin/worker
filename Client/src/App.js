import './App.css';
//import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComp';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';



import React from 'react'


//const Home = props => {
 
 //}, [])


const store = ConfigureStore();

function App() {
 
  return (
   
    <React.Fragment>  
      <Provider store={store}>
      <BrowserRouter>
      <div className = "main">
        
          <Main />
       </div>   
       </BrowserRouter>
       </Provider>   
    </React.Fragment>
      
  );
}

export default App;
